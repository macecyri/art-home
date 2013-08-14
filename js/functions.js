function openDialogInfoMember(membertype) {
    var framePath = "frames/" + membertype + "_presentation.html"
    $.ajax({
        url: framePath,
        success: function (data) {
            $("#modal_info").html(data);
            updateModalContent();
            $("#modal_info").modal('show');
        },
        dataType: 'html'
    });
}


function openDialogArtistCrieria() {
    $.ajax({
        url: "frames/artist_criteria.html",
        success: function (data) {
            $("#modal_info").html(data);
            updateModalContent();
            $("#modal_info").modal('show');
        },
        dataType: 'html'
    });
}

function updateModalContent() {
    $('.close_modal').on("click", function (event) {
        $("#modal_info").modal('hide');
    });
}
