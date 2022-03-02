export default class SearchComponent {
    constructor(viewer) {
        this.element = viewer.element;
        this.eventBus = viewer.eventBus;
        this.pdfFindController = viewer.pdfFindController;

        this._init();
    }

    _init() {
        let self = this;

        this.element.find('.find-input').on('input', function () {
            self._find('');
        });

        this.element.find('.find-next').on('click', function () {
            self._find('again');
        });

        this.element.find('.find-previous').on('click', function () {
            self._find('again', true);
        });

        this.element.find('.find-highlight-all').on('change', function () {
            self._find('highlightallchange');
        });

        this.element.find('.find-case-sensitive').on('change', function () {
            self._find('casesensitivitychange');
        });

        let findTextBtn = this.element.find('.find-text');
        findTextBtn.popover({
            container: self.element,
            html: true,
            content: self.element.find('.find-text-bar'),
            offset: '15px'
        }).on('hidden.bs.popover', function () {
            self.eventBus.dispatch('findbarclose');
        }).on('shown.bs.popover', function () {
            self.element.find('.popover.show .find-input').focus();
        });

        this.eventBus.on("updatefindmatchescount", function (state) {
            self._updateResultsCount(state.matchesCount);
        });

        this.eventBus.on("updatefindcontrolstate", function (state) {
            self._updateMatchesInfo(state);
        });
    }

    _find(type, findPrev = false) {
        let popover = this.element.find('.popover.show');
        let searchFor = popover.find('.find-input').val();
        let highlightAll = popover.find('.find-highlight-all').is(':checked');
        let caseSensitive = popover.find('.find-case-sensitive').is(':checked');

        this.pdfFindController.executeCommand("find" + type, {
            query: searchFor,
            phraseSearch: true,
            caseSensitive: caseSensitive,
            //entireWord: evt.entireWord,
            highlightAll: highlightAll,
            findPrevious: findPrev,
        });
    }

    _updateMatchesInfo({state, previous, matchesCount, rawQuery}) {
        let status = "found";
        let notFound = false;
        let infoMessage = this.element.find('.popover.show .find-info-message');

        switch (state) {
            // found
            case 0:
                break;
            // not found
            case 1:
                notFound = true;
                status = 'not-found';
                infoMessage.html("Phrase not found");
                break;
            // start-end
            case 2:
                break;
            // pending
            case 3:
                break;
        }

        infoMessage.attr('data-status', status);

        if (!notFound) {
            this._updateResultsCount(matchesCount);
        }
    }

    _updateResultsCount({current, total}) {
        let matchesCountMsg = '';

        if (total > 1000) {
            matchesCountMsg += 'more than 1000 '
        } else {
            matchesCountMsg += `${current} of ${total} `
        }

        matchesCountMsg += 'matches';

        this.element.find('.popover.show .find-info-message')
            .html(matchesCountMsg);
    }

}
