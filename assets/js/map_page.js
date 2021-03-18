// Original code for this came form https://developers.google.com/maps/documentation/javascript/places 

/*var map;
var service;
var infowindow;

function initMap() {
            var galicia = new google.maps.LatLng(43.091022, -8.496202);
            infowindow = new google.maps.InfoWindow();
            map = new google.maps.Map(document.getElementById('map'), {center: galicia, zoom: 9});
            /*mapId = '3fcd504b2d0f3a4e' */
            /*var request = {
            query: 'Museum of Contemporary Art Australia',
            fields: ['name', 'geometry'],
            };

  var service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}


        /* Code to change center of the map was found at https://stackoverflow.com/questions/28499141/how-to-change-google-map-center-by-clicking-a-button/28500306
        function newLocation(newLat, newLng) {
        map.setCenter({
        lat: newLat,
        lng: newLng,
        });
        }

        /*Setting Location with jQuery
        $(document).ready(function () {
            $("#coruna-map-section").click(function () {
                newLocation(42.880602, -8.544377);
                });

            $("#pontevedra-map-section").click(function () {
                newLocation(42.23282, -8.72264);
                });

            $("#lugo-map-section").click(function () {
                newLocation(43.00992, -7.55602);
            });

            $("#ourense-map-section").click(function () {
                newLocation(42.33669, -7.86407);
            });
        }); */

        /*var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var locations = [
            { lat: 42.880602, lng: -8.544377 },
            { lat: 43.385956, lng: -8.406495 },
            { lat: 42.876163162, lng: -9.26999892 },
            { lat: 43.417164998, lng: -8.067666396},
            { lat: 43.3836, lng: -8.4096 },
            { lat: 42.9127, lng: -9.1163 }
        ];

        /* ADD MARKER COORDINATES */
        /*const myMarks = [{"lat": 42.880602, "lng": -8.544377, "name" : "Cathedral of Santiago De Compostela"},
                       {"lat": 43.385956, "lng": -8.406495, "name" : "Torre de Hercules"},
                       {"lat": 42.876163162, "lng":  -9.26999892, "name" : "Cape Finisterre"},
                       {"lat": 43.417164998, "lng": -8.067666396, "name" : "Fragas do Eume"},
                       {"lat": 43.3836, "lng": -8.4096, "name" : "Aquarium Finisterrae"},
                       {"lat": 42.9127, "lng": -9.1163, "name" : "Fervenzo do Ezaro"}
                        ];
        
        /* TO LOOP OVER myMark OBJECTS 
        for(let i=0; i <myMarks.length; i++) {
        /*MARKER CONSTRUCTOR CRATES A MARKER. SET THE POSITION PROPERTY TO myMark 
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
            map: map,
            title: myMarks[i].name });
        /*ADDS MARKER TO THE MAP
        marker.setMap(map);
        }

        } */

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var map;
var service;
var infowindow;

function initMap() {
  // Create the map.
  var center = new google.maps.LatLng (42.880602, -8.544377);
  var map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 10,
    mapId: "3fcd504b2d0f3a4e"
  });

  var request = {
      location: center,
      radius: 8047,
      types: ['cafe']
  };
  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  service.nearbySearch(request,callback);
  
}

function callback(results, status) {
    if(status == google.maps.places.PlacesSrviceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.marker ({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

//google.maps.event.addDomListener(window, 'load', initMap);

