(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-170d5d1b"],{"25eb":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Navbar",{attrs:{title:"選擇輸入分數的公司"}}),e("b-navbar",{staticClass:"navbar-2",attrs:{toggleable:"lg",type:"light",variant:""}},[e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-form",{attrs:{inline:""}},[e("span",{staticClass:"abs-center-x"},[e("b-form-select",{staticClass:"mr-sm-2",attrs:{options:t.options1,size:"sm"},model:{value:t.selected1,callback:function(s){t.selected1=s},expression:"selected1"}}),e("b-form-select",{staticClass:"mr-sm-2",attrs:{options:t.options2,size:"sm"},model:{value:t.selected2,callback:function(s){t.selected2=s},expression:"selected2"}})],1)]),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-form",[e("b-form-input",{staticClass:"mr-sm-2 search-input",attrs:{size:"sm",placeholder:"Search"}})],1)],1)],1)],1),e("div",{staticClass:"content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-4"},t._l(t.com_list1,(function(s,i){return e("div",{key:i},[e("ul",[e("li",{on:{click:t.toInputform}},[t._v(" "+t._s(s[0])+" ")])])])})),0),e("div",{staticClass:"col-4"},t._l(t.com_list2,(function(s,i){return e("div",{key:i},[e("ul",[e("li",{on:{click:t.toInputform}},[t._v(" "+t._s(s[0])+" ")])])])})),0),e("div",{staticClass:"col-4"},t._l(t.com_list3,(function(s,i){return e("div",{key:i},[e("ul",[e("li",{on:{click:t.toInputform}},[t._v(" "+t._s(s[0])+" ")])])])})),0)])])])],1)},a=[],o=(e("4160"),e("159b"),e("d178")),c={components:{Navbar:o["a"]},computed:{com_list1:function(){var t=this;if("0"==this.selected2)return this.$store.state.com_list1;var s=[];return this.$store.state.com_list1.forEach((function(e){e[1]==t.selected2&&s.push(e)})),s},com_list2:function(){var t=this;if("0"==this.selected2)return this.$store.state.com_list2;var s=[];return this.$store.state.com_list2.forEach((function(e){e[1]==t.selected2&&s.push(e)})),s},com_list3:function(){var t=this;if("0"==this.selected2)return this.$store.state.com_list3;var s=[];return this.$store.state.com_list3.forEach((function(e){e[1]==t.selected2&&s.push(e)})),s}},data:function(){return{selected1:"2020",options1:[{value:"2020",text:"2020"},{value:"2019",text:"2019"}],selected2:"0",options2:[{value:"0",text:"顯示全部"},{value:"1",text:"汽車貨運業"},{value:"2",text:"汽車貨櫃貨運業"},{value:"3",text:"汽車路線貨運業"},{value:"4",text:"客運業"}],searchClient:""}},mounted:function(){this.$store.dispatch("GETLIST")},methods:{toInputform:function(){var t="/inputform";this.$route.path!==t&&this.$router.push(t)}}},n=c,l=(e("30bd"),e("2877")),r=Object(l["a"])(n,i,a,!1,null,"492cedb4",null);s["default"]=r.exports},"30bd":function(t,s,e){"use strict";var i=e("432d"),a=e.n(i);a.a},"432d":function(t,s,e){}}]);
//# sourceMappingURL=chunk-170d5d1b.3f8e6e91.js.map