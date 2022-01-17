export default function LightGalleryModule() {
    if ($('#lightgallery').length) {

        $("#lightgallery").lightGallery({
            selector: ".zoom-lightgallery",
            // thumbnail: true,
            // animateThumb: false,
            // showThumbByDefault: false
            download: false,
            // animateThumb: true,
            // showThumbByDefault: true,
            // dynamic: true,
        });
    }


}