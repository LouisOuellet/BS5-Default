// Import JQuery
import "../node_modules/jquery/dist/jquery.min.js";

// Import the Bootstrap bundle (Bootstrap + Popper.js)
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

//
// Place any custom JS here
//

$(document).ready(function() {
    const content = $('#content');
    const sidebar = $('#sidebar');
    const sidebarCollapse = new bootstrap.Collapse(sidebar, {toggle: false});
    const sidebarToggle = $('#sidebarToggle');

    sidebarToggle.click(function() {
        if (sidebar.hasClass('show')) {
            sidebarToggle.removeClass('active');
            content.removeClass('col-md-10').addClass('col-md-12 ms-0');
        } else {
            sidebarToggle.addClass('active');
            content.removeClass('col-md-12 ms-0').addClass('col-md-10');
        }
        sidebarCollapse.toggle();
    });

    // Light Mode Switcher
    $('[data-bs-theme-value]').click(function () {
        const theme = $(this).attr('data-bs-theme-value');
        $('[data-bs-theme]').attr('data-bs-theme', theme);
        $('[data-bs-theme-value]').removeClass('active');
        $(this).addClass('active');
    });

    // Theme Switcher
    $('[data-theme-value]').click(function () {
        const theme = $(this).attr('data-theme-value');
        $('[data-theme-value]').removeClass('active');
        $(this).addClass('active');
        $('link[data-theme]').prop("disabled", true);
        $('link[data-theme="'+theme+'"]').prop("disabled", false);
    });

    // Back to Top
    $('.back-to-top').hide();
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $('.back-to-top').show();
        } else {
            $('.back-to-top').hide();
        }
    };
});