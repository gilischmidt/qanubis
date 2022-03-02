$(document).ready(function () {
    let createModal = $('#modal-create-project');

    $('.btn-create-project').click(function () {
        createModal.find('[name=color]').spectrum({
            type: "component",
            hideAfterPaletteSelect: true,
            showAlpha: false,
            allowEmpty: false,
        });

        createModal.modal();
    });

    $('.project-container').on({
        mouseenter: function () {
            $(this).find('.project-description').toggleClass('expanded');
            $(this).find('.project-option-card').toggleClass('expanded');
        },
        mouseleave: function () {
            $(this).find('.project-description').toggleClass('expanded');
            $(this).find('.project-option-card').toggleClass('expanded');
        }
    });

    $('.btn-remove').click(function () {
        let btn = this;
        confirmModal(null, null, null, null, function () {
            btn.closest('form').submit();
        });
    });
});
