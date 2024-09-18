// 풀페이지
$('#wrap').fullpage({
  autoScrolling: true,
  scrollOverflow: true,
  scrollBar:true,
  scrollingSpeed:100,
  responsiveWidth:1920,
  showActiveTooltip:true,
  menu:'nav',
  anchors:['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7']
})

// 메뉴 활성화, 비활성화
const menuclick = document.querySelector('.menuClick');
const bg_menu = document.querySelector('.bg_menu');
const close_btn = document.querySelector('.close_btn');
const menu_btn = document.querySelector('.menu_btn');
const menuActive = document.querySelector('.menuActive');
console.log(menuclick, bg_menu , close_btn, menu_btn, menuActive);

menuclick.addEventListener('click', function(e){
  menuActive.classList.toggle('active');
  menuclick.classList.add('hidden');
  e.preventDefault();
})

close_btn.addEventListener('click', function(e){
  menuActive.classList.remove('active');
  menuclick.classList.remove('hidden');
  e.preventDefault();
})

let swiperContainer04 =document.querySelector('#workContainer4')
let swiper04 = new Swiper('#workContainer4', {
  // 한 번에 보여줄 슬라이드 수
  slidesPerView: 5,
  // 슬라이드 사이의 간격
  spaceBetween: 5,
  // 한 번에 넘길 슬라이드 수
  loop: true,
  autoplay: { delay: 2500, },
  slidesPerGroup: 1, 
  centeredSlides: true,
  breakpoints: {
    // max-width 767px일 때
    767: {
      slidesPerView: 2,  // 2개의 슬라이드 보이기
      spaceBetween: 10,  // 슬라이드 간 간격
    },
    // max-width 599px일 때
    599: {
      slidesPerView: 1,  // 1개의 슬라이드 보이기
      spaceBetween: 5,  // 슬라이드 간 간격을 더 좁게 설정
    },
  },
  });