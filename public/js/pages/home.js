/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./resources/js/pages/home.js ***!
  \************************************/
$(document).ready(function () {
  var createModal = $('#modal-create-project');
  $('.btn-create-project').click(function () {
    createModal.find('[name=color]').spectrum({
      type: "component",
      hideAfterPaletteSelect: true,
      showAlpha: false,
      allowEmpty: false
    });
    createModal.modal();
  });
  $('.project-container').on({
    mouseenter: function mouseenter() {
      $(this).find('.project-description').toggleClass('expanded');
      $(this).find('.project-option-card').toggleClass('expanded');
    },
    mouseleave: function mouseleave() {
      $(this).find('.project-description').toggleClass('expanded');
      $(this).find('.project-option-card').toggleClass('expanded');
    }
  });
  $('.btn-remove').click(function () {
    var btn = this;
    confirmModal(null, null, null, null, function () {
      btn.closest('form').submit();
    });
  });
});
/******/ })()
;