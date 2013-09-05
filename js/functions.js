function openModal(modaltodisplay) {
    var modalurl = 'modal/' + modaltodisplay  + '.html';
    $.ajax({
        url: modalurl,
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

