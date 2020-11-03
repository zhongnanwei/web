/*
 *   网易云首页
 *   原型模式编写的js
 *   作者：Arthas
 */
//轮播图模块
$(function () {
  new banner({
    swiperWrapper: $('#swiper-wrapper'),
    swiperBlurWrapper: $('#swiper-blur-wrapper'),
  })
  new index({
    hotCommon: $('#hot-common')
  })
  new newest({
    newestFirst: $('#newest-first'),
    newestSecond: $('#newest-second'),
    newestThird: $('#newest-third'),
  })
  new topList({

  })
  //新碟上架轮播(采用原生定时器写法)
  //设置初始页面
  let indexPage = 1;
  let content = document.querySelector('.content');
  $('.last').click(function () {
    if (indexPage == 0) {
      indexPage = content.children.length - 1;
      content.style.left = -indexPage * 645 + 'px';
    }
    console.log(1);
    // 3.2 indexPage--，访问前一张
    indexPage--;
    // 3.3 动画效果
    animateMove(content, -indexPage * 645, 'left');
  });

  // 2.给向右的箭头：right绑定点击事件onclick
  $('.next').click(function () {
    if (indexPage == content.children.length - 1) {
      indexPage = 0;
      content.style.left = '0px'
    }
    console.log(1);
    indexPage++;
    animateMove(content, -indexPage * 645, 'left');
  });
});
//构造器，首字母大写
function banner(_obj) {
  //动态添加属性
  for (var i in _obj) {
    this[i] = _obj[i];
  }
  //调用init方法
  this.init();
}
//使用prototype原型模式，添加方法
banner.prototype = {
  //修复原型链
  constructor: banner,
  //初始化方法,init
  init: function () {
    var _self = this;
    _self.getData();
  },
  getData: function () {
    var _self = this;
    //封装的ajax函数
    ajaxFn(URL.banner, function (_d) {
      // 相当于this.getBannersImage(_d.banners);
      _self.getBannersImage(_d.banners);
      _self.getBlurBannersImage(_d.banners);
      // new Swiper的第二个参数：就是配置项，是对象
      swiperWrapper();
      blurSwiperWrapper();
    })
  },
  getBannersImage: function (_data) {
    var _self = this;
    _data.forEach(item => {
      $('<div>').addClass('swiper-slide').html(function () {
          $('<img>')
            .attr('src', item.imageUrl) //相当于_d.banners[i].imageUrl，获取banner中的imageUrl
            .appendTo($(this));
        })
        .appendTo(_self.swiperWrapper);
    });
  },
  getBlurBannersImage: function (_data) {
    var _self = this;
    _data.forEach(item => {
      $('<div>').addClass('swiper-slide').html(function () {
          $('<img>')
            .attr('src', item.imageUrl + '?imageView&blur=40x20') //_d.banners[0].imageUrl
            .appendTo($(this));
        })
        .appendTo(_self.swiperBlurWrapper);
    });
  }
}

//热门推荐模块
//构造器，首字母大写
function index(_obj) {
  //动态添加属性
  for (var i in _obj) {
    this[i] = _obj[i];
  }
  //调用init方法
  this.init();
}

//使用prototype原型模式，添加方法
index.prototype = {
  //修复原型链
  constructor: index,
  //初始化方法,init
  init: function () {
    var _self = this;
    _self.getData();
  },
  getData: function () {
    var _self = this;
    //封装的ajax函数
    ajaxFn(URL.index, function (_d) {
      _self.getHotCommon(_d.result);
    })
  },
  getHotCommon: function (_data) {
    var _self = this;
    for (let i = 0; i < 8; i++) {
      $('<li></li>').html(function () {
        $('<a>')
          .attr('href', '#')
          .html(function () {
            $('<img>').attr('src', _data[i].picUrl).appendTo($(this));
            $('<div></div>').addClass('bar').html(function () {
              if (_data[i].playCount >= 10000) {
                $('<span></span>').text(Math.floor(_data[i].playCount / 10000) + "万").appendTo($(this));
              } else {
                $('<span></span>').text(_data[i].playCount).appendTo($(this));
              }
              $('<a></a>').appendTo($(this));
            }).appendTo($(this));
          }).appendTo($(this));
        $('<p>').html(function () {
          $('<a>').attr('href', '#').text(_data[i].name).appendTo($(this));
        }).appendTo($(this));
      }).appendTo(_self.hotCommon);
    }
  }
}

//新歌上架模块
//构造器，首字母大写
function newest(_obj) {
  //动态添加属性
  for (var i in _obj) {
    this[i] = _obj[i];
  }
  //调用init方法
  this.init();
}
//使用prototype原型模式，添加方法
newest.prototype = {
  //修复原型链
  constructor: newest,
  //初始化方法,init
  init: function () {
    var _self = this;
    _self.getData();
  },
  getData: function () {
    var _self = this;
    //封装的ajax函数
    ajaxFn(URL.newest, function (_d) {
      _self.getNewest(_d.albums);
    })
  },
  getNewest: function (_data) {
    var _self = this;
    for (let i = 0; i < 5; i++) {
      _self.createNewestList(_self.newestFirst, _data[i]);
      _self.createNewestList(_self.newestThird, _data[i]);
    }
    for (let i = 5; i < 10; i++) {
      _self.createNewestList(_self.newestSecond, _data[i]);
    }
  },
  createNewestList: function (newest, item) {
    $('<li></li>').html(function () {
      $('<a></a>').attr('href', '#').html(function () {
        $('<img>').attr('src', item.picUrl).appendTo($(this));
      }).appendTo($(this));
      $('<p></p>').text(item.name).appendTo($(this));
      $('<span></span>').text(item.artist.name).appendTo($(this));
    }).appendTo(newest);
  }
}

//首页榜单
function topList(_obj) {
  //动态添加属性
  for (var i in _obj) {
    this[i] = _obj[i];
  }
  //调用init方法
  this.init();
}
//使用prototype原型模式，添加方法
topList.prototype = {
  //修复原型链
  constructor: topList,
  //初始化方法,init
  init: function () {
    var _self = this;
    _self.getData();
  },
  getData: function () {
    //封装的ajax函数
    ajaxFn(URL.toplist, function (_d) {
      for (let i = 0; i < 3; i++) {
        const renderReuslt = template('topListTemplate', _d.list[i].tracks);
        $('#block' + i).html(renderReuslt);
      }
    })
  }
}