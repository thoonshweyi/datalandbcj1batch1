$(document).ready(function(){
// console.log('hay');
// Start Nav Bar

// for navbutton
$('.navbuttons').click(function(){
    // console.log('i am working');
    $('.navbuttons').toggleClass('changes');
});

// for navbar
$(window).scroll(function(){

    let getscrolly = $(this).scrollTop();
    // console.log(getscrolly);

    if(getscrolly >=200){
        $('.navbar').addClass('navmenus');
    }else{
        $('.navbar').removeClass('navmenus');
    }

});

// End Nav Bar

// Start Mission Section
    $(window).scroll(function(){
        let getscrolly = $(this).scrollTop();
        // console.log(getscrolly);

        if(getscrolly >= 650){
            $('.cameraimgs').addClass('fromlefts');
            $('.missiontexts').addClass('fromrights');
        }else{
            $('.cameraimgs').removeClass('fromlefts');
            $('.missiontexts').removeClass('fromrights');
        }
    });
// End Mission Section

// Start Gallery Section
$('.galarylists').click(function(){
    // console.log('hay');
    let datafilter = $(this).attr('data-filter');
    // console.log(datafilter);

    if(datafilter === 'all'){
        $('.filters').show(400);
    }else{
        $('.filters').not('.'+datafilter).hide(400);
        $('.filters').filter('.'+datafilter).show(400);
    }
});

//for ul active
$('.galarylists').click(function(){
    $(this).addClass('activeitems').siblings().removeClass('activeitems');
});

// End Gallery Section

// Start Pricing Section
    $(window).scroll(function(){
        let getscrollY = $(this).scrollTop();
        // console.log(scrollY)

        if(getscrollY >= 4300){
            $('.cardones').addClass('movefromlefts');
            $('.cardtwos').addClass('movefrombottoms');
            $('.cardthrees').addClass('movefromrights');
        }else{
            $('.cardones').removeClass('movefromlefts');
            $('.cardtwos').removeClass('movefrombottoms');
            $('.cardthrees').removeClass('movefromrights');
        }
    });
// End Pricing Section


// Start Footer Section

// End Footer Section

});