const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 요소를 숨기기
    // badgeEL.style.display = 'none'; 이렇게해도 작동하지만
    // gsap.to(요소, 지속시간(c초단위_밀리세커드x), {옵션_객체데이터형태});
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 상단으로 이동버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // window.scrollY <500 라면 배지요소을 다시 보여주기
    // badgeEL.style.display = 'block'; 이렇게해도 작동하지만
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 상단으로 이동버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// 구글에서 "lodash cdn"을 검색하여 코드를 복사하고 index.html에 붙여넣음으로써 throttle(메소드)라는 라이브러리를 사용할 수 있게되고.300은 0.3초를 의미한다
//_.throttle(함수, 시간) 시간은 밀리세컨드단위로 추가 : 1000밀리세컨드는 1초 300은 0.3초를 의미한다.

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간(c초단위_밀리세커드x), {옵션_객체데이터형태});
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true // 반복적으로 돌리기
});
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal',
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백(px표시 안함)
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; // false는 즉 보이고 있다.let 변수를 선언한건 true로 재할달 가능하게 하기 위한것.
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion // !는 반대의 값을 다시 할당.
  if (isHidePromotion) {
    // 숨김처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  //gsap.to(요소,시간,옵션) 자바스트립트 애니메이션 라이브러리
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션의 동작시간
    { // 옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부을 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});

