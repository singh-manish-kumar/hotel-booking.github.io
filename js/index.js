let barimg=document.getElementById("bar");
let navbar=document.getElementById("navbar_item");

barimg.addEventListener("click",function()
{
    navbar.classList.toggle("item1"); 
})




                                                    // JQUERY NAVIGATIONBAR START
$(document).ready(function () {
    $('#menu-toggle').click(function(){
    if($('#menu').hasClass('open')){
    $('#menu').removeClass('open');
    $('#menu-toggle').removeClass('open');
    }else{
    $('#menu').addClass('open');
    $('#menu-toggle').addClass('open');
    }
    });
 });
 let menu_toggle=document.getElementById("menu-toggle")

 window.addEventListener("scroll",function(){
     if(window.pageYOffset>300){
          menu_toggle.style.right="0px";
     }
     else{
        menu_toggle.style.right="-100px";
     }
 })
                                                        //   JQUERY NAVIGATIONBAR END 
                                                        // FIXED LOGO START 
  let fixed_LOGO=document.getElementById("fixed_LOGO");
  window.addEventListener("scroll",function(){
      if(window.pageYOffset>300){
          fixed_LOGO.style.left="0px";
      }
      else{
        fixed_LOGO.style.left="-100px";
      }
  })
                                                        // FIXED LOGO END 

                                                              // owl carousel 
$(document).ready(function()
{
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        autoplay:true,
        autoplayTimeout: 4000,
        mouseDrag:true,
         touchDrag:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            900:{
                items:3,
                nav:true
            },
            1100:{
                items:4,
                nav:true
            }
        }
    })
})
 
                                                // OWL carousel END 
                                                // SCROLL TO TOP START 

    let SCROLL=document.getElementById("scroll_btn");
    window.addEventListener("scroll",function(){
        if(window.pageYOffset>200){
            SCROLL.style.display="block";
        }
        else{
            SCROLL.style.display="none";
        }
    })
    SCROLL.addEventListener("click",function(){
        window.scrollTo(0,0);
    })


