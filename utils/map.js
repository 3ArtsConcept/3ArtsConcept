module.exports = function () {
	var map;
	var styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];

	var styledMap = new google.maps.StyledMapType(styles,
		{name: "Subtle Grayscale"});

	var center = {lat: 1.2813794, lng: 103.8426425};
	map = new google.maps.Map(document.getElementById('map'), {
		center: center,
		zoom: 17,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		}
	});
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');

	var contentString = '<div id="content" style="padding-right: 12px; width: 200px;">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">3Arts Concept</h1>'+
	'<div id="bodyContent"> <p>1 North Bridge Road <br>High Street Center <br>(S)179094<br>#02-104B <br>+65 6352 1055</p>'
	+'</div>'+
	'</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString,
	});

	var marker = new google.maps.Marker({
		position: center,
		map: map,
		title: '3 Arts Concept'
	});

	infowindow.open(map, marker);

	
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});

}