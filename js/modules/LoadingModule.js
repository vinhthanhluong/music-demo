export default function LoadingModule() {
	if ($('#page-loading')) {
		const pageLoading = $('#page-loading');
		pageLoading.css('opacity', 0);
		pageLoading.on('transitionend', function (e) {
			pageLoading.css('display', 'none');	
		});
	}


	// scrolling hide / show
	function debounce(f , timeout = 600) {
        let timer;
        return (...args) => {
        clearTimeout(timer);
        timer =  setTimeout(() => {
            f.apply(this, args);
        }, timeout);
           
        }
    }

    window.addEventListener("mousewheel" , (e) => {
        document.querySelector("body").classList.add('show');
        document.querySelector(".my-list").classList.add('show');
    });

    window.addEventListener("mousewheel", debounce(e => {
        document.querySelector('body').classList.remove('show');
        document.querySelector(".my-list").classList.remove('show');


    }));
}