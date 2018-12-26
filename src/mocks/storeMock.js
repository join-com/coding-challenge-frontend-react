const globalStateMock = {
  ui: {
    isLoading: false,
    currentPage: 0,
    searchValue: "",
    error: null,
    itemsPerPage: 10
  },
  incidents: {
    "3522": {
      id: 3522,
      title: "Stolen 2012 Cannondale Caad8 7 Sora (black and white)",
      description: "Stolen during the day from yard bike stands between three offices in front of restaurant.",
      address: "Berlin, 10115, DE",
      occurred_at: 1408341600,
      updated_at: 1545696488,
      url: "https://bikewise.org/api/v1/incidents/3522",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/30054",
        api_url: "https://bikeindex.org/api/v1/bikes/30054"
      },
      media: {
        image_url: "https://bikebook.s3.amazonaws.com/uploads/Fr/9764/c_13_3RA87C_gry_14.png",
        image_url_thumb: "https://bikebook.s3.amazonaws.com/uploads/Fr/9764/small_c_13_3RA87C_gry_14.png"
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "4853": {
      id: 4853,
      title: "Stolen 2005 Trek 4300 Disc (silver or gray)",
      description:
        "Bike was parked in a locked cellar compartment. During night the door of the compartment was forced open and two bikes were stolen: Trek 4300 Disc and Trek Fuel Ex 8.",
      address: "Halle, 06120, DE",
      occurred_at: 1410760800,
      updated_at: 1545696460,
      url: "https://bikewise.org/api/v1/incidents/4853",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/32153",
        api_url: "https://bikeindex.org/api/v1/bikes/32153"
      },
      media: {
        image_url: "https://bikebook.s3.amazonaws.com/uploads/Fr/112/Asset_140338",
        image_url_thumb: "https://bikebook.s3.amazonaws.com/uploads/Fr/112/small_Asset_140338"
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "4879": {
      id: 4879,
      title: "Stolen 2014 Trek Fuel EX 8 26 (black)",
      description:
        "Bike was parked in a locked cellar compartment. During night the door of the comparment was forced open and two bikes wer stolen: Trek Fuel EX 8 and Trek 4300 Disc. ",
      address: "Halle, 06120, DE",
      occurred_at: 1410760800,
      updated_at: 1545696460,
      url: "https://bikewise.org/api/v1/incidents/4879",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/32155",
        api_url: "https://bikeindex.org/api/v1/bikes/32155"
      },
      media: {
        image_url: "https://bikebook.s3.amazonaws.com/uploads/Fr/112/Asset_140338",
        image_url_thumb: "https://bikebook.s3.amazonaws.com/uploads/Fr/112/small_Asset_140338"
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "24134": {
      id: 24134,
      title: "Stolen di Florino (red and white)",
      description: "",
      address: "Berlin, 10245, DE",
      occurred_at: 1402984800,
      updated_at: 1545698411,
      url: "https://bikewise.org/api/v1/incidents/24134",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/27159",
        api_url: "https://bikeindex.org/api/v1/bikes/27159"
      },
      media: {
        image_url: "https://bikeindex.s3.amazonaws.com/uploads/Pu/9564/large_dsc_1293.jpg",
        image_url_thumb: "https://bikeindex.s3.amazonaws.com/uploads/Pu/9564/small_dsc_1293.jpg"
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "43312": {
      id: 43312,
      title: "Stolen 2014 Cannondale Caad 8 105 (black)",
      description: "",
      address: "Berlin, 10115, DE",
      occurred_at: 1422597600,
      updated_at: 1545698848,
      url: "https://bikewise.org/api/v1/incidents/43312",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/39491",
        api_url: "https://bikeindex.org/api/v1/bikes/39491"
      },
      media: {
        image_url: null,
        image_url_thumb: null
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "46809": {
      id: 46809,
      title: "Stolen 2015 Marin Bikes Fairfax SC6 DLX(black)",
      description: "",
      address: "Berlin, 10435, DE",
      occurred_at: 1433916000,
      updated_at: 1545699018,
      url: "https://bikewise.org/api/v1/incidents/46809",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/47880",
        api_url: "https://bikeindex.org/api/v1/bikes/47880"
      },
      media: {
        image_url: null,
        image_url_thumb: null
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "51760": {
      id: 51760,
      title: "Stolen 2015 Bianchi Via Nirone Alu 105 11sp Compact(black)",
      description: "",
      address: "Leipzig, 04229, DE",
      occurred_at: 1444716000,
      updated_at: 1545699239,
      url: "https://bikewise.org/api/v1/incidents/51760",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/60559",
        api_url: "https://bikeindex.org/api/v1/bikes/60559"
      },
      media: {
        image_url: "https://files.bikeindex.org/uploads/Pu/37636/large_IMG_3986.jpg",
        image_url_thumb: "https://files.bikeindex.org/uploads/Pu/37636/small_IMG_3986.jpg"
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "57471": {
      id: 57471,
      title: "Stolen 2015 Cannondale Supersix Evo(silver or gray and red)",
      description: "",
      address: "Berlin, 10249, DE",
      occurred_at: 1460872800,
      updated_at: 1545699639,
      url: "https://bikewise.org/api/v1/incidents/57471",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/73861",
        api_url: "https://bikeindex.org/api/v1/bikes/73861"
      },
      media: {
        image_url: "https://files.bikeindex.org/uploads/Pu/51340/large_IMG_3766.JPG",
        image_url_thumb: "https://files.bikeindex.org/uploads/Pu/51340/small_IMG_3766.JPG"
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "58724": {
      id: 58724,
      title: "Stolen Diamant(black)",
      description: "",
      address: "Leipzig, 04275, DE",
      occurred_at: 1462687200,
      updated_at: 1545699650,
      url: "https://bikewise.org/api/v1/incidents/58724",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/78033",
        api_url: "https://bikeindex.org/api/v1/bikes/78033"
      },
      media: {
        image_url: null,
        image_url_thumb: null
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "65604": {
      id: 65604,
      title:
        "Stolen 2016 Cube Aluminium 6061 T6 Superlight, AMF, Double Butted, Smooth Welded, 3D Dropouts, Road Comfort Geometry(blue and black)",
      description: "",
      address: "Berlin, 13599, DE",
      occurred_at: 1476943200,
      updated_at: 1545700000,
      url: "https://bikewise.org/api/v1/incidents/65604",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/101488",
        api_url: "https://bikeindex.org/api/v1/bikes/101488"
      },
      media: {
        image_url: "https://files.bikeindex.org/uploads/Pu/70677/large_IMG_2417.JPG",
        image_url_thumb: "https://files.bikeindex.org/uploads/Pu/70677/small_IMG_2417.JPG"
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "68100": {
      id: 68100,
      title: "Stolen Create The Coaster(black)",
      description: "",
      address: "Berlin, 12437, DE",
      occurred_at: 1482818400,
      updated_at: 1545700111,
      url: "https://bikewise.org/api/v1/incidents/68100",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/107287",
        api_url: "https://bikeindex.org/api/v1/bikes/107287"
      },
      media: {
        image_url: "https://files.bikeindex.org/uploads/Pu/75003/large_IMG_8353.JPG",
        image_url_thumb: "https://files.bikeindex.org/uploads/Pu/75003/small_IMG_8353.JPG"
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "72790": {
      id: 72790,
      title: "Stolen 2014 Flyer Wave(silver or gray)",
      description:
        "having seen a man interested in this e-bike, but hurrying away, when I came out of the house. 20 later the bike has gone.",
      address: "Berlin, 10779, DE",
      occurred_at: 1495692000,
      updated_at: 1545700387,
      url: "https://bikewise.org/api/v1/incidents/72790",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/121203",
        api_url: "https://bikeindex.org/api/v1/bikes/121203"
      },
      media: {
        image_url: null,
        image_url_thumb: null
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "76058": {
      id: 76058,
      title: "Stolen 2015 Carrera bicycles Virtuoso(white)",
      description:
        "The bicycle was stolen in bright daylight on Hegelplatz behind the Humboldt University Berlin on 2nd August 2017 between 1:30 and 5:30 pm. ",
      address: "Berlin, 10099, DE",
      occurred_at: 1501740000,
      updated_at: 1545700561,
      url: "https://bikewise.org/api/v1/incidents/76058",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/351525",
        api_url: "https://bikeindex.org/api/v1/bikes/351525"
      },
      media: {
        image_url: "https://files.bikeindex.org/uploads/Pu/93377/large_IMG-20170512-WA0011_1__2_.jpg",
        image_url_thumb: "https://files.bikeindex.org/uploads/Pu/93377/small_IMG-20170512-WA0011_1__2_.jpg"
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "77832": {
      id: 77832,
      title: "Stolen 2017 Surly Cross-Check(black)",
      description:
        "Bike was left in a hof (courtyard) for 45 minutes, with a cable lock attaching the front wheel to the frame and a folding Abus lock attaching the frame to a fence. The bike and cable lock were removed and the folding lock was left in place, locked.",
      address: "Berlin, 10997, DE",
      occurred_at: 1504936800,
      updated_at: 1545700661,
      url: "https://bikewise.org/api/v1/incidents/77832",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/360966",
        api_url: "https://bikeindex.org/api/v1/bikes/360966"
      },
      media: {
        image_url: "https://files.bikeindex.org/uploads/Pu/98933/large_surly_crosscheckcropped.jpg",
        image_url_thumb: "https://files.bikeindex.org/uploads/Pu/98933/small_surly_crosscheckcropped.jpg"
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "80968": {
      id: 80968,
      title: "Stolen 2017 Merida Bikes(black and blue)",
      description: "",
      address: "Waren, 17192, DE",
      occurred_at: 1511330400,
      updated_at: 1545700838,
      url: "https://bikewise.org/api/v1/incidents/80968",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/377897",
        api_url: "https://bikeindex.org/api/v1/bikes/377897"
      },
      media: {
        image_url: "https://files.bikeindex.org/uploads/Pu/105861/large_FullSizeRender.jpg",
        image_url_thumb: "https://files.bikeindex.org/uploads/Pu/105861/small_FullSizeRender.jpg"
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "82936": {
      id: 82936,
      title:
        "Stolen 2017 Cannondale CAAD12 Disc, SmartForm C1 Premium Alloy, SPEED SAVE, BB30a, Di2 Ready, flat-mount disc(black and blue)",
      description: "",
      address: "Berlin, 13086, DE",
      occurred_at: 1518242400,
      updated_at: 1545700945,
      url: "https://bikewise.org/api/v1/incidents/82936",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/385425",
        api_url: "https://bikeindex.org/api/v1/bikes/385425"
      },
      media: {
        image_url:
          "https://files.bikeindex.org/uploads/Pu/112133/large_27709588_1782480685106226_4475511125443073991_o.jpg",
        image_url_thumb:
          "https://files.bikeindex.org/uploads/Pu/112133/small_27709588_1782480685106226_4475511125443073991_o.jpg"
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "83616": {
      id: 83616,
      title: "Stolen Unity MTB Unity 18´´(silver or gray)",
      description: null,
      address: "Berlin, 13585, DE",
      occurred_at: 1522427812,
      updated_at: 1545700977,
      url: "https://bikewise.org/api/v1/incidents/83616",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/387604",
        api_url: "https://bikeindex.org/api/v1/bikes/387604"
      },
      media: {
        image_url: "https://files.bikeindex.org/uploads/Pu/113637/large_Screenshot_2018-03-30-11-55-03.png",
        image_url_thumb: "https://files.bikeindex.org/uploads/Pu/113637/small_Screenshot_2018-03-30-11-55-03.png"
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "83629": {
      id: 83629,
      title: 'Stolen 2015 Pegasus Solero SL, Damen 28", 50 cm frame(black)',
      description: "",
      address: "Berlin, 10407, DE",
      occurred_at: 1522130400,
      updated_at: 1545700950,
      url: "https://bikewise.org/api/v1/incidents/83629",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/387620",
        api_url: "https://bikeindex.org/api/v1/bikes/387620"
      },
      media: {
        image_url: null,
        image_url_thumb: null
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "85493": {
      id: 85493,
      title: "Stolen City Cruiser(blue)",
      description: "",
      address: "Leipzig, 02479, DE",
      occurred_at: 1526709600,
      updated_at: 1545701032,
      url: "https://bikewise.org/api/v1/incidents/85493",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/393615",
        api_url: "https://bikeindex.org/api/v1/bikes/393615"
      },
      media: {
        image_url: "https://files.bikeindex.org/uploads/Pu/118427/large_IMG_2037.JPG",
        image_url_thumb: "https://files.bikeindex.org/uploads/Pu/118427/small_IMG_2037.JPG"
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "88377": {
      id: 88377,
      title: "Stolen 2018 VAUN VELO(black)",
      description: "Stolen from my courtyard",
      address: "Berlin, 12047, DE",
      occurred_at: 1532152800,
      updated_at: 1545701190,
      url: "https://bikewise.org/api/v1/incidents/88377",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/403765",
        api_url: "https://bikeindex.org/api/v1/bikes/403765"
      },
      media: {
        image_url: null,
        image_url_thumb: null
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "92457": {
      id: 92457,
      title: "Stolen ROCKRIDER black-grey(black and blue)",
      description: null,
      address: "Berlin, 10999, DE",
      occurred_at: 1538931327,
      updated_at: 1545701404,
      url: "https://bikewise.org/api/v1/incidents/92457",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/439032",
        api_url: "https://bikeindex.org/api/v1/bikes/439032"
      },
      media: {
        image_url: null,
        image_url_thumb: null
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "93593": {
      id: 93593,
      title: "Stolen 2018 UNIMOKE-Urban Drivestyle UNIMOKE Swing(black)",
      description:
        "someone broke into the house, cut the wooden railings beside the stairs that my bike was locked to.",
      address: "Berlin, 10405, DE",
      occurred_at: 1540929600,
      updated_at: 1545701569,
      url: "https://bikewise.org/api/v1/incidents/93593",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/458285",
        api_url: "https://bikeindex.org/api/v1/bikes/458285"
      },
      media: {
        image_url: "https://files.bikeindex.org/uploads/Pu/139855/large_bike-3.jpg",
        image_url_thumb: "https://files.bikeindex.org/uploads/Pu/139855/small_bike-3.jpg"
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    },
    "94547": {
      id: 94547,
      title: "Stolen 2015 Gepida Alboin crs 500(silver, gray or bare metal)",
      description:
        "Locked cellar in Warthestrasse 8, Kryptonite U-lock with cable both tyres locked to frame. Someone got in and took the whole thing as well as forced some storage doors open. ",
      address: "Berlin, 12051, DE",
      occurred_at: 1543309200,
      updated_at: 1545701583,
      url: "https://bikewise.org/api/v1/incidents/94547",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/480323",
        api_url: "https://bikeindex.org/api/v1/bikes/480323"
      },
      media: {
        image_url: null,
        image_url_thumb: null
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null
    }
  }
};

export default globalStateMock;
