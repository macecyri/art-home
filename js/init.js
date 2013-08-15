

/**
 * Script that is executed when the page is loaded
 */
$(document).ready(function() {
    $('#myTab a:first').tab('show');

    /***************************** Binding 'click' event on a the information button (open dialog_box) **********************************/

    $('#criteriaInfo').on("click", function(event) {
        openDialogArtistCrieria();
    });
});