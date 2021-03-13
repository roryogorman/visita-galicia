function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), { 
                zoom: 9,
                center: {
                    lat: 43.091022,
                    lng: -8.496202
                }
            });

        /*var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var locations = [
            { lat: 42.880602, lng: -8.544377 },
            { lat: 43.385956, lng: -8.406495 },
            { lat: 42.876163162, lng: -9.26999892 },
            { lat: 43.417164998, lng: -8.067666396},
            { lat: 43.3836, lng: -8.4096 },
            { lat: 42.9127, lng: -9.1163 }
        ];*/

        /* ADD MARKER COORDINATES */
        const myMarks = [{"lat": 42.880602, "lng": -8.544377, "name" : "Cathedral of Santiago De Compostela"},
                       {"lat": 43.385956, "lng": -8.406495, "name" : "Torre de Hercules"},
                       {"lat": 42.876163162, "lng":  -9.26999892, "name" : "Cape Finisterre"},
                       {"lat": 43.417164998, "lng": -8.067666396, "name" : "Fragas do Eume"},
                       {"lat": 43.3836, "lng": -8.4096, "name" : "Aquarium Finisterrae"},
                       {"lat": 42.9127, "lng": -9.1163, "name" : "Fervenzo do Ezaro"}
                        ];
        
        /* TO LOOP OVER myMark OBJECTS*/
        for(let i=0; i <myMarks.length; i++) {
        /* MARKER CONSTRUCTOR CRATES A MARKER. SET THE POSITION PROPERTY TO myMark */
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
            map: map,
            title: myMarks[i].name });
        /* ADDS MARKER TO THE MAP*/
        marker.setMap(map);
        }

        }