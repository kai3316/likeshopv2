(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods_logistics-goods_logistics~pages-shop_cart-shop_cart~pages-user-user"],{"0bf1":function(t,e,i){"use strict";i.r(e);var s=i("15ae"),n=i("3100");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("1e40");var o,r=i("f0c5"),c=Object(r["a"])(n["default"],s["b"],s["c"],!1,null,"c27139f0",null,!1,s["a"],o);e["default"]=c.exports},"15ae":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return s}));var s={goodsList:i("95fe").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.goodsList.length?i("v-uni-view",{staticClass:"recommend"},[i("v-uni-view",{staticClass:"goods-title row-center"},[i("v-uni-text",{staticClass:"line"}),i("v-uni-view",{staticClass:"row"},[i("v-uni-image",{staticClass:"mr10",attrs:{src:"/static/images/icon_like.png"}}),i("v-uni-text",{staticClass:"bold xxl"},[t._v("好物优选")])],1),i("v-uni-text",{staticClass:"line"})],1),i("goods-list",{attrs:{list:t.goodsList}})],1):t._e()},a=[]},"1d7c":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return s}));var s={customImage:i("d422").default,priceFormat:i("32eb").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"goods-list"},["double"===t.type?i("v-uni-view",{staticClass:"goods-double row-between"},t._l(t.list,(function(e,s){return i("v-uni-navigator",{key:s,staticClass:"item bg-white mt20",attrs:{"hover-class":"none","open-type":"navigate",url:"/pages/goods_details/goods_details?id="+e.id}},[i("v-uni-view",{staticClass:"goods-img",staticStyle:{width:"347rpx",height:"347rpx"}},[i("custom-image",{attrs:{"lazy-load":!0,width:"347rpx",height:"347rpx",radius:"10rpx","lazy-load":!0,src:e.image}})],1),i("v-uni-view",{staticClass:"goods-info"},[i("v-uni-view",{staticClass:"goods-name line2"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"price mt10 row"},[i("price-format",{staticClass:"mr10",attrs:{color:"#FF2C3C","first-size":34,"second-size":26,"subscript-size":26,price:e.price,weight:500}}),i("price-format",{staticClass:"muted",attrs:{firstSize:24,secondSize:24,"subscript-size":24,"line-through":!0,price:e.market_price}})],1)],1)],1)})),1):t._e(),"hot"===t.type?i("v-uni-view",{staticClass:"goods-hot"},t._l(t.list,(function(e,s){return i("v-uni-navigator",{key:s,staticClass:"item bg-white mt20 row",attrs:{"hover-class":"none","open-type":"navigate",url:"/pages/goods_details/goods_details?id="+e.id}},[i("v-uni-view",{staticClass:"goods-img",staticStyle:{width:"180rpx",height:"180rpx"}},[i("custom-image",{attrs:{"lazy-load":!0,width:"180rpx",height:"180rpx",radius:"6rpx","lazy-load":!0,src:e.image}})],1),i("v-uni-view",{staticClass:"goods-info ml20"},[i("v-uni-view",{staticClass:"goods-name line2 mb10"},[t._v(t._s(e.name))]),i("v-uni-text",{staticClass:"sale br60 xxs"},[t._v("已有"+t._s(e.sales_sum)+"人购买")]),i("v-uni-view",{staticClass:"row-between  mt10"},[i("v-uni-view",{staticClass:"price mt10 row"},[i("price-format",{attrs:{"first-size":34,"second-size":26,price:e.price,weight:500}}),i("price-format",{attrs:{"first-size":24,"second-size":24,"subscript-size":24,price:e.market_price}})],1),i("v-uni-image",{staticClass:"icon-md",attrs:{src:"/static/images/icon_go_red.png"}})],1)],1),i("v-uni-image",{staticClass:"paixu",attrs:{src:"/images/No."+(s<3?s:3)+".png"}}),i("v-uni-view",{staticClass:"index xxs"},[t._v(t._s(s+1))])],1)})),1):t._e(),"new"===t.type?i("v-uni-view",{staticClass:"goods-new"},t._l(t.list,(function(e,s){return i("v-uni-navigator",{key:s,staticClass:"item bg-white mt20 row",attrs:{"hover-class":"none","open-type":"navigate",url:"/pages/goods_details/goods_details?id="+e.id}},[i("v-uni-view",{staticClass:"goods-img"},[i("custom-image",{attrs:{"lazy-load":!0,width:"240rpx",height:"240rpx",radius:"10rpx","lazy-load":!0,src:e.image}})],1),i("v-uni-view",{staticClass:"goods-info ml20 mr20 flex1"},[i("v-uni-view",{staticClass:"goods-name line2 mb20"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"row-between muted xxs "},[i("v-uni-view",{staticClass:"line-through"},[i("v-uni-text",[t._v("原价")]),i("price-format",{attrs:{"second-size":22,"first-size":22,"subscript-size":22,price:e.market_price}})],1),i("v-uni-view",[t._v(t._s(e.sales_sum)+"人购买")])],1),i("v-uni-view",{staticClass:"row-between  mt10"},[i("price-format",{attrs:{color:"#FF2C3C","first-size":38,"subscript-size":26,"second-size":26,price:e.price,weight:500}}),i("v-uni-button",{staticClass:"br60",attrs:{type:"primary",size:"xs"}},[t._v("立即抢购")])],1)],1)],1)})),1):t._e(),"one"===t.type?i("v-uni-view",{staticClass:"goods-one mt20"},t._l(t.list,(function(e,s){return i("v-uni-navigator",{key:s,staticClass:"item bg-white row",attrs:{"hover-class":"none","open-type":"navigate",url:"/pages/goods_details/goods_details?id="+e.id}},[i("v-uni-view",{staticClass:"goods-img",staticStyle:{width:"200rpx",height:"200rpx"}},[i("custom-image",{attrs:{"lazy-load":!0,width:"200rpx",height:"200rpx",radius:"6rpx","lazy-load":!0,src:e.image}})],1),i("v-uni-view",{staticClass:"goods-info ml20"},[i("v-uni-view",{staticClass:"goods-name line2 mb10"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"row-between mt10"},[i("v-uni-view",{staticClass:"price mt10 row"},[i("price-format",{staticClass:"mr10",attrs:{color:"#FF2C3C","first-size":34,"second-size":26,"subscript-size":26,price:e.price,weight:500}}),i("price-format",{staticClass:"muted",attrs:{firstSize:24,secondSize:24,"subscript-size":24,"line-through":!0,price:e.market_price}})],1)],1)],1)],1)})),1):t._e()],1)},a=[]},"1d7e":function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.goods-list .goods-double[data-v-3d230bb7]{-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?20?%;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch}.goods-list .goods-double .item[data-v-3d230bb7]{width:%?347?%;border-radius:%?10?%}.goods-list .goods-double .item .goods-info[data-v-3d230bb7]{padding:%?10?%}.goods-list .goods-hot .item[data-v-3d230bb7]{position:relative;padding:%?30?% %?20?%;border-radius:%?10?%}.goods-list .goods-hot .item .goods-info[data-v-3d230bb7]{width:%?450?%}.goods-list .goods-hot .item .goods-info .sale[data-v-3d230bb7]{padding:%?4?% %?18?%;color:#f79c0c;background-color:rgba(247,156,12,.1)}.goods-list .goods-hot .item .paix[data-v-3d230bb7],\n.goods-list .goods-hot .item .index[data-v-3d230bb7]{position:absolute;top:0;left:%?27?%;width:%?50?%;height:%?54?%;line-height:%?60?%;text-align:center;color:#621e09}.goods-list .goods-one .item[data-v-3d230bb7]{padding:%?20?%}.goods-list .goods-one .item[data-v-3d230bb7]:not(:last-of-type){margin-bottom:%?20?%}.goods-list .goods-new .item[data-v-3d230bb7]{box-shadow:0 0 10px rgba(0,0,0,.16);border-radius:%?10?%}',""]),t.exports=e},"1e40":function(t,e,i){"use strict";var s=i("d517"),n=i.n(s);n.a},"2ddc":function(t,e,i){var s=i("1d7e");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("4f06").default;n("300d142e",s,!0,{sourceMap:!1,shadowMode:!1})},3100:function(t,e,i){"use strict";i.r(e);var s=i("cf3c"),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=n.a},3114:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={props:{type:{type:String,default:"double"},list:{type:Array,default:function(){return[]}}},data:function(){return{}}};e.default=s},"32eb":function(t,e,i){"use strict";i.r(e);var s=i("fbf4"),n=i("8086");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("40c4");var o,r=i("f0c5"),c=Object(r["a"])(n["default"],s["b"],s["c"],!1,null,"32420978",null,!1,s["a"],o);e["default"]=c.exports},"40c4":function(t,e,i){"use strict";var s=i("c333"),n=i.n(s);n.a},8086:function(t,e,i){"use strict";i.r(e);var s=i("ba36"),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=n.a},8186:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* components/recommend/recommend.wxss */.recommend[data-v-c27139f0]{padding-bottom:%?50?%}.recommend .header .title[data-v-c27139f0]{width:%?468?%;height:%?45?%;margin:%?10?% 0}.recommend .goods-title[data-v-c27139f0]{height:%?100?%}.recommend .goods-title .line[data-v-c27139f0]{width:%?58?%;height:1px;background-color:#ccc;margin:0 %?22?%}.recommend .goods-title uni-image[data-v-c27139f0]{width:%?38?%;height:%?38?%}",""]),t.exports=e},"82af":function(t,e,i){"use strict";i.r(e);var s=i("3114"),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=n.a},"95fe":function(t,e,i){"use strict";i.r(e);var s=i("1d7c"),n=i("82af");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("dcf5");var o,r=i("f0c5"),c=Object(r["a"])(n["default"],s["b"],s["c"],!1,null,"3d230bb7",null,!1,s["a"],o);e["default"]=c.exports},ba36:function(t,e,i){"use strict";i("a9e3"),i("acd8"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{priceSlice:{}}},components:{},props:{firstSize:{type:Number,default:28},secondSize:{type:Number,default:28},color:{type:String},weight:{type:[String,Number],default:400},price:{type:[String,Number],default:""},showSubscript:{type:Boolean,default:!0},subscriptSize:{type:Number,default:28},lineThrough:{type:Boolean,default:!1}},created:function(){this.priceFormat()},watch:{price:function(t){this.priceFormat()}},methods:{priceFormat:function(){var t=this.price,e={};null!==t&&(t=parseFloat(t),t=String(t).split("."),e.first=t[0],e.second=t[1],this.priceSlice=e)}}};e.default=s},c333:function(t,e,i){var s=i("e3d9");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("4f06").default;n("bc144b0c",s,!0,{sourceMap:!1,shadowMode:!1})},cf3c:function(t,e,i){"use strict";var s=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("ca48"),a=s(i("95fe")),o={data:function(){return{goodsList:[]}},components:{goodsList:a.default},props:{},beforeMount:function(){this.getBestListFun()},destroyed:function(){},methods:{getBestListFun:function(){var t=this;(0,n.getBestList)({page_no:1,page_size:6}).then((function(e){1==e.code&&(t.goodsList=e.data.list)}))}}};e.default=o},d517:function(t,e,i){var s=i("8186");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("4f06").default;n("487b7eb5",s,!0,{sourceMap:!1,shadowMode:!1})},dcf5:function(t,e,i){"use strict";var s=i("2ddc"),n=i.n(s);n.a},e3d9:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,".price-format[data-v-32420978]{font-family:Avenir}",""]),t.exports=e},fbf4:function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return s}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-text",{class:(t.lineThrough?"~line-through":"")+" price-format",style:{color:t.color,"font-weight":t.weight}},[t.showSubscript?i("v-uni-text",{style:{"font-size":t.subscriptSize+"rpx","margin-right":"2rpx"}},[t._v("¥")]):t._e(),i("v-uni-text",{style:{"font-size":t.firstSize+"rpx","margin-right":"1rpx"}},[t._v(t._s(t.priceSlice.first))]),t.priceSlice.second?i("v-uni-text",{style:{"font-size":t.secondSize+"rpx"}},[t._v("."+t._s(t.priceSlice.second))]):t._e()],1)},a=[]}}]);