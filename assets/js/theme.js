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
function addBanner(img, link) {
	var newDiv = `<div class='item'>
						<a target='_blank' href=` + link + `>
							<img src=` + img + `>
						</a>
					</div>`;
	var banner = document.getElementsByClassName('owl-carousel')[0];
	banner.innerHTML += newDiv;
}


function phanTich_URL_chiTietSanPham(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 5,
        center: true,
        smartSpeed: 450,
    });
}

// add hình
function addSmallImg(img) {
    var newDiv = `<div class='item'>
                        <a>
                            <img src=` + img + ` onclick="changepic(this.src)">
                        </a>
                    </div>`;
    var banner = document.getElementsByClassName('owl-carousel')[0];
    banner.innerHTML += newDiv;
}

window.onload = function (){
    
	// Thêm hình vào banner
	addBanner("assets/img/banners/slider1.jpeg", "assets/img/banners/slider1.jpeg");
	var numBanner = 3; // Số lượng hình banner
	for (var i = 2; i <= numBanner; i++) {
		var linkimg = "assets/img/banners/slider" + i + ".jpeg";
		addBanner(linkimg, linkimg);
	}

	// Khởi động thư viện hỗ trợ banner - chỉ chạy khi đã tạo hình trong banner
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items: 1.5,
		margin: 100,
		center: true,
		loop: true,
		smartSpeed: 450,
		autoplay: true,
		autoplayTimeout: 3500
	});

    phanTich_URL_chiTietSanPham();
}


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
