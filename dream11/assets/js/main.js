
window.addEventListener('load',()=>{
    init();
})

function init(){
    isotope();
    owlCarousal();
    navScrollAnim()
}

function owlCarousal(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav:false
            },
            992:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });
}
function isotope(){
    let grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode:'fitRows',
        filter:'.cricket'
    })
    let atag = $('#section-2 .nav-item');
    console.log(atag);
    for(let navitem of atag){
        navitem.addEventListener('click',function(){
            $('#section-2 .nav-item').removeClass('active');
            $(this).addClass('active');
            let filtervalue = $(this).attr('data-filter');
            console.log(filtervalue);
            grid.isotope({filter:filtervalue});
            
        })
    }
}

function navScrollAnim(){
    $(window).on('scroll',function(){
        let position = $(this).scrollTop();
        if(position >= 454){
    
            $('nav.navbar').addClass('bg-dark');
            console.log('greater');
        }else{
            $('nav.navbar').removeClass('bg-dark');
            console.log('smaller');
        }
    })
}
