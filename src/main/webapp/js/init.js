
var dialogWidth = $(window).width() * 0.9;
var dialogHeight = $(window).height() * 0.9;;

/**
 * Script that is executed when the page is loaded
 */
$(document).ready(function() {

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
        "sAjaxSource": '/Users/macecyri/WebstormProjects/art-home/art-home/src/main/webapp/js/arrays.txt'});

    /*****************************Initialisation of Editor dialog box  **********************************/
    $("#dialog_info").dialog({
        autoOpen : false,
        modal : true,
        resizable : true,
        draggable : true,
        autoResize:true ,
        width : dialogWidth,
        height : dialogHeight
    });

    /***************************** Binding 'click' event on a table row (open dialog_box) **********************************/
    $('#search_result_table').on("click", "tbody tr", function(event) {

        var id_row = oTable.fnGetData(this)[0];
        openDialogInfoCurrentRow(id_row);
    });

});