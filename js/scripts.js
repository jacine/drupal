/**
 * @file
 * Attaches behaviors for the Contextual module.
 */

(function ($) {

/**
 * Attaches outline behavior for regions associated with contextual links.
 */

$('div.contextual').once('contextual-links', function () {
  var $wrapper = $(this);
  var $region = $wrapper.closest('.contextual-region');
  var $links = $wrapper.find('ul');
  var $trigger = $('<a class="trigger" href="#" />').text('Configure').click(
    function () {
      $links.stop(true, true).slideToggle(100);
      $wrapper.toggleClass('contextual-active');
      return false;
    }
  );
  // Attach hover behavior to trigger and ul.contextual-links.
  $trigger.add($links).hover(
    function () { $region.addClass('contextual-region-active'); },
    function () { $region.removeClass('contextual-region-active'); }
  );
  // Hide the contextual links when user clicks a link or rolls out of the .contextual-region.
  $region.bind('mouseleave click', function(){
    $(this)
    .find('.contextual-active').removeClass('contextual-active')
    .find('.contextual-links').hide();
  });
  // Prepend the trigger.
  $wrapper.prepend($trigger);
});

 $('.toggle-nav').click(function(e) {
  e.preventDefault();
  $('.sidebar').slideToggle('fast');
});


})(jQuery);
