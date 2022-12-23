"use strict";

window.initMap = function () {
  var customMapType = new google.maps.StyledMapType([
    {
      stylers: [
        { 'saturation': 0 },
        { 'lightness': 0 },
        { 'visibility': 'simplified' }
      ]
    }
  ], {
    name: 'Dublin'
  });

  var image = new google.maps.MarkerImage(
    'img/widgets/gmap-pin.png',
    new google.maps.Size(48, 54),
    new google.maps.Point(0, 0),
    new google.maps.Point(24, 54)
  );

  var customMapTypeId = 'custom_style';

  var brooklyn = { lat: 26.2370499, lng: 127.7064016 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false,
    center: brooklyn, // Brooklyn.
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });

  var contentString = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">OCC</h1>' +
    '<div id="bodyContent">' +
    '<p>〒901-2112 沖縄県浦添市沢岻２丁目１７−1 OCCコンピュータビル</p>' +
    '</div>' +
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 300
  });

  var marker = new google.maps.Marker({
    map: map,
    clickable: true,
    icon: image,
    title: 'Brooklyn',
    position: brooklyn
  });

  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
}