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
// $(document).on('click','.scroll_top',function(){
//     $('body,html').animate({scrollTop:0},400);
//     return false;
// })
function ScrollTop() {
        if (window.jQuery) {
            jQuery('html,body').animate({
                scrollTop: 0
            }, 100);
        } else {
            document.getElementsByClassName('top-nav')[0].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
        
}

// var vertical_menu_height = $('#box-vertical-megamenus .box-vertical-megamenus').innerHeight();

// // NAVBAR ON TOP
// $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(this).scrollTop()){
//             $('.sub_navbar').addClass('nav-ontop');
//         } else{
//             $('.sub_navbar').removeClass('nav-ontop');
//         }
//     })
// })


// ========= auto đổi slide=============

// Thêm banner



// ===========HOTLINE============

const languageSelect = document.getElementById('language-select');
const formEnglish = document.querySelector('.form-english')
const formVietnamese = document.querySelector('.form-vietnamese')
const appContainer = document.querySelector('.h-survey')
const img = document.querySelector('.osc-button')
const close = document.querySelector('.esc-btn')
let abc = false
console.log(close, appContainer)

languageSelect.addEventListener('change', () => {
        const selectedLanguage = languageSelect.value;
        // Hide all language-specific elements
        const languageElements = document.querySelectorAll('[id^="welcome-message-"]');
        languageElements.forEach((element) => {
                element.style.display = 'none';
                
        });

        // Show the selected language element
        const selectedLanguageElement = document.getElementById(`welcome-message-${selectedLanguage}`);
        selectedLanguageElement.style.display = 'block';
});
img.onclick = () => {
        appContainer.style.display = 'block'
}
close.onclick = () => {
        
   appContainer.style.display = 'none' 
        
}
