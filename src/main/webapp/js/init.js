
/**
 * Script that is executed when the page is loaded
 */
$(document).ready(function() {

    $("a[role='menuitem']").click(
        function() {
            var value = $(this).text();
            $(this).parents('.dropdown').find('.dropdown-toggle > span').text(value);
        });
});