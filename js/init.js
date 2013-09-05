

/**
 * Script that is executed when the page is loaded
 */
$(document).ready(function() {
    $('#myTab a:first').tab('show');

    /***************************** Load external html frames **********************************/
    $('[data-htmltoload]').each(function() {
        var urltoload = 'frames/' + $(this).data('htmltoload') + '.html';
        $(this).load(urltoload, function() {
            /***************************** Binding 'click' event on buttons (open dialog_box) **********************************/
            $('button[data-targetmodal]').on("click", function() {
                openModal($(this).data('targetmodal'));
            });
        });
    });


});