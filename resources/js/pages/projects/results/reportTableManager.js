import ProjectManager from "../project/projectManager";
import CodeManager from "../codes/codeManager";
import DocumentManager from "../documents/documentManager";


export default class ReportTableManager {
    constructor(resultManager) {
        this.tables = new Map();
        this.resultManager = resultManager;

        this._bindWindowEventListeners();
    }

    _bindWindowEventListeners() {
        let page = $('#results-index-page');
        let self = this;

        page.on('click', '.btn-show-code-quotes', function () {
            let code = CodeManager.getInstance().repository.get($(this).closest('tr').attr('data-code-id'));
            self.resultManager.showQuotesModal([code], []);
        });

        page.on('click', '.btn-show-document-quotes', function () {
            let document = DocumentManager.getInstance().repository.get($(this).closest('tr').attr('data-document-id'));
            self.resultManager.showQuotesModal([], [document]);
        });
    }

    async generateDocumentsTable(data) {
        let table = this.tables.get('documents');
        let page = $('#results-index-page');
        let optionsTd = page.find('.selected-documents-table-options');

        if (!isset(table)) {
            table = this._initializeTable(page.find('.selected-documents-table'), {
                columnDefs: [
                    {
                        targets: [0, 3, 4],
                        width: '50px',
                    },
                    {
                        targets: 5,
                        orderable: false,
                        className: "text-center",
                        width: '100px',
                    }
                ],
            }, {
                columns: [0, 1, 2, 3, 4],
                title: 'Selected documents for: ' + ProjectManager.getInstance().projectData.name,
            });
            this.tables.set('documents', table);
        } else {
            table.clear();
        }

        data.documents.forEach(documentData => {
            let row = table.row.add([
                '<i class="fas fa-file-pdf mr-1"></i> PDF',
                `<span class="clickable">${documentData.document.name}</span>`,
                isset(documentData.document.description) ? documentData.document.description : '<span class="font-italic text-muted">No description</span>',
                documentData.relatedQuotes.length,
                documentData.relatedCodes.size,
                optionsTd.html(),
            ]);

            $(row.node()).attr('data-document-id', documentData.document.id);
        });

        table.draw();
    }

    async generateCodesTable(data) {
        let table = this.tables.get('codes');
        let page = $('#results-index-page');
        let optionsTd = page.find('.selected-codes-table-options');

        if (!isset(table)) {
            table = this._initializeTable(page.find('.selected-codes-table'), {
                columnDefs: [
                    {
                        targets: [0, 4, 5],
                        width: '50px',
                    },
                    {
                        targets: 6,
                        orderable: false,
                        className: "text-center",
                        width: '100px',
                    }
                ],
            }, {
                columns: [0, 1, 2, 3, 4, 5],
                title: 'Selected codes for: ' + ProjectManager.getInstance().projectData.name,
            });
            this.tables.set('codes', table);
        } else {
            table.clear();
        }

        data.codes.forEach(codeData => {
            let row = table.row.add([
                `<span class="badge p-2" style="color: ${codeData.code.text_color}; background: ${codeData.code.color};"> ${codeData.code.color}</span>`,
                `<span class="clickable">${codeData.code.name}</span>`,
                isset(codeData.code.brief_description) ? codeData.code.brief_description : '<span class="font-italic text-muted">-</span>',
                isset(codeData.code.description) ? codeData.code.description : '<span class="font-italic text-muted">-</span>',
                codeData.relatedQuotes.length,
                codeData.relatedDocuments.size,
                optionsTd.html(),
            ]);

            $(row.node()).attr('data-code-id', codeData.code.id);
        });

        table.draw();
    }


    _initializeTable(container, configs = {}, exportConfig = {}) {
        let table = container.DataTable({
            dom: "<'row'<'col-12' B>>" +
                "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
            autoWidth: false,
            buttons: [
                {
                    extend: 'copyHtml5',
                    text: '<i class="fas fa-copy"></i> Copy',
                    className: 'btn btn-sm btn-primary mb-1',
                    exportOptions: {
                        columns: exportConfig.columns,
                    },
                    title: exportConfig.title,
                },
                {
                    extend: 'csvHtml5',
                    text: '<i class="fas fa-file-csv"></i> CSV',
                    className: 'btn btn-sm btn-primary mb-1',
                    exportOptions: {
                        columns: exportConfig.columns
                    },
                    title: exportConfig.title,
                },
                {
                    extend: 'excelHtml5',
                    text: '<i class="fas fa-file-excel"></i> Excel',
                    className: 'btn btn-sm btn-primary mb-1',
                    exportOptions: {
                        columns: exportConfig.columns
                    },
                    title: exportConfig.title,
                },
                {
                    extend: 'pdfHtml5',
                    text: '<i class="fas fa-file-pdf"></i> PDF',
                    className: 'btn btn-sm btn-primary mb-1',
                    exportOptions: {
                        columns: exportConfig.columns
                    },
                    title: exportConfig.title,
                },
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"></i> Print',
                    className: 'btn btn-sm btn-primary mb-1',
                    exportOptions: {
                        columns: exportConfig.columns
                    },
                    title: exportConfig.title,
                },
            ],

            ...configs
        });

        $(table.table().node()).closest('.dataTables_wrapper').find('.dt-buttons').find('button').removeClass('btn-secondary');

        return table;
    }
}
