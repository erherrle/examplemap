let map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat:39.89990757647098, lng:-80.18633566634303 },
		zoom: 18,
		styles:
		[
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#f3f4f4"
            },
            {
                "saturation": -84
            },
            {
                "lightness": 59
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#adc1a8"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#83cead"
            },
            {
                "saturation": 1
            },
            {
                "lightness": -15
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d8f0bb"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#d7e4e4"
            },
            {
                "saturation": -60
            },
            {
                "lightness": 23
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#bbbbbb"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 26
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffcc00"
            },
            {
                "saturation": 100
            },
            {
                "lightness": -22
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f0dbbc"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffcc00"
            },
            {
                "saturation": 100
            },
            {
                "lightness": -35
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dbab6e"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e7e9e8"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#7fc8ed"
            },
            {
                "saturation": 55
            },
            {
                "lightness": -6
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#7fc8ed"
            },
            {
                "saturation": 55
            },
            {
                "lightness": -6
            },
            {
                "visibility": "off"
            }
        ]
    }
]
	});

	const BeeHive = new google.maps.Marker({
		position: { lat:39.89995326938525, lng:-80.18636013988127 },
		map,
		title: "The BeeHive",
		icon: "icons.png"
	});

	new google.maps.Marker({
		position: { lat:39.897587026274316, lng: -80.18774225829195 },
		map,
		title: "home",
		icon: "home.png"
	});

	new google.maps.Marker({
		position: { lat:39.90038626938185,  lng: -80.18793954375852 },
		map,
		title: "Benedum Dining Hall",
		icon: "icons.png"
	});

new google.maps.Marker({
		position: { lat:39.90039610643169,   lng: -80.18632604288385 },
		map,
		title: "West",
		icon: "female.png"
	});

new google.maps.Marker({
		position: { lat:39.900284991332626,    lng: -80.18595589805962 },
		map,
		title: "South",
		icon: "female.png"
	});

new google.maps.Marker({
		position: { lat:39.90038376031847,    lng: -80.18550528696926  },
		map,
		title: "East",
		icon: "female.png"
	});

new google.maps.Marker({
		position: { lat: 39.8992684855812, lng:  -80.18501176053698  },
		map,
		title: "Pollock",
		icon: "female.png"
	});

new google.maps.Marker({
		position: { lat: 39.899511296018076, lng: -80.18421782671112},
		map,
		title: "Thayer",
		icon: "male.png"
	});

new google.maps.Marker({
		position: { lat:39.89734243333214,lng:  -80.18628849195964 },
		map,
		title: "Willison",
		icon: "male.png"
	});

new google.maps.Marker({
		position: { lat:39.89811615313388, lng: -80.18537654094344 },
		map,
		title: "The Nest",
		icon: "nest.png"
	});

new google.maps.Marker({
		position: { lat:39.89991717849254, lng: -80.18787099519355 },
		map,
		title: "Goodwin Performing Arts Center",
		icon: "gpac.png"
	});

new google.maps.Marker({
		position: { lat:39.9003504368044,  lng: -80.18895420774497 },
		map,
		title: "Criminal Justice CSI Center",
		icon: "cj.png"
	});

new google.maps.Marker({
		position: { lat:39.90072707718966, lng: -80.18717538639935  },
		map,
		title: "Roberts Chapel",
		icon: "chapel.png"
	});

new google.maps.Marker({
		position: { lat:39.899875539465484,  lng: -80.18533964273449 },
		map,
		title: "Eberle Library",
		icon: "lib.png"
	});

new google.maps.Marker({
		position: { lat:39.899332405710375, lng:  -80.18545348730021 },
		map,
		title: "Buhl Hall",
		icon: "buhl.png"
	});

new google.maps.Marker({
		position: { lat:39.899493435765116,  lng: -80.18753470826721 },
		map,
		title: "Miller Hall",
		icon: "miller.png"
	});

new google.maps.Marker({
		position: { lat:39.89946887188293, lng:  -80.18704731122024  },
		map,
		title: "Hanna Hall",
		icon: "hanna.png"
	});

new google.maps.Marker({
		position: { lat:39.897995492620616, lng: -80.18662084800114  },
		map,
		title: "Stewart Hall",
		icon: "stew.png"
	});

new google.maps.Marker({
		position: { lat:39.89812420466465, lng:  -80.18757409476993  },
		map,
		title: "Rudy Marisa Field House",
		icon: "rudy.png"
	});

new google.maps.Marker({
		position: { lat:39.89811327733043,  lng: -80.18625345577067  },
		map,
		title: "Center for Research and Economic Development",
		icon: "cred.png"
	});





	const homeCoords = [
    { lat: 39.897613, lng: -80.187790 },
    { lat: 39.897610777446744, lng: -80.18768567914253 },
    { lat: 39.897350126796724, lng: -80.18769666399155},
    { lat: 39.89735193269379, lng: -80.18780023542513 },
    { lat: 39.897613, lng: -80.187790 },
  ];

  const theNest = [
    {lat: 39.8982031743014, lng: -80.18528256249408},
    {lat: 39.89803340961704, lng: -80.1852906091205},
    {lat: 39.89803958288567, lng: -80.18549915085532},
    {lat: 39.89820883311696, lng: -80.18549512754211},
     {lat: 39.8982031743014, lng: -80.18528256249408},

  ];

  const homePolygon = new google.maps.Polygon({
    paths: homeCoords,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 0.35,
  });

  homePolygon.setMap(map);

    const nestPolygon = new google.maps.Polygon({
    paths: theNest,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 0.35,
  });

  nestPolygon.setMap(map);

  const CREDCoords = [
    { lat: 39.89820789567786, lng: -80.1863954019053 },
    { lat: 39.898204677891705, lng:  -80.18609970550332 },
    { lat: 39.89802287272942, lng:  -80.18610389977852 },
    { lat: 39.89802930831865,  lng:  -80.18640588759332 },
    { lat: 39.89820789567786, lng: -80.1863954019053 }
  ];
  const CREDPolygon = new google.maps.Polygon({
    paths: CREDCoords,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 0.35,
  });

  CREDPolygon.setMap(map);

  const cjCoords = [
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    { lat: 39.90030229555674, lng: -80.18875312061515 },
    { lat: 39.900303838822865, lng: -80.1890005543931 },
    { lat: 39.90038357419121, lng: -80.18899988384086 },
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    ];
    const cjHouse = new google.maps.Polygon({
        paths: cjCoords,
        strokeColor: "#c16c18",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 0.35,
    });
    cjHouse.setMap(map);

      const hannaCoords = [
    { lat: 39.899575902129406, lng: -80.18715171790629 },
    { lat: 39.89957230113685, lng: -80.18694183506034 },
    { lat: 39.89937424625455, lng: -80.18694787003034 },
    { lat: 39.89937784725752, lng: -80.18715708232408 },
    { lat: 39.899575902129406, lng: -80.18715171790629 }
  ];

const hannaPolygon = new google.maps.Polygon({
    paths: hannaCoords,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 0.35,
  });

    hannaPolygon.setMap(map);

const eberlyCoords = [

{ lat: 39.90005305490059, lng: -80.18549297214429 },
{ lat: 39.900042602452224, lng: -80.18519237546121 },
{ lat: 39.899704856856225, lng: -80.18517193829295 },
{ lat: 39.89971138966885, lng: -80.18550233917973 },
{ lat: 39.90005305490059, lng: -80.18549297214429 },
];

const eberlyPolygon = new google.maps.Polygon({
    paths: eberlyCoords,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 0.35,
  });

  eberlyPolygon.setMap(map);

  const stewartCoords = [
    { lat: 39.89820313942542, lng: -80.18674222997413 },
    { lat: 39.898196966171525, lng: -80.1864800440406 },
    { lat: 39.8977313983387, lng: -80.1864981489516 },
    { lat: 39.89773808607581, lng: -80.18675966433287 },
    { lat: 39.89820313942542, lng: -80.18674222997413 },
  ];
  // Construct the polygon.
  const stewartpolygon = new google.maps.Polygon({
    paths: stewartCoords,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  stewartpolygon.setMap(map);


const southCoords = [
    { lat: 39.90036605487646, lng: -80.18613153937626 },
    { lat: 39.90036296834702, lng: -80.18572786691594 },
    { lat: 39.90022304553257, lng: -80.18572786691594 },
    { lat: 39.90022407437784, lng: -80.18613556268981 },
    { lat: 39.90036605487646, lng: -80.18613153937626 },
  ];
  // Construct the polygon.
  const southpolygon = new google.maps.Polygon({
    paths: southCoords,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  southpolygon.setMap(map);

const westCoords = [
    { lat: 39.90053787146326, lng: -80.18560984971823 },
    { lat: 39.90053787146326, lng: -80.18542477729457 },
    { lat: 39.900227082463, lng: -80.18542305089767 },
    { lat: 39.90022503189161, lng: -80.1856048100907 },
    { lat: 39.90053787146326, lng: -80.18560984971823 },
  ];
  // Construct the polygon.
  const westpolygon = new google.maps.Polygon({
    paths: westCoords,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  westpolygon.setMap(map);

   const eastCoords = [
    { lat: 39.900556198377956, lng: -80.1864066888825 },
    { lat: 39.90055312253561, lng: -80.1862209202955 },
    { lat: 39.900233234177925, lng: -80.18622893908343 },
    { lat: 39.90023425946349, lng: -80.18641337120577 },
    { lat: 39.900556198377956, lng: -80.1864066888825 },
  ];
  // Construct the polygon.
  const eastpolygon = new google.maps.Polygon({
    paths: eastCoords,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  eastpolygon.setMap(map);

  const willisonCoords = [
  { lat: 39.897538998708136, lng: -80.18620531789718 },
  { lat: 39.897541056479255, lng: -80.18638502589995 },
  { lat: 39.89711509654142, lng: -80.18639307252694 },
  { lat: 39.89711509654142, lng: -80.18621604673316 },
  { lat: 39.897538998708136, lng: -80.18620531789718 }
  ];

  // Construct the polygon.
  const willisonpolygon = new google.maps.Polygon({
    paths: willisonCoords,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

willisonpolygon.setMap(map);

const GpacCoords = [
    { lat: 39.90003, lng: -80.18801},
    { lat: 39.90002, lng: -80.18771},
    { lat: 39.89980, lng: -80.18772},
    { lat: 39.89981, lng: -80.18802},
    { lat: 39.90003, lng: -80.18801} ];

    const GpacPolygon = new google.maps.Polygon({
        paths: GpacCoords,
        strokeColor: "#c16c18",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 0.35,
    });

    GpacPolygon.setMap(map);

    const fieldhouseCoords = [
    { lat: 39.89822129557472, lng: -80.18785727074538 },
    { lat: 39.89821720506465, lng: -80.18727432259585 },
    { lat: 39.89798540909532, lng: -80.18727609987678 },
    { lat: 39.89798677260331, lng: -80.18785904802633 },
    { lat: 39.89822129557472, lng: -80.18785727074538 },

];

    const fieldhousePolygon = new google.maps.Polygon({
        paths: fieldhouseCoords,
        strokeColor: "#c16c18",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 0.35,
    });

    fieldhousePolygon.setMap(map);

    const chapelCoords = [
    { lat: 39.90094412190922, lng: -80.18730816171713 },
    { lat: 39.900937434485016, lng:-80.18702518866414  },
    { lat:39.90050687827982 , lng:-80.18703994081373  },
    { lat: 39.90051099364375, lng: -80.18732090220995 },
    { lat: 39.90094412190922, lng: -80.18730816171713 }
    ];

 const chapelPolygon = new google.maps.Polygon({
        paths: chapelCoords,
        strokeColor: "#c16c18",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 0.35,
    });

    chapelPolygon.setMap(map);

    const wileyCoords = [
    { lat: 39.893254519482745, lng: -80.18153607900841 }, 
    { lat: 39.893179400851224, lng: -80.181416094374 }, 
    { lat: 39.89309323526072, lng: 80.18151016232737 },  
    { lat: 39.89316909044439, lng: -80.18162822720764 },
    { lat: 39.893253783025976, lng: -80.18153770943769 }, 
  ];
  // Construct the polygon.
  const wileyPolygon = new google.maps.Polygon({
    paths: wileyCoords,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });
  wileyPolygon.setMap(map);

  const buhlCoords = [
    { lat: 39.89950052327867, lng:  -80.18525813218855 },
    { lat: 39.89918312042989,  lng: -80.18525947329299 },
    { lat: 39.89918775030372,  lng: -80.1856410175049 },
    { lat: 39.89951184069509,  lng: -80.18563632363939 },
    { lat: 39.89950052327867, lng:  -80.18525813218855 },
  ];
  // Construct the polygon.
  const buhlPolygon = new google.maps.Polygon({
    paths: buhlCoords,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  buhlPolygon.setMap(map);

  const stoverCoords = [
    { lat: 39.90003163229377, lng: -80.18636060763392 },
    { lat: 39.90002443035635, lng: -80.1859676640343   },
    { lat: 39.899761559122695, lng: -80.18597705176535  },
    { lat: 39.8997697899398, lng:  -80.18636463094722  },
    { lat: 39.90003163229377, lng: -80.18636060763392 },
  ];
  // Construct the polygon.
  const stoverPolygon = new google.maps.Polygon({
    paths: stoverCoords,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  stoverPolygon.setMap(map);

   const millerCoords = [
    { lat: 39.89956288108526,  lng: -80.18779706935386 },
    { lat: 39.89956030894722,  lng: -80.18723045274315  },
    { lat: 39.899399807344246, lng:  -80.18722978219094 },
    { lat: 39.899395691913575,  lng: -80.18779908101047 },
    { lat: 39.89956288108526,  lng: -80.18779706935386 },
  ];
  // Construct the polygon.
  const millerPolygon = new google.maps.Polygon({
    paths: millerCoords,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

 millerPolygon.setMap(map);

   const thayerCoords = [
    { lat: 39.899794270109865,  lng: -80.18415814352237 },
    { lat: 39.899222785978154,  lng: -80.18416911622144   },
    { lat: 39.89922465663775,  lng:  -80.1842983502326 },
    { lat: 39.899794270109865,  lng: -80.1842898159111  },
    { lat: 39.899794270109865,  lng: -80.18415814352237 },
  ];
  // Construct the polygon.
  const thayerPolygon = new google.maps.Polygon({
    paths: thayerCoords,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  thayerPolygon.setMap(map);

  const pollockCoords = [
    { lat: 39.89932966350404, lng: -80.18516459443458 }, 
     { lat: 39.89932674703466, lng: -80.18474261889916 }, 
     { lat: 39.89918383988418, lng: -80.18474185858288 }, 
     { lat:39.89918675635962, lng: -80.18516611506715 }, 
    { lat: 39.89932966350404 , lng: -80.18516459443458}
  ];

// Construct the polygon.
  const pollockPolygon = new google.maps.Polygon({
    paths: pollockCoords,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  pollockPolygon.setMap(map);

  const cafeCoords = [
    { lat: 39.90058997069641,  lng: -80.18815556865312 }, 
     { lat: 39.90057453809819,  lng: -80.18770361646895 }, 
     { lat: 39.90018820759037,  lng: -80.18772574469162 }, 
     { lat:39.90020364027558,  lng: -80.18817970853237 }, 
     { lat: 39.90058997069641,  lng: -80.18815556865312 },
  ];

// Construct the polygon.
  const cafePolygon = new google.maps.Polygon({
    paths: cafeCoords,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  cafePolygon.setMap(map);




const infowindow  = new google.maps.InfoWindow({
    content: "The Beehive",
  });
 BeeHive.addListener("click", () => {
    infowindow.open({
      anchor: BeeHive,
      map,
      shouldFocus: false,
    });
  });

}
