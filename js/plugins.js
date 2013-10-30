// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

//Lightweight Scroll Animation Plugin
function goToByScroll(id, speed){
    //Set default speed if not set
      if (speed == null) {
        speed = 'slow';
    }
    // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        speed);
  }

  $("a[data-id]").click(function(e) { 
        // Prevent a page reload when a link is pressed
      e.preventDefault(); 
        // Call the scroll function
      goToByScroll($(this).data("id"), $(this).data("speed"));   
  });