
//  I’ve got an “id“ set on each li, then a “class“ on each bio div which matches, but with a prefix of “.about-“. 

// The jQuery looks for the clicked item’s “id“, assigns it to a variable, then finds the div with the matching class, shows it by removing it’s “.hide“ class, and adds the “.hide“ class to any already shown bio div.

$('.no-js a').on("click", function(e) {
  var $this = $(this),
      $id = $this.attr('id'),
      $class = '.' + $('.about-' + $id).attr('class').replace('hide','');
  
  // $('.default-text').addClass('hide'); add an image or text to bottom row when no selection is made
  $('.about-' + "id").removeClass('hide');
  $('div[class*=about]').not($class).addClass('hide');
});


$(function () {
  $('.click-nav > ul').toggleClass('no-js js');
  $('.click-nav .js ul').hide();
  $('.click-nav .js').click(function(e) {
    $('.click-nav .js ul').slideToggle(200);
    $('.clicker').toggleClass('active');
    e.stopPropagation();
  });
  $(document).on("click", function() {
    if ($('.click-nav .js ul').is(':visible')) {
      $('.click-nav .js ul', this).slideUp();
      $('.clicker').removeClass('active');
    }
  });
});

$('#sidebar').affix({
      offset: {
        top: 245
      }
});

var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;

$body.scrollspy({
	target: '#leftCol',
	offset: navHeight
});