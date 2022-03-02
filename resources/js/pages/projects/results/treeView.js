import CodeManager from "../codes/codeManager";

export default function generateTree(container, chartData, self) {

    // Set the dimensions and margins of the diagram
    let margin = {top: 20, right: 90, bottom: 30, left: 90},
        width = 1200 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    let maxLabelLength = 0;
    let totalNodes = 0;

    // A recursive helper function for performing some setup by walking through all nodes
    function visit(parent, visitFn, childrenFn) {
        if (!parent) return;
        visitFn(parent);
        var children = childrenFn(parent);
        if (children) {
            var count = children.length;
            for (var i = 0; i < count; i++) {
                visit(children[i], visitFn, childrenFn);
            }
        }
    }

    // Call visit function to establish maxLabelLength
    visit(chartData, function (d) {
        totalNodes++;
        maxLabelLength = Math.max(d.name.length, maxLabelLength);
    }, function (d) {
        return d.children && d.children.length > 0 ? d.children : null;
    });

    function zoom(event) {
        if (event.transform != null) {
            svg.attr("transform", event.transform);
        }
    }

    var zoomListener = d3.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

    function centerNode(source) {
        let t = d3.zoomTransform(svg.node());
        let x = -source.y0;
        let y = -source.x0;
        x = x * t.k + width / 2;
        y = y * t.k + height / 2;
        d3.select('svg').transition().duration(duration)
            .call(zoomListener.transform, d3.zoomIdentity.translate(x, y).scale(t.k));
    }

    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    let svg = d3.select(container[0])
        .append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
        .call(zoomListener)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    let i = 0, duration = 750, root;

    // declares a tree layout and assigns the size
    let treemap = d3.tree().size([height, width]);

    // Assigns parent, children, height, depth
    root = d3.hierarchy(chartData, function (d) {
        return d.children;
    });
    root.x0 = height / 2;
    root.x0 = 200;
    root.y0 = 50;


    update(root);
    centerNode(root);

    container.parent().find('.btn-expand-all').off().click(function () {
        expand(root);
        update(root);
    });

    container.parent().find('.btn-collapse-all').off().click(function () {
        root.children.forEach(collapse);
        collapse(root);
        update(root);
    });

    container.parent().find('.download').off().click(function () {
        let svg = container.find('svg');
        if (!svg.length) return;

        svg = svg.first()[0];

        //get svg source.
        let serializer = new XMLSerializer();
        let source = serializer.serializeToString(svg);

        //add name spaces.
        if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
            source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
        }
        if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
            source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
        }

        //add xml declaration
        source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

        //convert svg source to URI data scheme.
        const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

        let downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = "download.svg";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });


    function collapse(d) {
        if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
        }
    }

    function expand(d) {
        const children = (d.children) ? d.children : d._children;
        if (d._children) {
            d.children = d._children;
            d._children = null;
        }
        if (children) children.forEach(expand);
    }


    function update(source) {
        // resize
        var levelWidth = [1];
        var childCount = function (level, n) {

            if (n.children && n.children.length > 0) {
                if (levelWidth.length <= level + 1) levelWidth.push(0);

                levelWidth[level + 1] += n.children.length;
                n.children.forEach(function (d) {
                    childCount(level + 1, d);
                });
            }
        };

        // calculate new hight
        childCount(0, root);
        let newHeight = d3.max(levelWidth) * 50; // 50 pixels per line
        treemap.size([newHeight, width]);


        // Assigns the x and y position for the nodes
        let treeData = treemap(root);


        // Compute the new tree layout.
        let nodes = treeData.descendants(), links = treeData.descendants().slice(1);

        // Set widths between levels based on maxLabelLength.
        nodes.forEach(function (d) {
            // d.y = d.depth * 180;
            d.y = (d.depth * (maxLabelLength * 8)); //maxLabelLength * 10px
            // alternatively to keep a fixed scale one can set a fixed depth per level
            // Normalize for fixed-depth by commenting out below line
            // d.y = (d.depth * 500); //500px per level.
        });

        // ****************** Nodes section ***************************

        // Update the nodes...
        let node = svg.selectAll('g.node')
            .data(nodes, function (d) {
                return d.id || (d.id = ++i);
            });

        // Enter any new modes at the parent's previous position.
        let nodeEnter = node.enter().append('g')
            .attr('class', 'node')
            .attr("transform", function (d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
            .on('click', click)
            .on('contextmenu', (event, d) => {
                if (!d?.data?.id) return;

                const menu = [
                    {
                        title: 'Edit code',
                        action: function () {
                            const code = CodeManager.getInstance().repository.get(d.data.id);
                            CodeManager.getInstance().uiManager.showEditModal(code).then((res) => {
                                if (res === true) ResultManager._updateReport();
                            }).catch(() => {
                            });
                        },
                    },
                    {
                        title: 'View quotes',
                        action: function () {
                            const code = CodeManager.getInstance().repository.get(d.data.id);
                            self.resultManager.showQuotesModal([code]);
                        }
                    }
                ];

                d3.contextMenu(menu, event)();
                event.preventDefault();
            });

        // Add Circle for the nodes
        nodeEnter.append('circle')
            .attr('class', 'node')
            .attr('r', 1e-6)
            .style("fill", function (d) {
                return d.data.color || 'black';
                //return d._children ? "lightsteelblue" : "#fff";
            })
            .style('stroke', 'black')
            .style('stroke-width', '2px');

        // Add labels for the nodes
        nodeEnter.append('text')
            .attr("dy", ".35em")
            .attr("x", function (d) {
                return d.children || d._children ? -13 : 13;
            })
            .attr("text-anchor", function (d) {
                return d.children || d._children ? "end" : "start";
            })
            .text(function (d) {
                return d.data.name;
            });

        // UPDATE
        let nodeUpdate = nodeEnter.merge(node);

        // Transition to the proper position for the node
        nodeUpdate.transition()
            .duration(duration)
            .attr("transform", function (d) {
                return "translate(" + d.y + "," + d.x + ")";
            });

        // Update the node attributes and style
        nodeUpdate.select('circle.node')
            .attr('r', 10)
            .style("fill", function (d) {
                return d.data.color || 'black';
                //   return d._children ? "lightsteelblue" : "#fff";
            })
            .attr('cursor', 'pointer');


        // Remove any exiting nodes
        let nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", function (d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
            .remove();

        // On exit reduce the node circles size to 0
        nodeExit.select('circle')
            .attr('r', 1e-6);

        // On exit reduce the opacity of text labels
        nodeExit.select('text')
            .style('fill-opacity', 1e-6);

        // ****************** links section ***************************

        // Update the links...
        let link = svg.selectAll('path.link')
            .data(links, function (d) {
                return d.id;
            });

        // Enter any new links at the parent's previous position.
        let linkEnter = link.enter().insert('path', "g")
            .attr("class", "link")
            .attr('d', function (d) {
                let o = {x: source.x0, y: source.y0}
                return diagonal(o, o)
            })
            .style('fill', 'none')
            .style('stroke', '#ccc')
            .style('stroke-width', '2px');

        // UPDATE
        let linkUpdate = linkEnter.merge(link);

        // Transition back to the parent element position
        linkUpdate.transition()
            .duration(duration)
            .attr('d', function (d) {
                return diagonal(d, d.parent)
            });

        // Remove any exiting links
        let linkExit = link.exit().transition()
            .duration(duration)
            .attr('d', function (d) {
                let o = {x: source.x, y: source.y}
                return diagonal(o, o)
            })
            .remove();

        // Store the old positions for transition.
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });

        // Creates a curved (diagonal) path from parent to the child nodes
        function diagonal(s, d) {
            return `M ${s.y} ${s.x}
                            C ${(s.y + d.y) / 2} ${s.x},
                              ${(s.y + d.y) / 2} ${d.x},
                              ${d.y} ${d.x}`;
        }


        // Toggle children on click.
        function click(event, d) {
            if (event.defaultPrevented) return; // click suppressed

            if (d.children) {
                d._children = d.children;
                d.children = null;
            } else {
                d.children = d._children;
                d._children = null;
            }
            update(d);
            centerNode(d);
        }
    }
}
