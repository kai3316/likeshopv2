(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contact_offical-contact_offical"],{1075:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.contact-offical[data-v-b59d6164]{min-height:100vh;background:-webkit-gradient(linear,left top,left bottom,from(#f62318),to(#f20407));background:-webkit-linear-gradient(top,#f62318,#f20407);background:linear-gradient(180deg,#f62318,#f20407)}.contact-offical .header[data-v-b59d6164]{height:383px;width:100%}.contact-offical .content .content-view[data-v-b59d6164]{border:5px solid #fa7949;width:310px;-webkit-border-radius:10px;border-radius:10px;margin-top:-350px}.contact-offical .content .content-view .content-img[data-v-b59d6164]{margin-top:20px;height:192px;width:192px}.contact-offical .content .content-view .wechat-num[data-v-b59d6164]{line-height:45px}.contact-offical .content .content-view .copy-btn[data-v-b59d6164]{background:-webkit-gradient(linear,left top,left bottom,from(#ffa200),to(#ff5e44));background:-webkit-linear-gradient(top,#ffa200,#ff5e44);background:linear-gradient(180deg,#ffa200,#ff5e44);width:230px;height:50px;-webkit-border-radius:50px;border-radius:50px;line-height:49px;margin-top:30px}.contact-offical .content .content-view .contact-btn[data-v-b59d6164]{background-color:#ff2c3c;width:%?300?%;height:%?60?%;margin-bottom:%?20?%}.contact-offical .content .phone-btn[data-v-b59d6164]{background:-webkit-gradient(linear,left top,left bottom,from(#ffa200),to(#ff5e44));background:-webkit-linear-gradient(top,#ffa200,#ff5e44);background:linear-gradient(180deg,#ffa200,#ff5e44);height:24px;width:60px;line-height:33px;-webkit-border-radius:50px;border-radius:50px}.contact-offical .content .copy-phone-btn[data-v-b59d6164]{background-color:hsla(0,0%,100%,.5);height:24px;width:60px;line-height:33px;-webkit-border-radius:50px;border-radius:50px}',""]),t.exports=n},"48e8":function(t,n,e){var i=e("1075");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("1a1f21cd",i,!0,{sourceMap:!1,shadowMode:!1})},"51fd":function(t,n,e){"use strict";e.r(n);var i=e("7187"),o=e("e3d9");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("ad39");var c,r=e("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"b59d6164",null,!1,i["a"],c);n["default"]=s.exports},7187:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={uModal:e("98d1").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"contact-offical"},[e("v-uni-view",{staticClass:"header"}),e("v-uni-view",{staticClass:"content column-center"},[e("v-uni-view",{staticClass:"content-view column-center bg-white"},[e("img",{staticClass:"content-img",attrs:{src:t.server.image}}),e("v-uni-view",{staticClass:"primary wechat-num lg"},[t._v("客服微信")]),e("v-uni-view",{staticClass:"row-center copy-btn xxl white",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onCopy(t.server.wechat)}}},[e("v-uni-image",{staticClass:"mr5",staticStyle:{width:"32px",height:"25px"},attrs:{src:"/static/images/wechat-btn-icon.png"}}),t._v("微信扫码添加")],1),e("v-uni-view",{staticClass:"mt20 normal xs",staticStyle:{"line-height":"35px"}},[t._v(t._s(t.server.time))]),e("v-uni-view",{staticClass:"sm row-center contact-btn br60",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tipsShow()}}},[e("v-uni-text",{staticStyle:{"line-height":"50px",color:"white"}},[t._v("在线客服")])],1)],1),e("v-uni-view",{staticClass:"xs white",staticStyle:{"margin-top":"40px","line-height":"49px"}},[t._v("无法添加或疑难问题请联系工作人员")]),e("v-uni-view",{staticClass:"row white"},[e("v-uni-view",{staticClass:"xs",staticStyle:{"line-height":"49px"}},[t._v(t._s(t.server.phone))]),e("a",{staticClass:"ml10 phone-btn xs row-center white",attrs:{href:"tel:"+t.server.phone}},[t._v("拨打")]),e("v-uni-view",{staticClass:"ml5 copy-phone-btn xs row-center",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onCopy(t.server.phone)}}},[t._v("复制")])],1)],1),e("u-modal",{attrs:{content:t.content,"show-cancel-button":!0,"confirm-text":"呼叫","confirm-color":t.primaryColor},on:{confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.onCall.apply(void 0,arguments)}},model:{value:t.showPhoneCall,callback:function(n){t.showPhoneCall=n},expression:"showPhoneCall"}})],1)},a=[]},ad39:function(t,n,e){"use strict";var i=e("48e8"),o=e.n(i);o.a},bb98:function(t,n,e){"use strict";e("d3b7"),e("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("20f1"),o=e("f262"),a={name:"contactOffical",data:function(){return{server:{},showPhoneCall:!1,content:"即将打电话给"}},onLoad:function(){this.$getService()},methods:{$getService:function(){var t=this;(0,i.getService)().then((function(n){1==n.code&&(t.server=n.data)}))},tipsShow:function(){this.$toast({title:"该功能暂未开放"})},onCopy:function(t){(0,o.copy)(t)},showTelTips:function(){this.showPhoneCall=!0,this.content="即将打电话给"+this.server.phone},onCall:function(){wx.makePhoneCall({phoneNumber:this.server.phone.toString(),success:function(t){console.log("成功",t)},fail:function(t){console.log("失败",t)}})}}};n.default=a},e3d9:function(t,n,e){"use strict";e.r(n);var i=e("bb98"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a}}]);