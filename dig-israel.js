$(document).ready(function () {
    jQuery(".aside-results").hide();
/*  tabs */
    $("#1aa").click(function () {
        $("#1aa").addClass('active');
        $("#2aa").removeClass('active');
        $("#3aa").removeClass('active');
        $("#4aa").removeClass('active');
        jQuery(".no-data-exist").show();
        jQuery(".aside-results").hide();
    });
    $("#2aa").click(function () {
        $("#2aa").addClass('active');
        $("#1aa").removeClass('active');
        $("#3aa").removeClass('active');
        $("#4aa").removeClass('active');
        jQuery(".no-data-exist").hide();
        jQuery(".aside-results").show();
    });
    $("#3aa").click(function () {
        $("#3aa").addClass('active');
        $("#1aa").removeClass('active');
        $("#2aa").removeClass('active');
        $("#4aa").removeClass('active');
        jQuery(".no-data-exist").hide();
        jQuery(".aside-results").show();
    });
    $("#4aa").click(function () {
        $("#4aa").addClass('active');
        $("#1aa").removeClass('active');
        $("#2aa").removeClass('active');
        $("#3aa").removeClass('active');
        jQuery(".no-data-exist").hide();
        jQuery(".aside-results").show();
    });
    /* end tabs */

    //-----Button to next tab --------
    jQuery(".level1").click(function () {
        $("#2aa").click();
        $('html, body').animate({
            scrollTop:200
        }, 200);
    });
    jQuery(".level2").click(function () {
        $("#3aa").click();
        $('html, body').animate({
            scrollTop: 200
        }, 200);
    });
    jQuery(".level3").click(function () {
        $("#4aa").click();
        $('html, body').animate({
            scrollTop: 200
        }, 200);
    });


    //--------- edit button prev to previus tab -------
    jQuery(".tab-result1 .edit a").click(function () {
        $("#1aa").click();
    });
    jQuery(".tab-result2 .edit a").click(function () {
        $("#2aa").click();
    });
    jQuery(".tab-result3 .edit a").click(function () {
        $("#3aa").click();
    });  
});