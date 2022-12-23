let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 26.2370499, lng: 127.7064016 },
        zoom: 15,
    });
}

window.initMap = initMap;