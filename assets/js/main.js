(function($){
    "use-strict"

    jQuery(document).ready(function(){

        //sliders 
        if($('.sliders').length > 0) {
            $('.sliders').owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 4000,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                smartSpeed:1000,
                touchDrag  : true,
                mouseDrag  : false,
                nav: false,
                dots: false
            });
        }

    });

}(jQuery))