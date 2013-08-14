

/**
 * Script that is executed when the page is loaded
 */
$(document).ready(function() {
    $('#myTab a:first').tab('show');

    $("a[role='menuitem']").click(
        function() {
            var value = $(this).text();
            var mtype = $(this).data("mtype");
            $(this).parents('.dropdown').find('.dropdown-toggle > span').text(value);
            $('#memberType').data("mtype",mtype);

            if ("artist" != $('#memberType').data("mtype")) {
                $('#criteriaInfo').hide()
            } else {
                $('#criteriaInfo').show()
            };
        });

    /***************************** Binding 'click' event on a the information button (open dialog_box) **********************************/
    $('#memberType').on("click", "button", function(event) {
        openDialogInfoMember($('#memberType').data("mtype"));
    });
    $('#criteriaInfo').on("click", "button", function(event) {
        openDialogArtistCrieria();
    });
});