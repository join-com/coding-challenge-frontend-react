const globalStateMock = {
  ui: {
    isLoading: false,
    currentPage: 0,
    searchValue: "",
    error: null,
    itemsPerPage: 2
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
    }
  }
};

export default globalStateMock;
