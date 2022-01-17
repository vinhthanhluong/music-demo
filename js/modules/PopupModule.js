export default function PopupModule(){
    $('.popup-title').magnificPopup({
        
        // closeOnContentClick: true,
        type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
    });

	$(document).on('click', '.popup-btn', function (e) {
		e.preventDefault();
		const link = $(this).attr('href') || $(this).attr('data-mfp-src');
		$.magnificPopup.open({
			items: {
				src: link,
			},
			type: 'inline',
			mainClass: 'mfp-zoom-in', // add class
			modal: false, // CLOSE POPUP WHEN CLICK OUTSIDE
			midClick: true,
			removalDelay: 500, // DELAY BEFORE CLOSE POPUP
			preloader: false,
			fixedBgPos: true, // SET HEIGHT BACKGROUND FIX WITH CONTENT
			fixedContentPos: false, // FIXED CONTENT AT CLICKED POSITION
			callbacks: {
				open: function () {
					$('body').addClass('modal-open');
				},
				close: function () {
					$('body').removeClass('modal-open');
				},
			},
		});
	});	

	$(document).on('click', '.video-popup, .video-btn', function (e) {
		e.preventDefault();
		const link =
			$(this).attr('href') ||
			$(this).attr('data-mfp-src') ||
			'https://www.youtube.com/watch?v=GGC86Z5p0AI&list=RDGGC86Z5p0AI';
		$.magnificPopup.open({
			items: {
				src: link,
				type: 'iframe',
			},
			mainClass: 'mfp-zoom-in',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
			callbacks: {
				open: function () {
					$('body').addClass('modal-open');
				},
				close: function () {
					$('body').removeClass('modal-open');
				},
			},
		});
	});
}
