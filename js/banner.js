/*
 *   轮播图的js
 *   作者：Arthas
 */

//初始页面的轮播图
// new Swiper的第二个参数：就是配置项，是对象
function swiperWrapper() {
  new Swiper('.small-banner-warp .swiper-container', {
    // 基本配置
    // 1. 循环轮播：loop属性控制
    loop: true,
    // 2. 效果控制：effect
    effect: 'fade',

    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true, //修改swiper的父元素时，自动初始化swiper
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    // 3. 自动轮播：autoplay，可以有很多的东西控制
    // 指示器：pagination
    pagination: {
      // 指示器css选择器：使用自己
      el: '.swiper-pagination',
      // 可以控制指示器的元素：默认的元素是span，bulletElement
      // bulletElement: 'li',

      // 是否可以点击：clickable true表示可以点击，false不允许
      clickable: true,

      // 指示器样式：bulletClass
      bulletClass: 'swiper-pagination-bullet',

      // 指示器活跃状态：bulletActiveClass
      bulletActiveClass: 'swiper-pagination-bullet-active',
    },
    navigation: {
      // 向右箭头
      nextEl: '.swiper-button-next',

      // 向左箭头
      prevEl: '.swiper-button-prev'
    }
  });
}

function blurSwiperWrapper() {
  new Swiper('.banner .swiper-container', {
    // 基本配置
    // 1. 循环轮播：loop属性控制
    loop: true,
    // 2. 效果控制：effect
    effect: 'fade',
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true, //修改swiper的父元素时，自动初始化swiper
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    navigation: {
      // 向右箭头
      nextEl: '.swiper-button-next',

      // 向左箭头
      prevEl: '.swiper-button-prev'
    }
  });
}