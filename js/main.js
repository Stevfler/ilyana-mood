$(document).ready(function(){

    $('.hamburger').on ('click', ()=>{
        $('.hamburger').toggleClass('is-active');
    })

    $('.readmore').click(function(){
        $('.hiden').slideToggle('slow');
    });
    $('.readmore1').click(function(){
        $('.hiden1').slideToggle('slow');
    });


    

    // var lastScrollTop = 0;

    // $(window).scroll(function(event){

    // var st = $(this).scrollTop();
    // let blockH = $('.navbarcontainer').height();
    // let vh;

    // if (st > lastScrollTop){
    //     $('.navbarcontainer').css('height', function(){
    //     vh = blockH - st/60;
    //     return vh;
    //    })

    //     }else {
    //     $('.navbarcontainer').css('height', function(){
    //         vh = blockH + st/100;
    //         if(vh > 1000){ vh = blockH};
    //         return vh;
    //     })}
    
    // lastScrollTop = st;
    // });


   
});
   
   
    // function(class){ 
        
    // let vhm = $(window).scrollTop();
    // let vhp = $(window).scrollTop();

    // if($(window).scrollTop()){

    // }
    // $('.class')
   




//    .css("height", function(){
//         let vh = ($(this).height()) - sct/2;
//         return vh;
//     });














