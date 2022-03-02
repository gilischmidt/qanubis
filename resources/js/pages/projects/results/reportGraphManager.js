import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import generateTree from "./treeView";

const STOP_WORDS = ['and', 'or', 'the', 'for', 'in', 'at', 'on', 'are', 'is', 'of', 'to', 'be', 'as', 'can', 'thus', "a", "as", "able", "about", "above", "according", "accordingly", "across", "actually", "after", "afterwards", "again", "against", "aint", "all", "allow", "allows", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "an", "and", "another", "any", "anybody", "anyhow", "anyone", "anything", "anyway", "anyways", "anywhere", "apart", "appear", "appreciate", "appropriate", "are", "arent", "around", "as", "aside", "ask", "asking", "associated", "at", "available", "away", "awfully", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "behind", "being", "believe", "below", "beside", "besides", "best", "better", "between", "beyond", "both", "brief", "but", "by", "cmon", "cs", "came", "can", "cant", "cannot", "cant", "cause", "causes", "certain", "certainly", "changes", "clearly", "co", "com", "come", "comes", "concerning", "consequently", "consider", "considering", "contain", "containing", "contains", "corresponding", "could", "couldnt", "course", "currently", "definitely", "described", "despite", "did", "didnt", "different", "do", "does", "doesnt", "doing", "dont", "done", "down", "downwards", "during", "each", "edu", "eg", "eight", "either", "else", "elsewhere", "enough", "entirely", "especially", "et", "etc", "even", "ever", "every", "everybody", "everyone", "everything", "everywhere", "ex", "exactly", "example", "except", "far", "few", "ff", "fifth", "first", "five", "followed", "following", "follows", "for", "former", "formerly", "forth", "four", "from", "further", "furthermore", "get", "gets", "getting", "given", "gives", "go", "goes", "going", "gone", "got", "gotten", "greetings", "had", "hadnt", "happens", "hardly", "has", "hasnt", "have", "havent", "having", "he", "hes", "hello", "help", "hence", "her", "here", "heres", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "hi", "him", "himself", "his", "hither", "hopefully", "how", "howbeit", "however", "i", "id", "ill", "im", "ive", "ie", "if", "ignored", "immediate", "in", "inasmuch", "inc", "indeed", "indicate", "indicated", "indicates", "inner", "insofar", "instead", "into", "inward", "is", "isnt", "it", "itd", "itll", "its", "its", "itself", "just", "keep", "keeps", "kept", "know", "knows", "known", "last", "lately", "later", "latter", "latterly", "least", "less", "lest", "let", "lets", "like", "liked", "likely", "little", "look", "looking", "looks", "ltd", "mainly", "many", "may", "maybe", "me", "mean", "meanwhile", "merely", "might", "more", "moreover", "most", "mostly", "much", "must", "my", "myself", "name", "namely", "nd", "near", "nearly", "necessary", "need", "needs", "neither", "never", "nevertheless", "new", "next", "nine", "no", "nobody", "non", "none", "noone", "nor", "normally", "not", "nothing", "novel", "now", "nowhere", "obviously", "of", "off", "often", "oh", "ok", "okay", "old", "on", "once", "one", "ones", "only", "onto", "or", "other", "others", "otherwise", "ought", "our", "ours", "ourselves", "out", "outside", "over", "overall", "own", "particular", "particularly", "per", "perhaps", "placed", "please", "plus", "possible", "presumably", "probably", "provides", "que", "quite", "qv", "rather", "rd", "re", "really", "reasonably", "regarding", "regardless", "regards", "relatively", "respectively", "right", "said", "same", "saw", "say", "saying", "says", "second", "secondly", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "self", "selves", "sensible", "sent", "serious", "seriously", "seven", "several", "shall", "she", "should", "shouldnt", "since", "six", "so", "some", "somebody", "somehow", "someone", "something", "sometime", "sometimes", "somewhat", "somewhere", "soon", "sorry", "specified", "specify", "specifying", "still", "sub", "such", "sup", "sure", "ts", "take", "taken", "tell", "tends", "th", "than", "thank", "thanks", "thanx", "that", "thats", "thats", "the", "their", "theirs", "them", "themselves", "then", "thence", "there", "theres", "thereafter", "thereby", "therefore", "therein", "theres", "thereupon", "these", "they", "theyd", "theyll", "theyre", "theyve", "think", "third", "this", "thorough", "thoroughly", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "took", "toward", "towards", "tried", "tries", "truly", "try", "trying", "twice", "two", "un", "under", "unfortunately", "unless", "unlikely", "until", "unto", "up", "upon", "us", "use", "used", "useful", "uses", "using", "usually", "value", "various", "very", "via", "viz", "vs", "want", "wants", "was", "wasnt", "way", "we", "wed", "well", "were", "weve", "welcome", "well", "went", "were", "werent", "what", "whats", "whatever", "when", "whence", "whenever", "where", "wheres", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whos", "whoever", "whole", "whom", "whose", "why", "will", "willing", "wish", "with", "within", "without", "wont", "wonder", "would", "would", "wouldnt", "yes", "yet", "you", "youd", "youll", "youre", "youve", "your", "yours", "yourself", "yourselves", "zero"];

// taken from: https://plnkr.co/edit/hAx36JQhb0RsvVn7TomS?p=info&preview
d3.contextMenu = function (menu, ev, openCallback) {

    // create the div element that will hold the context menu
    d3.selectAll('.d3-context-menu').data([1])
        .enter()
        .append('div')
        .attr('class', 'd3-context-menu');

    // close menu
    d3.select('body').on('click.d3-context-menu', function () {
        d3.select('.d3-context-menu').style('display', 'none');
    });

    // this gets executed when a contextmenu event occurs
    return function (data, index) {
        let elm = this;

        d3.selectAll('.d3-context-menu').html('');
        let list = d3.selectAll('.d3-context-menu').append('ul');
        list.selectAll('li').data(menu).enter()
            .append('li')
            .html(function (d) {
                return d.title;
            })
            .on('click', function (d, i) {
                i.action(elm, data, index, d, i);
                d3.select('.d3-context-menu').style('display', 'none');
            });

        // the openCallback allows an action to fire before the menu is displayed
        // an example usage would be closing a tooltip
        if (openCallback) openCallback(data, index);

        // display context menu
        d3.select('.d3-context-menu')
            .style('left', (ev.pageX - 2) + 'px')
            .style('top', (ev.pageY - 2) + 'px')
            .style('display', 'block');

        ev.preventDefault();
    };
};

export default class ReportGraphManager {

    constructor(resultManager) {
        am4core.options.autoDispose = true;
        am4core.useTheme(am4themes_material)
        am4core.useTheme(am4themes_animated);

        this.charts = new Map();
        this.resultManager = resultManager;

        this.defaultExcludedWords = [];
    }

    async generateCodeRelationsHeatmap(data) {
        let self = this;
        let container = $('#results-index-page').find('.code-relations-heatmap');

        return new Promise((resolve, reject) => {
            let chartData = [];

            let codeRelations = {};

            data.quotes.forEach(quote => {
                if (quote.codes.length <= 1) return;

                quote.codes.forEach(code1 => {
                    quote.codes.forEach(code2 => {
                        if (code1 === code2) return;
                        const key = code1.id + '-' + code2.id;
                        if (!codeRelations[key]) codeRelations[key] = 0;
                        codeRelations[key]++;
                    });
                });
            });

            const getTooltip = (code) => {
                let parents = '';
                let codeToolTip = code.name;
                if (code.parent) {
                    let textFn = (parent) => {
                        parents = `${parent.name} -> ` + parents;
                        if (parent.parent) textFn(parent.parent);
                    }
                    textFn(code.parent);
                    codeToolTip += ` [font-size: 10px;](${parents + code.name})[/]`;
                }

                return codeToolTip;
            }

            data.codes.forEach(c1 => {
                data.codes.forEach(c2 => {
                    let code1 = c1.code;
                    let code2 = c2.code;


                    chartData.push({
                        x: code1.name.length > 12 ? code1.name.slice(0, 12) + '...' : code1.name,
                        y: code2.name.length > 12 ? code2.name.slice(0, 12) + '...' : code2.name,
                        value: codeRelations[code1.id + '-' + code2.id] || codeRelations[code2.id + '-' + code1.id] || 0,
                        code1Tooltip: getTooltip(code1),
                        code2Tooltip: getTooltip(code2),
                        code1: code1,
                        code2: code2,
                    });
                });
            });

            chartData = chartData.sort((a, b) => {
                return a.x.toLowerCase().localeCompare(b.x.toLowerCase())
                    || a.y.toLowerCase().localeCompare(b.y.toLowerCase());
            });


            if (isset(self.charts) && self.charts.get('code-relations-heatmap') && !self.charts.get('code-relations-heatmap').isDisposed()) {
                self.charts.get('code-relations-heatmap').dispose();
            }

            let chart = am4core.create(container[0], am4charts.XYChart);
            self.charts.set('code-relations-heatmap', chart);

            chart.exporting.menu = new am4core.ExportMenu();
            chart.hiddenState.properties.opacity = 0;
            chart.maskBullets = false;

            let cellSize = 10;
            chart.events.on("datavalidated", function (ev) {
                let chart = ev.target;
                let yCategoryAxis = chart.yAxes.getIndex(0);
                let xCategoryAxis = chart.xAxes.getIndex(0);

                // Calculate how we need to adjust chart dimensions
                let adjustHeight = chart.data.length * cellSize - yCategoryAxis.pixelHeight;
                let adjustWidth = chart.data.length * cellSize - xCategoryAxis.pixelHeight;

                // get current chart dimensions
                let targetHeight = chart.pixelHeight + adjustHeight;
                let targetWidth = chart.pixelHeight + adjustWidth;

                if (targetHeight < 500) {
                    targetHeight = 500;
                }

                chart.svgContainer.htmlElement.style.height = targetHeight + "px";

                if (targetWidth > 1100) {
                    chart.svgContainer.htmlElement.style.width = targetWidth + "px";
                }
            });

            // axis
            let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            xAxis.title.text = 'Codes';
            xAxis.dataFields.category = "x";
            xAxis.renderer.grid.template.disabled = true;
            xAxis.renderer.minGridDistance = 40;

            let yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
            yAxis.title.text = 'Codes';
            yAxis.dataFields.category = "y";
            yAxis.renderer.grid.template.disabled = true;
            yAxis.renderer.inversed = true;
            yAxis.renderer.minGridDistance = 30;


            // series
            let series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.categoryX = "x";
            series.dataFields.categoryY = "y";
            series.dataFields.value = "value";
            series.sequencedInterpolation = true;
            series.columns.hoverCursor = 'pointer';
            series.columns.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;

            series.columns.template.events.on("hit", function (ev) {
                let item = ev.target.dataItem.dataContext;
                self.resultManager.showQuotesModal([item.code1, item.code2], []);
            });

            // bullet inside series
            let bullet2 = series.bullets.push(new am4charts.LabelBullet());
            bullet2.label.text = "{value}";
            bullet2.label.fill = am4core.color("#fff");
            bullet2.label.background.fill = am4core.color("#000");
            bullet2.label.padding(2, 2, 2, 2);
            bullet2.label.background.stroke = am4core.color("#000");
            bullet2.label.background.strokeOpacity = 1;
            bullet2.zIndex = 1;
            bullet2.fontSize = 14;
            bullet2.interactionsEnabled = false;


            // Set up column appearance
            let column = series.columns.template;
            column.strokeWidth = 2;
            column.strokeOpacity = 1;
            column.stroke = am4core.color("#ffffff");
            column.tooltipText = "[bold]Code 1:[/] {code1Tooltip} \n[bold]Code 2:[/] {code2Tooltip} \n[bold]Quotes:[/] {value}";
            column.width = am4core.percent(100);
            column.height = am4core.percent(100);
            column.column.cornerRadius(6, 6, 6, 6);

            series.heatRules.push({
                target: column, property: "fill", min: am4core.color("#FFFFCC"), max: am4core.color("#800026"),
            });


            // heat legend
            let heatLegend = chart.bottomAxesContainer.createChild(am4charts.HeatLegend);
            heatLegend.width = am4core.percent(100);
            heatLegend.series = series;
            heatLegend.valueAxis.renderer.labels.template.fontSize = 9;
            heatLegend.valueAxis.renderer.minGridDistance = 30;
            heatLegend.margin(15, 5, 5, 5);

            // heat legend behavior
            series.columns.template.events.on("over", (event) => {
                handleHover(event.target);
            })

            series.columns.template.events.on("hit", (event) => {
                handleHover(event.target);
            })

            function handleHover(column) {
                if (!isNaN(column.dataItem.value)) {
                    heatLegend.valueAxis.showTooltipAt(column.dataItem.value)
                } else {
                    heatLegend.valueAxis.hideTooltip();
                }
            }

            series.columns.template.events.on("out", (event) => {
                heatLegend.valueAxis.hideTooltip();
            })

            chart.data = chartData;

            chart.events.on('ready', () => {
                resolve(true);
            });
        });
    }

    async generateQuotesHeatmap(data) {
        let self = this;
        let container = $('#results-index-page').find('.heatmap');

        return new Promise((resolve, reject) => {
            let chartData = [];

            data.documents.forEach(documentData => {
                data.codes.forEach(codeData => {
                    let codeToolTip = codeData.code.name;

                    let parents = '';
                    if (codeData.code.parent) {
                        let textFn = (parent) => {
                            parents = `${parent.name} -> ` + parents;
                            if (parent.parent) textFn(parent.parent);
                        }

                        textFn(codeData.code.parent);
                        codeToolTip += ` [font-size: 10px;](${parents + codeData.code.name})[/]`;
                    }

                    chartData.push({
                        x: codeData.code.name.length > 12 ? codeData.code.name.slice(0, 12) + '...' : codeData.code.name,
                        y: documentData.document.name.length > 22 ? documentData.document.name.slice(0, 22) + '...' : documentData.document.name,
                        value: documentData.quotesPerRelatedCode.has(codeData.code.id) ? documentData.quotesPerRelatedCode.get(codeData.code.id) : 0,
                        code: codeData.code,
                        document: documentData.document,
                        codeToolTip,
                    })
                });
            });

            if (isset(self.charts) && self.charts.get('heatmap') && !self.charts.get('heatmap').isDisposed()) {
                self.charts.get('heatmap').dispose();
            }

            let chart = am4core.create(container[0], am4charts.XYChart);
            self.charts.set('heatmap', chart);

            chart.exporting.menu = new am4core.ExportMenu();
            chart.hiddenState.properties.opacity = 0;
            chart.maskBullets = false;

            let cellSize = 10;
            chart.events.on("datavalidated", function (ev) {
                let chart = ev.target;
                let yCategoryAxis = chart.yAxes.getIndex(0);
                let xCategoryAxis = chart.xAxes.getIndex(0);

                // Calculate how we need to adjust chart dimensions
                let adjustHeight = chart.data.length * cellSize - yCategoryAxis.pixelHeight;
                let adjustWidth = chart.data.length * cellSize - xCategoryAxis.pixelHeight;

                // get current chart dimensions
                let targetHeight = chart.pixelHeight + adjustHeight;
                let targetWidth = chart.pixelHeight + adjustWidth;

                if (targetHeight < 500) {
                    targetHeight = 500;
                }

                chart.svgContainer.htmlElement.style.height = targetHeight + "px";

                if (targetWidth > 1100) {
                    chart.svgContainer.htmlElement.style.width = targetWidth + "px";
                }
            });

            // axis
            let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            xAxis.title.text = 'Codes';
            xAxis.dataFields.category = "x";
            xAxis.renderer.grid.template.disabled = true;
            xAxis.renderer.minGridDistance = 40;

            let yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
            yAxis.title.text = 'Documents';
            yAxis.dataFields.category = "y";
            yAxis.renderer.grid.template.disabled = true;
            yAxis.renderer.inversed = true;
            yAxis.renderer.minGridDistance = 30;


            // series
            let series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.categoryX = "x";
            series.dataFields.categoryY = "y";
            series.dataFields.value = "value";
            series.sequencedInterpolation = true;
            series.columns.hoverCursor = 'pointer';
            series.columns.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;

            series.columns.template.events.on("hit", function (ev) {
                let item = ev.target.dataItem.dataContext;
                self.resultManager.showQuotesModal([item.code], [item.document]);
            });

            // bullet inside series
            let bullet2 = series.bullets.push(new am4charts.LabelBullet());
            bullet2.label.text = "{value}";
            bullet2.label.fill = am4core.color("#fff");
            bullet2.label.background.fill = am4core.color("#000");
            bullet2.label.padding(2, 2, 2, 2);
            bullet2.label.background.stroke = am4core.color("#000");
            bullet2.label.background.strokeOpacity = 1;
            bullet2.zIndex = 1;
            bullet2.fontSize = 14;
            bullet2.interactionsEnabled = false;


            // Set up column appearance
            let column = series.columns.template;
            column.strokeWidth = 2;
            column.strokeOpacity = 1;
            column.stroke = am4core.color("#ffffff");
            column.tooltipText = "[bold]Document:[/] {document.name} \n[bold]Code:[/] {codeToolTip} \n[bold]Quotes:[/] {value}";
            column.width = am4core.percent(100);
            column.height = am4core.percent(100);
            column.column.cornerRadius(6, 6, 6, 6);

            series.heatRules.push({
                target: column, property: "fill", min: am4core.color("#FFFFCC"), max: am4core.color("#800026"),
            });


            // heat legend
            let heatLegend = chart.bottomAxesContainer.createChild(am4charts.HeatLegend);
            heatLegend.width = am4core.percent(100);
            heatLegend.series = series;
            heatLegend.valueAxis.renderer.labels.template.fontSize = 9;
            heatLegend.valueAxis.renderer.minGridDistance = 30;
            heatLegend.margin(15, 5, 5, 5);

            // heat legend behavior
            series.columns.template.events.on("over", (event) => {
                handleHover(event.target);
            })

            series.columns.template.events.on("hit", (event) => {
                handleHover(event.target);
            })

            function handleHover(column) {
                if (!isNaN(column.dataItem.value)) {
                    heatLegend.valueAxis.showTooltipAt(column.dataItem.value)
                } else {
                    heatLegend.valueAxis.hideTooltip();
                }
            }

            series.columns.template.events.on("out", (event) => {
                heatLegend.valueAxis.hideTooltip();
            })

            chart.data = chartData;

            chart.events.on('ready', () => {
                resolve(true);
            });
        });
    }

    async generateWordCloud(data) {
        let self = this;
        let page = $('#results-index-page');
        let container = page.find('.word-cloud-container');

        return new Promise((resolve, reject) => {
            if (isset(self.charts) && self.charts.get('wordCloud') && !self.charts.get('wordCloud').isDisposed()) {
                self.charts.get('wordCloud').dispose();
            } else {
                // initialize selects
                let excludedWords = [];
                this.defaultExcludedWords.forEach(word => {
                    excludedWords.push({
                        id: word, text: word, selected: true,
                    })
                });

                container.find('.select-exclude-words').select2({
                    tags: true, data: excludedWords,
                });

                container.find('.btn-update-word-cloud-graph').click(function () {
                    UtilsHelper.showLoadingOverlay();

                    let wordsToDisplay = parseInt(container.find('.words-to-display').val());
                    if (wordsToDisplay < 1) wordsToDisplay = 1;

                    let minWordValue = parseInt(container.find('.min-word-value').val());
                    if (minWordValue < 1) minWordValue = 1;

                    series.excludeWords = container.find('.select-exclude-words').val().concat(STOP_WORDS);
                    series.maxCount = wordsToDisplay;
                    series.minValue = minWordValue;

                    UtilsHelper.hideLoadingOverlay();
                });
            }


            let wordsToDisplay = parseInt(container.find('.words-to-display').val());
            if (wordsToDisplay < 1) wordsToDisplay = 1;

            let minWordValue = parseInt(container.find('.min-word-value').val());
            if (minWordValue < 1) minWordValue = 1;

            let chart = am4core.create(container.find('.word-cloud')[0], am4plugins_wordCloud.WordCloud);
            self.charts.set('wordCloud', chart);

            chart.exporting.menu = new am4core.ExportMenu();

            let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
            series.accuracy = 3;
            series.rotationThreshold = 0;
            series.labels.template.tooltipText = "{word}: {value}";
            series.fontFamily = "Courier New";
            series.maxFontSize = am4core.percent(30);
            series.excludeWords = container.find('.select-exclude-words').val().concat(STOP_WORDS);
            series.maxCount = wordsToDisplay;
            series.minValue = minWordValue;
            series.minWordLength = 2;

            series.text = data.quotesText;

            chart.events.on('ready', () => {
                resolve(true);
            });
        });
    }

    async generateCodesWordCloud(data) {
        let self = this;
        let page = $('#results-index-page');

        return new Promise((resolve, reject) => {
            if (isset(self.charts) && self.charts.get('codesWordCloud') && !self.charts.get('codesWordCloud').isDisposed()) {
                self.charts.get('codesWordCloud').dispose();
            }

            let chart = am4core.create(page.find('.codes-word-cloud')[0], am4plugins_wordCloud.WordCloud);
            self.charts.set('codesWordCloud', chart);

            chart.exporting.menu = new am4core.ExportMenu();

            let chartData = [];
            data.codes.forEach(codeData => {
                chartData.push({
                    word: codeData.code.name, value: codeData.relatedQuotes.length, color: codeData.code.color,
                });
            });

            let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
            series.accuracy = 1;
            series.rotationThreshold = 0;
            series.labels.template.tooltipText = "{word}: {value}";
            series.fontFamily = "Courier New";
            series.maxFontSize = am4core.percent(30);
            //series.labels.template.propertyFields.fill = "color";

            series.minValue = 0;
            series.dataFields.word = "word";
            series.dataFields.value = "value";
            series.colors = new am4core.ColorSet();
            series.colors.passOptions = {};
            series.labels.template.propertyFields.fill = "color";

            series.data = chartData;

            chart.events.on('ready', () => {
                resolve(true);
            });
        });
    }

    // code to generate the tree was taken from: https://bl.ocks.org/d3noob/918a64abe4c3682cac3b4c3c852a698d
    async generateTreeMap(data) {
        let self = this;
        let container = $('#results-index-page').find('.tree-map');

        return new Promise((resolve, reject) => {
            let chartData = [];
            let dataToUse = [];

            if (container.children('svg').length) {
                d3.select(container.children('svg').first()[0]).remove();
            }

            let parseFn = (code) => {
                let name = `(${code.tableRow.data()[4] || 0}) ` + code.name;
                if (name.length > 22) name = name.substr(0, 25) + '...'

                const res = {
                    name,
                    id: code.id,
                    color: code.color
                };

                if (code.children) {
                    res.children = code.children.filter(c => dataToUse.includes(c)).map(c => parseFn(c)).sort(sortFn);
                } else {
                    res.children = [];
                }

                return res;
            }

            let sortFn = (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            let recursivelyAddParents = (code) => {
                if (code.parent && !dataToUse.includes(code.parent)) {
                    dataToUse.push(code.parent);
                    recursivelyAddParents(code.parent);
                }
            }

            data.codes.forEach(c => dataToUse.push(c.code));
            dataToUse.forEach(c => recursivelyAddParents(c));

            chartData = dataToUse.filter(code => !isset(code.parent_code_id)).map(parseFn);
            chartData = {name: '', children: chartData.sort(sortFn)};


            generateTree(container, chartData, self);

            resolve();
        });
    }
}
