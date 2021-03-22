/* This code was taken from the 'How to Google Maps.pdf' presentation created & shared on Slack by Eamonn Smyth */

var map;
var service;
var infowindow;

// To Create initial map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8.5,
        center: new google.maps.LatLng(43.00992, -7.55602),
    });


    /* Adding markers objects */
    const myMarks = [{"lat": 42.8962139, "lng": -9.1376387, "name": "Morada da Moa", "information": `Hotel`},
                     {"lat": 42.9389864, "lng": -8.1601971, "name": "Pazo Santa Maria", "information": `Hotel`},
                     {"lat": 42.9614841, "lng": -8.6253569, "name": "Casa Grande do Bachao", "information": `Hotel`},
                     {"lat": 42.8828521, "lng": -8.5443919, "name": "Hotel Atalaia B&B", "information": `Hotel`},
                     {"lat": 43.3465954, "lng": -8.3501361, "name": "Hotel Portocobo", "information": `Hotel`},

                     {"lat": 42.2354489, "lng": -8.7174008, "name": "B&B Hotel Vigo", "information": `Hotel`},
                     {"lat": 42.231824, "lng": -8.7363986, "name": "Eurostars Mar de Vigo", "information": 'Hotel'},
                     {"lat": 42.1245053, "lng": -8.8512843, "name": "Parador de Baiona", "information": `Hotel`},
                     {"lat": 42.237488, "lng": -8.7207551, "name": "NH Collection Vigo", "information": `Hotel`},
                     {"lat": 42.4912743, "lng": -8.8556907, "name": "Hotel Talaso Louxo La Toja", "information": `Hotel`},

                     {"lat": 43.5474993, "lng": -7.1179646, "name": "Hotel Mi Norte", "information": `Hotel`},
                     {"lat": 43.6328357, "lng": -7.6164844, "name": "Pazo da Trave", "information": 'Hotel'},
                     {"lat": 43.5324951, "lng": -7.0449125, "name": "Hotel O Cabazo", "information": `Hotel`},
                     {"lat": 43.329067, "lng": -7.7508103, "name": "Hotel Spa Attica 21 Villalba", "information": `Hotel`},
                     {"lat": 43.5498894, "lng": -7.4433587, "name": "Vila do Val", "information": `Hotel`},

                     {"lat": 42.3826633, "lng": -7.5704498, "name": "Hotel Restaurante O Balcon Da Ribeira", "information": `Hotel`},
                     {"lat": 42.4173129, "lng": -7.6876807, "name": "Parador De Santo Estevo", "information": 'Hotel'},
                     {"lat": 42.3423248, "lng": -7.8664412, "name": "Barcelo Ourense", "information": `Hotel`},
                     {"lat": 42.3426343, "lng": -7.8624773, "name": "NH Ourense", "information": `Hotel`},
                     {"lat": 42.3426587, "lng": -7.8632529, "name": "Carris Cardenal Quevedo", "information": `Hotel`},

                     {"lat": 43.3028828, "lng": -8.511014, "name": "A Capela", "information": `Restaurant`},
                     {"lat": 42.8779412, "lng": -8.5477, "name": "PA Noiesa Restaurante", "information": 'Restaurant'},
                     {"lat": 42.7978491, "lng": -8.4051493, "name": "O Balado Marta e Roberto", "information": `Restaurant`},
                     {"lat": 42.8806744, "lng": -8.5491631, "name": "Casa Marcelo", "information": `Restaurant`},
                     {"lat": 43.22171, "lng": -9.0079977, "name": "Apraceria", "information": `Restaurant`},

                     {"lat": 42.239617, "lng": -8.7285892, "name": "El Mosquito", "information": `Restaurant`},
                     {"lat": 42.1187726, "lng": -8.8496633, "name": "Restaurant O Moscon", "information": 'Restaurant'},
                     {"lat": 42.4325571, "lng": -8.6488128, "name": "Taberna Zentola", "information": `Restaurant`},
                     {"lat": 42.4312866, "lng": -8.7067378, "name": "O Peirao de Rial", "information": `Restaurant`},
                     {"lat": 42.4326514, "lng": -8.6454456, "name": "Eirado da Lena", "information": `Restaurant`},

                     {"lat": 43.175429, "lng": -7.7590746, "name": "KM 101", "information": `Restaurant`},
                     {"lat": 43.0073964, "lng": -7.5585865, "name": "La Urbana", "information": 'Restaurant'},
                     {"lat": 42.9947692, "lng": -7.5556625, "name": "La Pizzeria di Toto", "information": `Restaurant`},
                     {"lat": 42.5216427, "lng": -7.5183042, "name": "Garden Monforte", "information": `Restaurant`},
                     {"lat": 42.5554141, "lng": -7.4960531, "name": "Braseria Casa Reboiro", "information": `Restaurant`},

                     {"lat": 42.4110647, "lng": -7.7294599, "name": "O Campanario", "information": `Restaurant`},
                     {"lat": 42.3417441, "lng": -7.8635133, "name": "Nova", "information": 'Restaurant'},
                     {"lat": 42.3334895, "lng": -7.8631679, "name": "Pacifico", "information": `Restaurant`},
                     {"lat": 42.1883815, "lng": -7.8047625, "name": "Restaurante Pallabarro", "information": `Restaurant`},
                     {"lat": 42.3471432, "lng": -7.8079222, "name": "La Table", "information": `Restaurant`},

                     {"lat": 42.8999556, "lng": -9.2869793, "name": "Cabo Finisterre", "information": `Natural Beauty Spot`},
                     {"lat": 43.36799199, "lng": -8.403607264, "name": "Food Tour of La Coruna", "information": `Activities`},
                     {"lat": 42.8806001, "lng": -8.5468299, "name": "Cathedral of Santiago de Compostela", "information": `Historic Cathedral`},


                     {"lat": 42.4072719, "lng": -8.8082417, "name": "Adega Eidos", "information": `Wine Tour`},
                     {"lat": 42.2261474, "lng": -8.7604454, "name": "Vigo", "information": `City`},
                     {"lat": 42.2146123, "lng": -8.9402411, "name": "Islas Cies", "information": `National Park`},

                     {"lat": 43.0088365, "lng": -7.5613902, "name": "Walled City of Lugo", "information": `Historic Monuments`},
                     {"lat": 43.4281626, "lng": -7.3649017, "name": "Mondonedo Cathedral", "information": `Historic Cathedral`},
                     {"lat": 43.5539341, "lng": -7.1594403, "name": "As Cateidras", "information": `Beach`},

                     {"lat": 42.2423822, "lng": -6.804821, "name": "Pena Trevinca", "information": `Hiking Trail`},
                     {"lat": 42.2908419, "lng": -7.8011373, "name": "Manzaneda", "information": `Adventurous Activities`},
                     {"lat": 42.3911143, "lng": -7.5672444, "name": "Balcones de Madrid", "information": `Natural Beauty Spot`}
                    ];

    /*Initialise an InfoObj - will store marker information displayed in each info window */
    var InfoObj = [];

    /* To loop over myMarks */
    for(let i=0;i<myMarks.length;i++) {
        let contentString = '<h6>' + myMarks[i].name + '</h6>' +
        '<p>' + myMarks[i].information + '</p>' +
        '<a target="_blank" href="https://www.tripadvisor.com/Tourism-g187506-Galicia-Vacations.html">' + 'Click Me!' + '</a>';

        const marker = new google.maps.Marker({
        position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
        map: map,
        title: myMarks[i].name,
        animation: google.maps.Animation.DROP
    });

    /* Setting up INFO WINDOW */
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
    });

    /* Here add a click listener to the marker */
    marker.addListener("click", function() {
        closeOtherInfo();
        infowindow.open(map,marker);
        InfoObj[0] = infowindow;
    });
    }

    /* This function clears out old info */
    function closeOtherInfo() {
        if(InfoObj.length > 0) {
            InfoObj[0].set ("marker", null);
            InfoObj[0].close();
            InfoObj[0].length = 0;
        }
    }
    
}

/* To call the map */
initMap()


