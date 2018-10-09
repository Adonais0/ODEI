var $window = $(window);
var $elem = $(".counting")

function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        console.log("true");
        $elem.each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');

            $({ countNum: $this.text()}).animate({countNum: countTo},
            {
              duration: 3000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
              }
            });
        });
    }
});
