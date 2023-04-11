// Scripts scroll
//      --------------------------------------------- */
// $(window).scroll(function(){
//     /* Show hide scrolltop button */
//     if( $(window).scrollTop() == 0 ) {
//         $('.scroll_top').stop(false,true).fadeOut(600);
//     }else{
//         $('.scroll_top').stop(false,true).fadeIn(600);
//     }
// }


/* scroll top */ 
$(document).on('click','.scroll_top',function(){
    $('body,html').animate({scrollTop:0},400);
    return false;
})

var vertical_menu_height = $('#box-vertical-megamenus .box-vertical-megamenus').innerHeight();

// NAVBAR ON TOP
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('.sub_navbar').addClass('nav-ontop');
        } else{
            $('.sub_navbar').removeClass('nav-ontop');
        }
    })
})


// ========= auto đổi slide=============

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slider_item");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}
