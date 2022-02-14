

( function ( $ ) {

    "use strict";

    $( document ).ready( function () {




 


        // Classes carousel
        $('.classes-carousel').slick({

            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows:true,
            autoplay:true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]

        });



        // Classes carousel in the sidebar - class-single.html
        $('.classes-section-sidebar').slick({

            slidesToShow: 1,
            infinite:true,
            slidesToScroll: 1,
            autoplay: true,
            dots: true,
            arrows:true,
            autoplaySpeed: 2000

        });

   

        /**
         * AJAX Contact Form Script
         * Working Contact Form
         */
        if($('#contact-form').length) {

            $('#submit').on("click", function() {

                var o = new Object();
                var form = '#contact-form';
                var name = $('#contact-form .name').val();
                var email = $('#contact-form .email').val();

                if(name == '' || email == '') {

                    $('#contact-form .response').html('<div class="failed">Please fill the required fields.</div>');
                    return false;

                }

                $.ajax( {

                    url:"mail.php",
                    method:"POST",
                    data: $(form).serialize(),
                    beforeSend:function(){
                        $('#contact-form .response').html('<div class="text-info"><img src="assets/img/preloader.gif" alt="Loading..."> Loading...</div>');
                    },
                    success:function(data){
                        $('form').trigger("reset");
                        $('#contact-form .response').fadeIn().html(data);
                        setTimeout(function(){
                            $('#contact-form .response').fadeOut("slow");
                        }, 5000);
                    },
                    error:function(){
                        $('#contact-form .response').fadeIn().html(data);
                    }

                } );

            } );

        }

        /**
         * Back to top button
         */
        $( '.back-to-top' ).on( 'click', function (  ) {

            scrollTo({top: 0, behavior: 'smooth'});

        } );

    } )

} ( jQuery ) );

