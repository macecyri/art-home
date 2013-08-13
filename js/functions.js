/* Get a catalog description and initialize the editor dialog box  */
function openDialogInfoMember(membertype) {
    var framePath =    "frames/" + membertype + "_presentation.html"
    $.ajax({
        url: framePath,
        success: function (data) {
            $("#modal_info").html(data);
            $("#modal_info").modal('show');
        },
        dataType: 'html'
    });

}
