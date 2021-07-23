$(function() {
  $(window).scroll(function() {
    var value = $(this).scrollTop();  //スクロール値を取得
 
    var hoge1 = value * 0.001 + 0.5;
    if (hoge1 > 0.5) {
      $('#area1').css('transform', 'scale(' + hoge1 + ')');
    }
 
    if (hoge1 > 0.1) {
      $('#area2').css('transform', 'perspective(1000px) rotateY(' + value + 'deg)');
    }

    var hoge3 = 2 - value * 0.0009;
    $('#area3').css('transform', 'scale(' + hoge3 + ') rotate(' + value + 'deg)');
 
    var hoge4 = value * 0.0009;
    if (hoge4 <= 1) {
      $('#area4').css('opacity', hoge4);
    }
  });
});


$(function () {
    var $window = $(window);

    $('.content').each(function (index) {
        var $self = $(this);
        var offsetCoords = $self.offset();

        $(window).scroll(function () {
            // If this section is in view
            if (($window.scrollTop() + $window.height()) > offsetCoords.top && ((offsetCoords.top + $self.height()) > $window.scrollTop())) {
                var yPos = -($window.scrollTop() / 8);
                if ($self.attr('id') != 'jsi-first') {
                    yPos += 126;
                }
                var coords = '50%' + yPos + 'px';
                $self.css('backgroundPosition', coords);

                // Check for other sprites in this section
                $('.sprite', $self).each(function (index) {
                    var $sprite = $(this);
                    var yPos = -($window.scrollTop() / $sprite.data('speed')) + $sprite.data('offsety');
                    $sprite.css('top', yPos);
                });
            }
        });
    });
});