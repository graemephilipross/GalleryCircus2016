/*
	Prologue by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(min-width: 961px) and (max-width: 1880px)',
		normal: '(min-width: 961px) and (max-width: 1620px)',
		narrow: '(min-width: 961px) and (max-width: 1320px)',
		narrower: '(max-width: 960px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly links.
			$('.scrolly').scrolly();

		// Nav.
			var $nav_a = $('#nav a');

			// Scrolly-fy links.
				$nav_a
					.scrolly()
					.on('click', function(e) {

						var t = $(this),
							href = t.attr('href');

						if (href[0] != '#')
							return;

						e.preventDefault();

						// Clear active and lock scrollzer until scrolling has stopped
							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');

						// Set this link to active
							t.addClass('active');

					});

			// Initialize scrollzer.
				var ids = [];

				$nav_a.each(function() {

					var href = $(this).attr('href');

					if (href[0] != '#')
						return;

					ids.push(href.substring(1));

				});

				$.scrollzer(ids, { pad: 200, lastHack: true });

		// Header (narrower + mobile).

			// Toggle.
				$(
					'<div id="headerToggle">' +
						'<a href="#header" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Header.
				$('#header')
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'header-visible'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#headerToggle, #header, #main')
						.css('transition', 'none');

	});

})(jQuery);

(function($) {

	// animations greensock

	$(document).ready(function() {
		initAnimation()
	});

	function initAnimation() {
		var logoAnimation = new TimelineMax({onComplete: animateFlash});
		logoAnimation.set("#logoSVG", {stroke:"#fff"});
		logoAnimation.add(animateGalleryCircus(), "animateGalleryCircus");
		logoAnimation.add(animateTail(), "animateTail");

		var hotdog = new TimelineMax();
		hotdog.fromTo([".hd2", ".hd3", ".hd4"], 1 , {drawSVG:"0%"}, {drawSVG:"100%", fillOpacity:1}, "0.5");
		hotdog.fromTo([".hd1"], 1 , {drawSVG:"0%"}, {drawSVG:"100%", stroke:"#f1b649", fillOpacity:1, strokeWidth:10}, "1.5");
	}

    function animateGalleryCircus() {
        var gallery = new TimelineMax();

		gallery.fromTo(".path1", 1 , {drawSVG:"0% 0%"}, {drawSVG:"90% 100%"}, "0");
		gallery.to(".path1", 2 , {fillOpacity: "1"}, "-=1");

		gallery.fromTo(".path2", 1, {drawSVG:"0% 0%"}, {drawSVG:"90% 100%"}, "0");
		gallery.to(".path2", 2 , {fillOpacity: "1"}, "-=2");

		gallery.fromTo(".path3", 1 , {drawSVG:"0% 0%"}, {drawSVG:"90% 100%"}, "1");
		gallery.to(".path3", 2 , {fillOpacity: "1"}, "-=1");

		gallery.fromTo(".path4", 1, {drawSVG:"0% 0%"}, {drawSVG:"99% 100%"}, "1");
		gallery.to(".path4", 2 , {fillOpacity: "1"}, "-=2");

		gallery.fromTo(".path5", 1 , {drawSVG:"0% 0%"}, {drawSVG:"90% 100%"}, "1");
		gallery.to(".path5", 2 , {fillOpacity: "1"}, "-=2");

        return gallery;
    }

	function animateTail() {
		var tail = new TimelineMax();

		tail.fromTo(".path6", 0.5 , {drawSVG:"0% 0%"}, {drawSVG:"90% 100%"}, "0");
		tail.to(".path6", 1 , {fillOpacity: "1"}, "-=0.5");

		tail.fromTo(".path7", 0.5, {drawSVG:"0% 0%"}, {drawSVG:"90% 100%"}, "0.5");
		tail.to(".path7", 1 , {fillOpacity: "1"}, "-=0.5");

		tail.fromTo(".path8", 0.5 , {drawSVG:"0% 0%"}, {drawSVG:"90% 100%"}, "1");
		tail.to(".path8", 1 , {fillOpacity: "1"}, "-=0.5");
		return tail;
	}

    function animateFlash() {
        var flash = new TimelineMax({yoyo:true, repeat:-1});
        flash.to(".logoSVG", 2 , {drawSVG: "50% 50%", stroke:"#fff", delay:5});
    }

})(jQuery)