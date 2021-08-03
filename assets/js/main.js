window.$ = window.jQuery = require('jquery')
var Vue = require('vue')
Vue.use(require('vue-resource'))
var VueTouch = require('vue-touch')
var bootstrap = require('bootstrap-sass')
// var VueStrap = require('vue-strap/dist/vue-strap.min.js');
var owl = require('../../node_modules/owlcarousel/owl-carousel/owl.carousel.min.js')

Vue.use(VueTouch)

// window.onload = function(e) {
// 	console.log("window loaded");
// };
Vue.filter('number-filter', function (value) {
  // return processed value
})

import popup from './component/popup/catPopup.vue'
import partnerPopup from './component/popup/partnerPopup.vue'

new Vue({
	el: 'body',
	data(){
		return{
			Number:'',Name:'',Email:'',Message:'',
			error:{Name:false,Email:false,EmailFormat:false,Number:false,MinNumber:false,Message:false},
		}
	},
	components: {
		popup, partnerPopup
	}, 
	methods:{
		onSwipeLeft(){console.log('left')}, 
		isNumber(evt){
			this.Number = this.Number.replace(/\D/g,'');
			if(this.Number!=''){
				this.error.Number = false
				if(this.Number.length > 7){
					this.error.MinNumber = false
				}
			}
		},
		submitForm(){
			if(this.Name=='')
				{this.error.Name=true}
			if(this.Email=='')
				{this.error.Email=true}
			else{
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				this.error.EmailFormat = (!re.test(this.Email))
			}
			if(this.Number=='')
				{this.error.Number=true}
			else{
				this.error.MinNumber = (this.Number.length < 8)
			}
			if(this.Message=='')
				{this.error.Message=true}

			var error = this.error
			var result = false;
			Object.keys(this.error).map(function(value, index) {
				if(error[value]) result = true;
			});

			if(!result){
				this.$http.get('/send-form.php', {'name':this.Name, 'email':this.Email,'message':this.Message,'contact':this.Number})
				.then(response => {
					if(response.ok){
						this.Number='';
						this.Name='';
						this.Email='';
						this.Message='';
					}
				});
			}
		},
		removeError(para){
			if(this[para]!=''){
				if(para=='Email'){
					this.error[para]= false
					var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					if(re.test(this.Email)){
						this.error.EmailFormat = false
					}
				}
				else
					this.error[para]= false
			}
		}
	}
})
var initMap = require('./functions/map.js');


$( document ).ready(function() {
	$("#bgvid").get(0).play();
	

	$(".steps-carousel").owlCarousel({
		autoPlay: 5000,
		autoHeight:true,
		items : 1,
		pagination: true,
		responsive:true,
		singleItem: true
	});

	$(".owl-carousel").owlCarousel({
		autoPlay: 3000,
		autoHeight:true,
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
		pagination: false,
		itemScaleUp:true,
		responsive:true,
	});

	initMap();

	$('.nav_down').click(function(){
		if($('.nav_buttons > ul > li:nth-child(1) > i').hasClass('nav_active')){
			scrollToDiv('#about')
		}
		else if($('.nav_buttons > ul > li:nth-child(2) > i').hasClass('nav_active')){
			scrollToDiv('#product')
		}
		else if($('.nav_buttons > ul > li:nth-child(3) > i').hasClass('nav_active')){
			scrollToDiv('#3steps')
		}
		else if($('.nav_buttons > ul > li:nth-child(4) > i').hasClass('nav_active')){
			scrollToDiv('#contact')
		}
		else{
			console.log('this shouldnt be seen')
		}
	})

	

	$(window).scroll(function() {
		if($(window).scrollTop()>=$('#contact').position().top)
			changeActiveDot(5)
		else if($(window).scrollTop()>=$('#3steps').position().top)
			changeActiveDot(4)	
		else if($(window).scrollTop()>=$('#product').position().top)
			changeActiveDot(3)
		else if($(window).scrollTop()>=$('#about').position().top)
			changeActiveDot(2)
		else if($(window).scrollTop()>=$('#owl-example').position().top)
			changeActiveDot(1)
	});

	function changeActiveDot(num) {
		if($('.nav_buttons > ul > li:not(:nth-child('+num+')) > i').hasClass('nav_active')){
			$('.nav_buttons > ul > li:not(:nth-child('+num+')) > i').removeClass('nav_active')
		}			
		if(!$('.nav_buttons > ul > li:nth-child('+num+') > i').hasClass('nav_active')){
			$('.nav_buttons > ul > li:nth-child('+num+') > i').addClass('nav_active')	
		}

		if(num == 5){
			if($('.nav_down').css('display') == 'block'){
				$('.nav_down').css('display','none')
			}
		}
		else{
			if($('.nav_down').css('display') == 'none'){
				$('.nav_down').css('display','block')
			}
		}
	}

	function scrollToDiv(id){
		var $anchor = $(id).offset();
		$('body').stop().animate({
			scrollTop: $anchor.top
		}, 'slow');
	}
	
});


