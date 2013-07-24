

/**
 * Script that is executed when the page is loaded
 */
$(document).ready(function() {
    $('#myTab a:first').tab('show');

    $("a[role='menuitem']").click(
        function() {
            var value = $(this).text();
            $(this).parents('.dropdown').find('.dropdown-toggle > span').text(value);
        });
    oTable = $('#search_result_table').dataTable({
        "bJQueryUI" : true,
        "bAutoWidth": false,
        "bPaginate": false,
        "bInfo": false,
        "bProcessing": true,
        "sDom": "<'row-fluid'<'span6'T><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
        "sAjaxSource": 'js/arrays.txt'});

    /***************************** Binding 'click' event on a table row (open dialog_box) **********************************/
    $('#search_result_table').on("click", "tbody tr", function(event) {

        var id_row = oTable.fnGetData(this)[0];
        openDialogInfoCurrentRow(id_row);
    });
});