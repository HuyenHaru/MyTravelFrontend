$(document).ready(function(){
    // $('.main-bxslider').bxSlider({
    //     minSlides: 1,
    //     maxSlides: 5,
    //     slideWidth: 250,
    //     slideMargin: 10,
    //     responsive: true,
    //     auto:true
    // });


    // Meanmenu
    if ($('header .mobile-class-menu-location').length) {
        $('header .mobile-class-menu-location').meanmenu({
            meanScreenWidth: "1000",
            meanMenuContainer: "header .menu-mobile",
        });
    }

    // slider
    if ($('.slide-detail .item-slide').length > 0) {
        $('.slide-detail').owlCarousel({
            loop: true,
            autoplay: false,
            margin: 15,
            slideSpeed: 1000,
            smartSpeed: 1000,
            nav: false,
            dots: false,
            items: 4,
            autoWidth: false,
            fluidSpeed: true,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    // nav-tab-responsive
    $(document).on('show.bs.tab', 
    '.nav-tabs-responsive [data-toggle="tab"]', function(e) {    
    var $target = $(e.target);    
    var $tabs = $target.closest('.nav-tabs-responsive');    
    var $current = $target.closest('li');    
    var $parent = $current.closest('li.dropdown');      $current = $parent.length > 0 ? $parent : $current;    
    var $next = $current.next();    
    var $prev = $current.prev();    
    var updateDropdownMenu = function($el, position){      
    $el         
    .find('.dropdown-menu')        
    .removeClass('pull-xs-left pull-xs-center pull-xs-right')       
    .addClass( 'pull-xs-' + position );    
    };
        
    $tabs.find('>li').removeClass('next prev');    
    $prev.addClass('prev');    
    $next.addClass('next');        
    updateDropdownMenu( $prev, 'left' );    
    updateDropdownMenu( $current, 'center' );    
    updateDropdownMenu( $next, 'right' );  
    });


    
});