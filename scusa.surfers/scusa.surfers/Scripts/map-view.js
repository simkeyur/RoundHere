var map;
var myCenter = new google.maps.LatLng(32.782119, -96.798322);

function initialize() {

	var mapProp = {
		center: myCenter,
		zoom: 14,
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

initialize();