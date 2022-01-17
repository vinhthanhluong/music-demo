export default function ScrollClassModule() {
    if ($('.main-content-landing').length) {
        var sections = $('.landing')
            , header = $('.header')
            , header_height = header.outerHeight() - 40
        , content_list = $('.box-fx .box-list');

        $(window).on('scroll', function () {
            var cur_pos = $(this).scrollTop();

            sections.each(function () {
                var top = $(this).offset().top - header_height,
                    bottom = top + $(this).outerHeight();
                    var topnews = parseInt(top),
                    bottomnews = parseInt(bottom);
                if (cur_pos >= topnews && cur_pos <= bottomnews) {
                    content_list.find('a').removeClass('active');
                    // sections.removeClass('active');
                    // console.log($(this));
                    // $(this).addClass('active');
                    content_list.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                }
            });
        });

        content_list.find('a').on('click', function () {
            var $el = $(this)
                , id = $el.attr('href');

            $('html, body').animate({
                scrollTop: $(id).offset().top - header_height
            }, 800);

            return false;
        });

    }


}