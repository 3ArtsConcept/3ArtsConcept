(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{288:function(e,t,n){"use strict";n.r(t);var o={props:{type:{type:null|String,required:!0},value:{type:Boolean,required:!0}},computed:{show:{get:function(){return this.value},set:function(e){this.$emit("update:value",e)}},alt:function(){return"wedding"==this.type?"3Arts Wedding Category Popup Image":"child"==this.type?"3Arts Young Ones Popup Image":"portrait"==this.type?"3Arts Individual Portrait Popup Image":"3Arts Corportate Branding Category Popup Image"},header:function(){return"wedding"==this.type?"Wedding":"child"==this.type?"Young Ones":"portrait"==this.type?"Individual Portrait":"Corporate Branding"},image:function(){return"wedding"==this.type?"/img/two-thumbs.jpg":"child"==this.type?"/img/child.jpg":"portrait"==this.type?"/img/graduant.jpg":"/img/man-woman.jpg"},content:function(){return"wedding"==this.type?"<p> Walking down the aisle hand in hand is blissful, embarking this new chapter in life is challenging, taking the leap of faith takes courage!<br><br> Keep all of these memories together in just one tailor-made showcase meant for just the both of you to reminisce as the years go by!</p>":"child"==this.type?"<p>Children, the innocence and happiness in them goes by much quicker than what we perceive. They are your one and only in the world, capture that one impression of them and it stays.<br><br>Photographs show just a picture; a showcase creates the sense of belonging for your family!</p>":"portrait"==this.type?"<p>“You Only Live Once!” Time to take a step back, it’s time to credit yourself.<br><br>Life’s a quick journey, only if you mark your own checkpoints and celebrate them!<br><br>Achievements not to be forgotten, recognition not to be neglected and significant moments accounted for brings value to you!</p>":"<p>Branding with an identity marks its position with an indirect edge over competitors for all corporate and businesses.<br><br> Create the uptrend symbolic icon of your products/services for greater values enhanced onto your business.</p>"}}},r=n(64),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{id:"productModal","hide-footer":""},scopedSlots:e._u([{key:"modal-title",fn:function(){return[e._v("\n    "+e._s(e.header)+"\n  ")]},proxy:!0}]),model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[e._v(" "),n("div",[n("b-img",{attrs:{src:e.image,alt:e.alt}}),e._v(" "),n("div",{staticClass:"mt-4",domProps:{innerHTML:e._s(e.content)}})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);