function initMap() {
  var uluru = {lat: 31.104814, lng: 77.173403};
  var map = new google.maps.Map(document.getElementById('mygooglemap'), {
    zoom: 10,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
