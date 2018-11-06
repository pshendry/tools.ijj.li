(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{250:function(t,e,s){"use strict";var a={name:"ToolHeader",props:{title:{type:String,required:!0},descriptionHtml:{type:String,default:""}},head:function(){return{title:"".concat(this.title," - ").concat(this.$t("appName"))}}},n=s(16),i=Object(n.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"pb-4"},[this._v(this._s(this.title))]),this._v(" "),e("div",{domProps:{innerHTML:this._s(this.descriptionHtml)}})])},[],!1,null,null,null);i.options.__file="ToolHeader.vue";e.a=i.exports},862:function(t,e,s){"use strict";s.r(e);var a={components:{ToolHeader:s(250).a},data:function(){return{average:0,lastTapTime:null,numTaps:0}},computed:{bpm:function(){return Math.round(0===this.average?0:6e4/this.average).toLocaleString()+" "+this.$t("tools.tempo.bpmText")}},methods:{onTap:function(){if(null===this.lastTapTime)this.average=0,this.lastTapTime=Date.now();else{var t=Date.now();this.average=(t-this.lastTapTime+this.numTaps*this.average)/(this.numTaps+1),this.lastTapTime=t,this.numTaps+=1}},onReset:function(){this.average=0,this.lastTapTime=null,this.numTaps=0}}},n=s(16),i=s(25),o=s.n(i),l=s(87),r=s(83),p=s(84),u=Object(n.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("tool-header",{attrs:{title:t.$t("tools.tempo.title"),"description-html":t.$t("tools.tempo.descriptionHtml")}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-flex",{staticClass:"display-3",attrs:{xs12:""}},[t._v("\n      "+t._s(t.bpm)+"\n    ")]),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-btn",{attrs:{color:"primary",large:""},on:{click:t.onTap}},[t._v("\n        "+t._s(t.$t("tools.tempo.tapLabel"))+"\n      ")]),t._v(" "),s("v-btn",{attrs:{color:"secondary",large:""},on:{click:t.onReset}},[t._v("\n        "+t._s(t.$t("tools.tempo.resetLabel"))+"\n      ")])],1)],1)],1)},[],!1,null,null,null);u.options.__file="tempo.vue";e.default=u.exports;o()(u,{VBtn:l.a,VFlex:r.a,VLayout:p.a})}}]);