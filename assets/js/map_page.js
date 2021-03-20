/* This code was taken from the 'How to Google Maps.pdf' fil created & shared on Slack by Eamonn Smyth */

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
    /* Lodging Marks */
    const myMarks = [{"lat": 42.8962139, "lng": -9.1376387, "name": "Morada da Moa", "information": `Hotel`},
                     {"lat": 42.9389864, "lng": -8.1601971, "name": "Pazo Santa Maria", "information": `Hotel`},
                     {"lat": 43.1365624, "lng": -9.1137225, "name": "Hotel Rustico Lugar Do Cotarino", "information": 'Hotel'},
                     {"lat": 42.9614841, "lng": -8.6253569, "name": "Casa Grande do Bachao", "information": `Hotel`},
                     {"lat": 42.8831239, "lng": -8.5455487, "name": "Costa Vella Hotel", "information": `Hotel`},
                     {"lat": 42.9076412, "lng": -9.2692172, "name": "Hotel Mar da Ardora", "information": `Hotel`},
                     {"lat": 42.8828521, "lng": -8.5443919, "name": "Hotel Atalaia B&B", "information": `Hotel`},
                     {"lat": 43.3465954, "lng": -8.3501361, "name": "Hotel Portocobo", "information": `Hotel`},
                     {"lat": 43.6492569, "lng": -8.0472197, "name": "Hotel Herbeira", "information": `Hotel`},
                     {"lat": 43.2239914, "lng": -9.0068436, "name": "Hostal Bahia", "information": `Hostel`},
                     {"lat": 42.2354489, "lng": -8.7174008, "name": "B&B Hotel Vigo", "information": `Hotel`},
                     {"lat": 42.231824, "lng": -8.7363986, "name": "Eurostars Mar de Vigo", "information": 'Hotel'},
                     {"lat": 42.1245053, "lng": -8.8512843, "name": "Parador de Baiona", "information": `Hotel`},
                     {"lat": 42.237488, "lng": -8.7207551, "name": "NH Collection Vigo", "information": `Hotel`},
                     {"lat": 42.4912743, "lng": -8.8556907, "name": "Hotel Talaso Louxo La Toja", "information": `Hotel`},
                     {"lat": 42.2397607, "lng": -8.7235505, "name": "Gran Hotel Nagari Boutique & Spa", "information": `Hotel`},
                     {"lat": 42.494726, "lng": -8.8637839, "name": "Hotal Spa Norat O Grove", "information": `Hotel`},
                     {"lat": 42.4275686, "lng": -8.6420314, "name": "Hotel Virgen del Camino Pontevedra", "information": `Hotel`},
                     {"lat": 42.1396635, "lng": -8.8199942, "name": "Apartamentos Angelino", "information": `Hotel`},
                     {"lat": 42.4609528, "lng": -8.9347868, "name": "Hotel Duerming San Vicente", "information": `Hotel`},                    
                     {"lat": 43.5474993, "lng": -7.1179646, "name": "Hotel Mi Norte", "information": `Hotel`},
                     {"lat": 43.6328357, "lng": -7.6164844, "name": "Pazo da Trave", "information": 'Hotel'},
                     {"lat": 43.5324951, "lng": -7.0449125, "name": "Hotel O Cabazo", "information": `Hotel`},
                     {"lat": 43.329067, "lng": -7.7508103, "name": "Hotel Spa Attica 21 Villalba", "information": `Hotel`},
                     {"lat": 43.5498894, "lng": -7.4433587, "name": "Vila do Val", "information": `Hotel`},
                     {"lat": 43.6645541, "lng": -7.3604371, "name": "Hotel Nordes", "information": `Hotel`},
                     {"lat": 43.2981941, "lng": -7.6845649, "name": "Parador de Vilalba", "information": `Hotel`},
                     {"lat": 43.5359444, "lng": -7.0458998, "name": "Hotel Bouza", "information": `Hotel`},
                     {"lat": 42.4638425, "lng": -7.5883098, "name": "Hotel Cardenal", "information": `Hotel`},
                     {"lat": 43.6592539, "lng": -7.5993387, "name": "Viveiro Urban Hotel", "information": `Hotel`},
                     {"lat": 42.3826633, "lng": -7.5704498, "name": "Hotel Restaurante O Balcon Da Ribeira", "information": `Hotel`},
                     {"lat": 42.4173129, "lng": -7.6876807, "name": "Parador De Santo Estevo", "information": 'Hotel'},
                     {"lat": 42.3423248, "lng": -7.8664412, "name": "Barcelo Ourense", "information": `Hotel`},
                     {"lat": 42.3426343, "lng": -7.8624773, "name": "NH Ourense", "information": `Hotel`},
                     {"lat": 42.3426587, "lng": -7.8632529, "name": "Carris Cardenal Quevedo", "information": `Hotel`},
                     {"lat": 42.4364907, "lng": -7.7512552, "name": "Hotel O Remanso dos Patos", "information": `Hotel`},
                     {"lat": 42.4286604, "lng": -6.9931592, "name": "Hotel Pazo Do Castro", "information": `Hotel`},
                     {"lat": 42.2705956, "lng": -7.6613379, "name": "Monumento Castelo de Maceda", "information": `Hotel`},
                     {"lat": 41.9405369, "lng": -7.4465135, "name": "Parador de Verin", "information": `Hotel`},
                     {"lat": 42.1894069, "lng": -7.8027853, "name": "O Portelo Rural", "information": `Hotel`}, 
                     {"lat": 43.3028828, "lng": -8.511014, "name": "A Capela", "information": `Restaurant`},
                     {"lat": 42.8779412, "lng": -8.5477, "name": "PA Noiesa Restaurante", "information": 'Restaurant'},
                     {"lat": 42.7978491, "lng": -8.4051493, "name": "O Balado Marta e Roberto", "information": `Restaurant`},
                     {"lat": 42.8806744, "lng": -8.5491631, "name": "Casa Marcelo", "information": `Restaurant`},
                     {"lat": 43.22171, "lng": -9.0079977, "name": "Apraceria", "information": `Restaurant`},
                     {"lat": 42.8754476, "lng": -8.5414992, "name": "O Sendeiro", "information": `Restaurant`},
                     {"lat": 42.7996658, "lng": -9.1297291, "name": "Xouba", "information": `Restaurant`},
                     {"lat": 43.3699711, "lng": -8.406922, "name": "El De Alberto", "information": `Restaurant`},
                     {"lat": 43.3691172, "lng": -8.4060846, "name": "Terreo Cocina Casual", "information": `Restaurant`},
                     {"lat": 42.9125479, "lng": -8.0128862, "name": "Casa Alongos", "information": `Restaurant`},
                     {"lat": 42.239617, "lng": -8.7285892, "name": "El Mosquito", "information": `Restaurant`},
                     {"lat": 42.1187726, "lng": -8.8496633, "name": "Restaurant O Moscon", "information": 'Restaurant'},
                     {"lat": 42.4325571, "lng": -8.6488128, "name": "Taberna Zentola", "information": `Restaurant`},
                     {"lat": 42.4312866, "lng": -8.7067378, "name": "O Peirao de Rial", "information": `Restaurant`},
                     {"lat": 42.4326514, "lng": -8.6454456, "name": "Eirado da Lena", "information": `Restaurant`},
                     {"lat": 42.4336873, "lng": -8.6480698, "name": "Onoso Bar", "information": `Restaurant`},
                     {"lat": 42.2403679, "lng": -8.725855, "name": "El Timon", "information": `Restaurant`},
                     {"lat": 41.898368, "lng": -8.8768468, "name": "Restaurant Bitadorna", "information": `Restaurant`},
                     {"lat": 42.4337897, "lng": -8.6479602, "name": "Casa Fidel o Pulpeiro", "information": `Restaurant`},
                     {"lat": 42.0462732, "lng": -8.6468353, "name": "O Novo Cabalo Furado", "information": `Restaurant`},
                     {"lat": 43.175429, "lng": -7.7590746, "name": "KM 101", "information": `Restaurant`},
                     {"lat": 43.0073964, "lng": -7.5585865, "name": "La Urbana", "information": 'Restaurant'},
                     {"lat": 42.9947692, "lng": -7.5556625, "name": "La Pizzeria di Toto", "information": `Restaurant`},
                     {"lat": 42.5216427, "lng": -7.5183042, "name": "Garden Monforte", "information": `Restaurant`},
                     {"lat": 42.5554141, "lng": -7.4960531, "name": "Braseria Casa Reboiro", "information": `Restaurant`},
                     {"lat": 43.5366081, "lng": -7.0494111, "name": "El Rincon del Gordo", "information": `Restaurant`},
                     {"lat": 43.1496239, "lng": -7.0197087, "name": "Meson Catro Ventos", "information": `Restaurant`},
                     {"lat": 42.5164854, "lng": -7.5167391, "name": "Restaurante Taperia La Fabrica", "information": `Restaurant`},
                     {"lat": 42.9935992, "lng": -7.5546021, "name": "Os Cachivaches", "information": `Restaurant`},
                     {"lat": 43.4314966, "lng": -7.3720168, "name": "Vinoteca o Petisco", "information": `Restaurant`},
                     {"lat": 42.4110647, "lng": -7.7294599, "name": "O Campanario", "information": `Restaurant`},
                     {"lat": 42.3417441, "lng": -7.8635133, "name": "Nova", "information": 'Restaurant'},
                     {"lat": 42.3334895, "lng": -7.8631679, "name": "Pacifico", "information": `Restaurant`},
                     {"lat": 42.1883815, "lng": -7.8047625, "name": "Restaurante Pallabarro", "information": `Restaurant`},
                     {"lat": 42.3471432, "lng": -7.8079222, "name": "La Table", "information": `Restaurant`},
                     {"lat": 42.3421796, "lng": -7.8592047, "name": "Restaurante a Palleira", "information": `Restaurant`},
                     {"lat": 42.3321788, "lng": -7.8652721, "name": "A Taberna", "information": `Restaurant`},
                     {"lat": 42.1895911, "lng": -7.8033894, "name": "Restauante Centro Social", "information": `Restaurant`},
                     {"lat": 42.3371605, "lng": -7.8653128, "name": "O Comellon", "information": `Restaurant`},
                     {"lat": 42.3381811, "lng": -7.8656549, "name": "Sybaris 2.0", "information": `Restaurant`},
                     {"lat": 43.3762978, "lng": -8.4383284, "name": "Monte de San Pedro", "information": `Coastal Park`},
                     {"lat": 43.3241471, "lng": -8.8124893, "name": "O Camino dos Faros", "information": 'Hiking Trail'},
                     {"lat": 43.3711852, "lng": -8.3985815, "name": "Plaza de Maria Pita", "information": `Historic City Square`},
                     {"lat": 43.5298184, "lng": -8.3112375, "name": "Playa San Xurxo", "information": `Beach`},
                     {"lat": 42.8999556, "lng": -9.2869793, "name": "Cabo Finisterre", "information": `Natural Beauty Spot`},
                     {"lat": 42.8814146, "lng": -8.5481119, "name": "Hostal de los Reyes Catolicos", "information": `Historic Building`},
                     {"lat": 43.36799199, "lng": -8.403607264, "name": "Food Tour of La Coruna", "information": `Activities`},
                     {"lat": 42.8806001, "lng": -8.5468299, "name": "Cathedral of Santiago de Compostela", "information": `Historic Cathedral`},
                     {"lat": 43.4279672, "lng": -8.1204522, "name": "Fragas De Eume", "information": `National Park`},
                     {"lat": 42.9127315, "lng": -9.1185182, "name": "Fervenza do Xallas", "information": `Natural Waterfall`},
                     {"lat": 42.2383544, "lng": -8.9248968, "name": "Casco Antiguo de Pontevedra", "information": `Historic Old Town`},
                     {"lat": 42.39392, "lng": -8.7817455, "name": "Playa de Areas", "information": 'Beach'},
                     {"lat": 42.4473703, "lng": -8.8869739, "name": "Playa a Lanzada", "information": `Beach`},
                     {"lat": 42.1243467, "lng": -8.8526107, "name": "Fortaleza de Monterreal", "information": `Historic Fortress`},
                     {"lat": 42.0756328, "lng": -8.82027, "name": "Parque Natura Monte Aloia", "information": `National Park`},
                     {"lat": 42.1210433, "lng": -8.8608116, "name": "Virgen de la Roca", "information": `Historic Landmark`},
                     {"lat": 42.519528, "lng": -8.8166604, "name": "Casa Historica de Cambados", "information": `Historic Building`},
                     {"lat": 42.4072719, "lng": -8.8082417, "name": "Adega Eidos", "information": `Wine Tour`},
                     {"lat": 42.2261474, "lng": -8.7604454, "name": "Vigo", "information": `City`},
                     {"lat": 42.2146123, "lng": -8.9402411, "name": "Islas Cies", "information": `National Park`},
                     {"lat": 43.7157724, "lng": -7.6120183, "name": "Punta de Fucino do Porco", "information": `Hiking Trail`},
                     {"lat": 43.6638419, "lng": -7.5793903, "name": "Mirador de San Roque", "information": 'Hiking Trail'},
                     {"lat": 42.5688749, "lng": -7.5698247, "name": "Pazo de Tor", "information": `Historic Building`},
                     {"lat": 43.7418614, "lng": -7.6746429, "name": "Playa Caolin", "information": `Beach`},
                     {"lat": 43.0091706, "lng": -7.560522, "name": "Catedral de Lugo", "information": `Historic Cathedral`},
                     {"lat": 43.5579687, "lng": -7.1495865, "name": "Illa Pancha", "information": `Coastal Park`},
                     {"lat": 42.7792422, "lng": -7.4149946, "name": "Iglesia San Salvador de Sarria", "information": `Historic Church`},
                     {"lat": 43.0088365, "lng": -7.5613902, "name": "Walled City of Lugo", "information": `Historic Monuments`},
                     {"lat": 43.4281626, "lng": -7.3649017, "name": "Mondonedo Cathedral", "information": `Historic Cathedral`},
                     {"lat": 43.5539341, "lng": -7.1594403, "name": "As Cateidras", "information": `Beach`},
                     {"lat": 42.3504578, "lng": -7.8810302, "name": "Ourense Thermal Springs", "information": `Activities`},
                     {"lat": 42.3054659, "lng": -8.1214467, "name": "Vina Costeira", "information": 'Wine Tour'},
                     {"lat": 42.336349, "lng": -7.8653057, "name": "Catedral de Ourense", "information": `Historic Cathedral`},
                     {"lat": 42.3366432, "lng": -7.8667071, "name": "Juderia de Ribadavia", "information": `Museum`},
                     {"lat": 42.3751761, "lng": -7.499446, "name": "Ruta de las Pasarelas del rio Mao", "information": `Hiking Trail`},
                     {"lat": 42.3959307, "lng": -7.5904972, "name": "Monasterio de Santa Cristina", "information": `Historic Building`},
                     {"lat": 42.2423822, "lng": -6.804821, "name": "Pena Trevinca", "information": `Hiking Trail`},
                     {"lat": 42.4171345, "lng": -7.6882858, "name": "Monastery of Santo Estevo de Ribas de Sil", "information": `Historic Building`},
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


