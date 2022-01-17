export default function WowModule() {
    // var wow = new WOW({
    //     // mobile: function(){
    //     //     return $(window).width() < 768;
    //     // },
    //     mobile: false,
    // })
    // wow.init();
    var wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile:false,
            live: false,       // default
          
        }
    )
    wow.init();
    // console.log(  $('.wow').removeClass('wow'));
    

    // const width =  $(window).width();
    // if (width < 768) {
    //     $('.wow').removeClass('wow');
    // }
}