$(function () {
    $('#menu dt').click(function () {
        $('#menu dd').slideToggle();
    });
});

$(document).ready(function () {
    $('body').html('<p>jQueryの動作チェック</p>');
});