$(document).ready(function(){

    $("#upload-image").click(function() {
        //upload account image
    });

    $('.submenu').hide();

    // Fires when option-tab is clicked
    // Resets border of all option-tabs
    // Sets the bottom-border blue to clicked tab
    $(".options-tab").click(function() {
        $('.options-tab').css('border-style', "none");
        $(this).css('border-bottom', "solid 5px #3C9BD5");
    });

    // Fires when the wish list tab is clicked
    $('#tab-wish-list').click(function() {
        $('.submenu').hide();
        $('#wish-list-wrapper').show();
    });

    // Fires when the past orders tab is clicked
    $('#tab-past-orders').click(function() {
        $('.submenu').hide();
    });

    // Fires when payment options tab is clicked
    $('#tab-payment-options').click(function() {
        $('.submenu').hide();
        $('#payment-options-wrapper').show();
    });

    // Fires when donations tab is clicked
    $('#tab-donations').click(function() {
        $('.submenu').hide();
        $('#donations').show();
    });

    // Fires when wish list tab is clicked
    $('#tab-edit-settings').click(function() {
        $('.submenu').hide();
        $('#edit-settings').show();
    });
});
