(function($) {
	// loop toggle
	MediaElementPlayer.prototype.buildloop = function(player, controls, layers, media) {
		var 
			// create the loop button
			loop = 
			$('<div class="mejs-button mejs-loop-button ' + ((player.options.loop) ? 'mejs-loop-on' : 'mejs-loop-off') + '">' +
				'<button></button>' +
			'</div>')
			// append it to the toolbar
			.appendTo(controls)
			// add a click toggle event
			.click(function() {
				player.options.loop = !player.options.loop;
				if (player.options.loop) {
					loop.removeClass('mejs-loop-off').addClass('mejs-loop-on');
				} else {
					loop.removeClass('mejs-loop-on').addClass('mejs-loop-off');
				}
			});
	}
})(jQuery);