import React from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Filters from './components/filters/Filters.js';
import Cases from './components/cases/Cases.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cases: [
        {
          "id": 113006,
          "title": "Stolen 2017 Genesis Croix de fer 20 (frame: Reynolds 725)(blue)",
          "description": "The bike was chained to a bicycle rack in our inner courtyard. I last saw it on the afternoon of 30th January. My downstairs neighbours can confirm that it was still there around 4:15pm. When I wanted to ride it to work the next morning at 7:30pm, it was gone (along with the lock).",
          "address": "Berlin, 10437, DE",
          "occurred_at": 1580425200,
          "updated_at": 1581984057,
          "url": "https://bikewise.org/api/v1/incidents/113006",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/691028",
            "api_url": "https://bikeindex.org/api/v1/bikes/691028"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/219203/large_croixdefer.jpg",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/219203/small_croixdefer.jpg"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 112697,
          "title": "Stolen 2017 BULLS Bikes Copperhead 3 RS(black)",
          "description": "",
          "address": "Neubrandenburg, 17033, DE",
          "occurred_at": 1579978800,
          "updated_at": 1581984068,
          "url": "https://bikewise.org/api/v1/incidents/112697",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/689044",
            "api_url": "https://bikeindex.org/api/v1/bikes/689044"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/217889/large_Bulls_Copperhead_3_RS.jpg",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/217889/small_Bulls_Copperhead_3_RS.jpg"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 111642,
          "title": "Stolen 2017 vortex City bike Herren(black)",
          "description": "",
          "address": "Berlin, 12161, DE",
          "occurred_at": 1576949068,
          "updated_at": 1581984120,
          "url": "https://bikewise.org/api/v1/incidents/111642",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/681640",
            "api_url": "https://bikeindex.org/api/v1/bikes/681640"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/211943/large_DSC_0340.JPG",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/211943/small_DSC_0340.JPG"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 109462,
          "title": "Stolen 2017 State Bicycle Co. Matte Black 5 - 59 Core Line: Fixed Gear(black)",
          "description": null,
          "address": "Berlin, 10963, DE",
          "occurred_at": 1571918301,
          "updated_at": 1579824198,
          "url": "https://bikewise.org/api/v1/incidents/109462",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/669448",
            "api_url": "https://bikeindex.org/api/v1/bikes/669448"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/196548/large_Bike01.png",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/196548/small_Bike01.png"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 108624,
          "title": "Stolen Unknown tricycle(black)",
          "description": "",
          "address": "Berlin, 10317, DE",
          "occurred_at": 1570539600,
          "updated_at": 1577566997,
          "url": "https://bikewise.org/api/v1/incidents/108624",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/664168",
            "api_url": "https://bikeindex.org/api/v1/bikes/664168"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/191223/large_4EA7A795-F153-43E4-BDB6-51A76EA108B8.jpeg",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/191223/small_4EA7A795-F153-43E4-BDB6-51A76EA108B8.jpeg"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 107168,
          "title": "Stolen 2019 Cube Fullsuspension(black and blue)",
          "description": "",
          "address": "Leipzig, 04129, DE",
          "occurred_at": 1568304000,
          "updated_at": 1573743798,
          "url": "https://bikewise.org/api/v1/incidents/107168",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/656021",
            "api_url": "https://bikeindex.org/api/v1/bikes/656021"
          },
          "media": {
            "image_url": null,
            "image_url_thumb": null
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 106292,
          "title": "Stolen 2016 GT Bicycles Karakoram Comp 29(black)",
          "description": "Bike was simply stolen within an hour while having dinner. It was locked just outside the Südstern UBahn station in Berlin",
          "address": "Berlin, 10999, DE",
          "occurred_at": 1567015200,
          "updated_at": 1571929396,
          "url": "https://bikewise.org/api/v1/incidents/106292",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/649349",
            "api_url": "https://bikeindex.org/api/v1/bikes/649349"
          },
          "media": {
            "image_url": null,
            "image_url_thumb": null
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 105611,
          "title": "Stolen 2019 Diamant Elan Legere Sport Aluminum(black)",
          "description": "",
          "address": "Halle, 06122, DE",
          "occurred_at": 1566050400,
          "updated_at": 1570892596,
          "url": "https://bikewise.org/api/v1/incidents/105611",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/644085",
            "api_url": "https://bikeindex.org/api/v1/bikes/644085"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/177695/large_bici_Mari.jpg",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/177695/small_bici_Mari.jpg"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 105610,
          "title": "Stolen 2019 Raleigh Rushhour 1.0. Trekking 1.6, Aluminium(blue)",
          "description": "Thieves broke in the building and stole our bikes. ",
          "address": "Halle, 06122, DE",
          "occurred_at": 1565816400,
          "updated_at": 1570557797,
          "url": "https://bikewise.org/api/v1/incidents/105610",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/644082",
            "api_url": "https://bikeindex.org/api/v1/bikes/644082"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/177692/large_bici_Pa_l.jpg",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/177692/small_bici_Pa_l.jpg"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 106590,
          "title": "Stolen 2017 Pegasus Opero SL, Wave(black and silver, gray or bare metal)",
          "description": "",
          "address": "Berlin, 10713, DE",
          "occurred_at": 1563962400,
          "updated_at": 1568829742,
          "url": "https://bikewise.org/api/v1/incidents/106590",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/651447",
            "api_url": "https://bikeindex.org/api/v1/bikes/651447"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/182035/large_21621-1.jpg",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/182035/small_21621-1.jpg"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 104057,
          "title": "Stolen 2018 Intec M05(green)",
          "description": "",
          "address": "Berlin, 10961, DE",
          "occurred_at": 1563649200,
          "updated_at": 1568746491,
          "url": "https://bikewise.org/api/v1/incidents/104057",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/634338",
            "api_url": "https://bikeindex.org/api/v1/bikes/634338"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/171073/large_IntecM05.png",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/171073/small_IntecM05.png"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 104788,
          "title": "Stolen Peugeot Ventoux PE300(red and black)",
          "description": "",
          "address": "Berlin, 10969, DE",
          "occurred_at": 1560283200,
          "updated_at": 1568747364,
          "url": "https://bikewise.org/api/v1/incidents/104788",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/637533",
            "api_url": "https://bikeindex.org/api/v1/bikes/637533"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/173545/large_MuN--Dll.jpeg",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/173545/small_MuN--Dll.jpeg"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 99362,
          "title": "Stolen 2016 Cube Analog(blue)",
          "description": "There were the 2 bikes I owned parked adjacent to each other and with 1 cable lock I locked the 2 bikes together and with another cable lock I locked the bike ,which was stolen, to the bike parking station bar in the courtyard of my apartment. I came back home at about 12:30 pm on 25.04.2019 and checked the bikes and found out the incident. The thief(s) cut off the cable locks and took only 1 of the bikes and left the 2nd bike.",
          "address": "Berlin, 10827, DE",
          "occurred_at": 1556179200,
          "updated_at": 1568740465,
          "url": "https://bikewise.org/api/v1/incidents/99362",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/603410",
            "api_url": "https://bikeindex.org/api/v1/bikes/603410"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/153579/large_WhatsApp_Image_2019-04-25_at_14.01.49.jpeg",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/153579/small_WhatsApp_Image_2019-04-25_at_14.01.49.jpeg"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 98720,
          "title": "Stolen 2017 Riese und Müller Charger GS Nuvinci(white)",
          "description": null,
          "address": "Berlin, 10559, DE",
          "occurred_at": 1554984394,
          "updated_at": 1568739409,
          "url": "https://bikewise.org/api/v1/incidents/98720",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/600502",
            "api_url": "https://bikeindex.org/api/v1/bikes/600502"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/151809/large_IMG_3862.jpg",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/151809/small_IMG_3862.jpg"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 98486,
          "title": "Stolen 2019 Flyer Upstreet 4(black)",
          "description": "Stolen during nighttime from the house's closed yard.",
          "address": "Berlin, 13353, DE",
          "occurred_at": 1554328800,
          "updated_at": 1568739093,
          "url": "https://bikewise.org/api/v1/incidents/98486",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/599290",
            "api_url": "https://bikeindex.org/api/v1/bikes/599290"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/151183/large_upstreet-4-7-10-diamant-404900466_large.png",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/151183/small_upstreet-4-7-10-diamant-404900466_large.png"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 98451,
          "title": "Stolen 2010 Trek Superfly(black and white)",
          "description": "",
          "address": "Berlin, 10787, DE",
          "occurred_at": 1552554840,
          "updated_at": 1568739055,
          "url": "https://bikewise.org/api/v1/incidents/98451",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/599141",
            "api_url": "https://bikeindex.org/api/v1/bikes/599141"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/151095/large_IMG-20110221-00015.jpg",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/151095/small_IMG-20110221-00015.jpg"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 97572,
          "title": "Stolen 2018 Cannondale CaadX Tiagra 58(red and black)",
          "description": null,
          "address": "Berlin, 10435, DE",
          "occurred_at": 1552325609,
          "updated_at": 1568737315,
          "url": "https://bikewise.org/api/v1/incidents/97572",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/595698",
            "api_url": "https://bikeindex.org/api/v1/bikes/595698"
          },
          "media": {
            "image_url": null,
            "image_url_thumb": null
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 97530,
          "title": "Stolen 2017 Canyon bicycles Inflite AL 9.0S(green)",
          "description": "Bike was locked to a bike rack with an \"Asus Bordo Granit X-Plus\" lock. After two hours in the gym, it was gone, no trace left. The rack was a bit loose in the ground, it's possible that the thieves tried to pull it out, but failed due to the concrete foundation.",
          "address": "Berlin, 10117, DE",
          "occurred_at": 1552140000,
          "updated_at": 1568737257,
          "url": "https://bikewise.org/api/v1/incidents/97530",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/595545",
            "api_url": "https://bikeindex.org/api/v1/bikes/595545"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/148912/large_IMG_20170705_191324.jpg",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/148912/small_IMG_20170705_191324.jpg"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 94547,
          "title": "Stolen 2015 Gepida Alboin crs 500(silver, gray or bare metal)",
          "description": "Locked cellar in Warthestrasse 8, Kryptonite U-lock with cable both tyres locked to frame. Someone got in and took the whole thing as well as forced some storage doors open. ",
          "address": "Berlin, 12051, DE",
          "occurred_at": 1543309200,
          "updated_at": 1568731894,
          "url": "https://bikewise.org/api/v1/incidents/94547",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/480323",
            "api_url": "https://bikeindex.org/api/v1/bikes/480323"
          },
          "media": {
            "image_url": null,
            "image_url_thumb": null
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 93593,
          "title": "Stolen 2018 UNIMOKE-Urban Drivestyle UNIMOKE Swing(black)",
          "description": "someone broke into the house, cut the wooden railings beside the stairs that my bike was locked to.",
          "address": "Berlin, 10405, DE",
          "occurred_at": 1540929600,
          "updated_at": 1568730354,
          "url": "https://bikewise.org/api/v1/incidents/93593",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/458285",
            "api_url": "https://bikeindex.org/api/v1/bikes/458285"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/139855/large_bike-3.jpg",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/139855/small_bike-3.jpg"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 92457,
          "title": "Stolen ROCKRIDER black-grey(black and blue)",
          "description": null,
          "address": "Berlin, 10999, DE",
          "occurred_at": 1538931327,
          "updated_at": 1568728628,
          "url": "https://bikewise.org/api/v1/incidents/92457",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/439032",
            "api_url": "https://bikeindex.org/api/v1/bikes/439032"
          },
          "media": {
            "image_url": null,
            "image_url_thumb": null
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 88377,
          "title": "Stolen 2018 VAUN VELO(black)",
          "description": "Stolen from my courtyard",
          "address": "Berlin, 12047, DE",
          "occurred_at": 1532152800,
          "updated_at": 1568722948,
          "url": "https://bikewise.org/api/v1/incidents/88377",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/403765",
            "api_url": "https://bikeindex.org/api/v1/bikes/403765"
          },
          "media": {
            "image_url": null,
            "image_url_thumb": null
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 85493,
          "title": "Stolen City Cruiser(blue)",
          "description": "",
          "address": "Leipzig, 02479, DE",
          "occurred_at": 1526709600,
          "updated_at": 1568718985,
          "url": "https://bikewise.org/api/v1/incidents/85493",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/393615",
            "api_url": "https://bikeindex.org/api/v1/bikes/393615"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/118427/large_IMG_2037.JPG",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/118427/small_IMG_2037.JPG"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 83616,
          "title": "Stolen Unity MTB Unity 18´´(silver or gray)",
          "description": null,
          "address": "Berlin, 13585, DE",
          "occurred_at": 1522427812,
          "updated_at": 1568716161,
          "url": "https://bikewise.org/api/v1/incidents/83616",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/387604",
            "api_url": "https://bikeindex.org/api/v1/bikes/387604"
          },
          "media": {
            "image_url": "https://files.bikeindex.org/uploads/Pu/113637/large_Screenshot_2018-03-30-11-55-03.png",
            "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/113637/small_Screenshot_2018-03-30-11-55-03.png"
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        },
        {
          "id": 83629,
          "title": "Stolen 2015 Pegasus Solero SL, Damen 28\", 50 cm frame(black)",
          "description": "",
          "address": "Berlin, 10407, DE",
          "occurred_at": 1522130400,
          "updated_at": 1568716166,
          "url": "https://bikewise.org/api/v1/incidents/83629",
          "source": {
            "name": "BikeIndex.org",
            "html_url": "https://bikeindex.org/bikes/387620",
            "api_url": "https://bikeindex.org/api/v1/bikes/387620"
          },
          "media": {
            "image_url": null,
            "image_url_thumb": null
          },
          "location_type": null,
          "location_description": null,
          "type": "Theft",
          "type_properties": null
        }
      ],
      loading: false,
    };
  }

  render() {
    return (
      <section className="container">
        <Header />
        <Filters />
        <Cases cases={this.state.cases} loading={this.state.loading}/>
      </section>
    )
  };
};
