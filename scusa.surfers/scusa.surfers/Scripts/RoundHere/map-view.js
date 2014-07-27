var map;

function initialize() {

	var myCenter = new google.maps.LatLng(32.782233, -96.798075);

	var mapProp = {
		center: myCenter,
		zoom: 18,
		draggable: false,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("map-canvas"), mapProp);
}

$("#mapTab").on('shown.bs.tab', function () {

	/* Trigger map resize event */
	google.maps.event.trigger(map, 'resize');
});