// 풀페이지
$('#wrap').fullpage({
  autoScrolling: true,
  scrollOverflow: true,
  scrollBar:true,
  scrollingSpeed:300,
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
  slidesPerView: 2,
  // 슬라이드 사이의 간격
  spaceBetween: 30,
  // 한 번에 넘길 슬라이드 수
  loop: true,
  autoplay: { delay: 2500, },
  slidesPerGroup: 1, 
  centeredSlides: true,
  });