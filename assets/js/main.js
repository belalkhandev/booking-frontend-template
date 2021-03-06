(function($){
    "use-strict"

    jQuery(document).ready(function(){

        if ($('.search-box-body').length > 0) {
            $('.search-box-body').css({
                "min-height": document.querySelector(".search-box-items.active").clientHeight
            });
        }

        

        window.addEventListener('resize', function(event) {
            $('.search-box-body').css({
                "min-height": document.querySelector(".search-box-items.active").clientHeight
            });
        }, true);

        //on scroll
        if ($('#stickySidebar').length > 0) {
            window.addEventListener('scroll', function(){
                const sidebar = document.getElementById('stickySidebar');
                const sidebar_height = document.querySelector("#stickySidebar").clientHeight;
                sidebar.classList.toggle('sticky', window.scrollY >= sidebar_height);
            });
        }
        
        //on click tab item
        $(document).on('click', '.search-item', function() {
            let _self = $(this);
            let target_item = _self.data('target_item');          
            $('.search-item, .search-box-items').removeClass('active');
            $(_self).addClass('active');
            $(target_item).addClass('active');
            let box_height = document.querySelector(target_item).clientHeight;
            console.log(box_height);
            $('.search-box-body').css({
                "min-height": box_height
            })
        })
        
        //carousel 
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

        //carousel 
        if($('#resortGalleryCarousel').length > 0) {
            $('#resortGalleryCarousel').owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 4000,
                smartSpeed:1000,
                nav: true,
                navText: ['<i class="bx bx-left-arrow-alt"></i>', '<i class="bx bx-right-arrow-alt"></i>'],
                dots: false
            });
        }

        //carousel 
        if($('#spotGalleryCarousel').length > 0) {
            $('#spotGalleryCarousel').owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 4000,
                smartSpeed:1000,
                nav: true,
                navText: ['<i class="bx bx-left-arrow-alt"></i>', '<i class="bx bx-right-arrow-alt"></i>'],
                dots: false
            });
        }

        //tourist spot carousel 
        if($('#spotsCarousel').length > 0) {
            $('#spotsCarousel').owlCarousel({
                items: 4,
                loop: true,
                nav: false,
                autoplay: true,
                autoplayTimeout: 4500,
                autoplaySpeed: 1500,
                margin: 15,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                    },

                    480:{
                        items:2,
                    },
                    768:{
                        items:3,
                    },
                    992:{
                        items: 4,
                    },
                    1600: {
                        items: 6
                    }
                }
            });
        }
        
        //resort carousel 
        if($('#resortsCarousel').length > 0) {
            $('#resortsCarousel').owlCarousel({
                items: 4,
                loop: true,
                dots: false,
                nav: true,
                navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 1500,
                margin: 15,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                    },

                    480:{
                        items:2,
                    },
                    768:{
                        items:3,
                    },
                    992:{
                        items: 4,
                    },
                    1600: {
                        items: 6
                    }
                }

            });
        }
        
        //packages carousel 
        if($('#packageCarousel').length > 0) {
            $('#packageCarousel').owlCarousel({
                items: 3,
                loop: true,
                dots: false,
                nav: true,
                navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
                autoplay: true,
                autoplayTimeout: 4500,
                autoplaySpeed: 1000,
                margin: 15,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                    },

                    480:{
                        items:2,
                    },

                    768:{
                        items:2,
                    },
                    
                    992:{
                        items:3,
                    },
            
                    1600: {
                        items: 5
                    }
                }
            });
        }

        //responsive menu
        const menus = $('.mainmenu').html();
        $('.responsive-menu').append(menus);

        $(document).on('click', '#rs-menu-bar', function() {
            $('.responsive-menu').toggleClass('show');
        });

        $(document).on('click', '.open-login', function (ev) {
            ev.preventDefault();
            $('#signUpModal').modal('hide');
            $('#resetPasswordModal').modal('hide');
            setTimeout(function () {
                $('#loginModal').modal('show');
            }, 500);
        });

        $(document).on('click', '.open-signup', function (ev) {
            ev.preventDefault();
            $('#loginModal').modal('hide');
            setTimeout(function () {
                $('#signUpModal').modal('show');
            }, 500);
        });

        $(document).on('click', '.open-resetpasword', function (ev) {
            ev.preventDefault();
            $('#loginModal').modal('hide');
            setTimeout(function () {
                $('#resetPasswordModal').modal('show');
            }, 500);
        });

        $('[data-toggle="tooltip"]').tooltip();

        // default datepicker
        $('.datepicker').datepicker({
            todayHighlight: true,
            format: "yyyy-mm-dd",
            autoclose: true
        });

        $(document).on('click', '.has-search-preview', function () {
            $('.search-preview-items').addClass('show');
        });

        $(document).click(function(e) 
        {
            var container = $(".has-search-preview");

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                $('.search-preview-items').removeClass('show');
            }
        });
        
    });

    jQuery(window).on('load', function() {
        if ($('.pre-loader').length > 0) {
            $('.pre-loader').css({display: 'none'})
        }
    });



}(jQuery))
