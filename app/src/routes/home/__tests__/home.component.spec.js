/* eslint-disable max-len */
/* eslint-disable camelcase */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Immutable from 'seamless-immutable';
import { Home } from '../home.component';
import { DEFAULT_LOCALE } from '../../../i18n';

describe('Home: Component', () => {
  const defaultProps = {
    loadList: () => {},
    selectBikeInfo: () => {},
    items: Immutable([{ id: 1 }, { id: 2 }, { id: 3 }]),
    intl: { formatMessage: ({ id }) => id },
    language: DEFAULT_LOCALE,
    list: [
      {
        id: 102865,
        title: 'Bicycles: Racks, Bike Share, Lanes, Other',
        description: 'Abandoned bicycle has been vandalized. Please remove from cemetery fence and dispose.',
        address: '435 Newark Ave Jersey City 07306, United States',
        occurred_at: 1561851185,
        updated_at: 1561858426,
        url: 'https://bikewise.org/api/v1/incidents/102865',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/6113933',
          api_url: 'https://seeclickfix.com/api/v2/issues/6113933',
        },
        media: {
          image_url: 'https://seeclickfix.com/files/issue_images/0140/4968/image.jpg',
          image_url_thumb: 'https://seeclickfix.com/files/issue_images/0140/4968/image_square.jpg',
        },
        location_type: null,
        location_description: null,
        type: 'Unconfirmed',
        type_properties: null,
      },
      {
        id: 102862,
        title: 'Sign Maintenance',
        description:
          'Signs in the curve on Old Spanish trail near the turn to Freeman road, north of the entrance to Saguaro National Park East. Turn arrow sign and bike lane sign were completely taken out and need to be replaced. ',
        address: 'S Freeman Rd & E Old Spanish Trl Tucson, AZ, 85730, USA',
        occurred_at: 1561846178,
        updated_at: 1561854828,
        url: 'https://bikewise.org/api/v1/incidents/102862',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/6113805',
          api_url: 'https://seeclickfix.com/api/v2/issues/6113805',
        },
        media: {
          image_url: 'https://seeclickfix.com/files/issue_images/0140/4898/IMG_0048_5B1_5D.JPG',
          image_url_thumb: 'https://seeclickfix.com/files/issue_images/0140/4898/IMG_0048_5B1_5D_square.JPG',
        },
        location_type: null,
        location_description: null,
        type: 'Unconfirmed',
        type_properties: null,
      },
      {
        id: 102859,
        title: 'Other City Services',
        description:
          'On Alice St, between 4th & 5th, an illegal encampment is starting to form.   This is how it starts - person crashed out on sidewalk.  Trash begins to accumulate.   Tents pop up.   Stolen shopping cart & bikes & garbage bins round out the look.  Sidewalk gets rancid smell of urine.\nThis person needs to be removed.  \nNot looking forward to watching this transform into the messes on Madison, Jackson & Oak under 880. ',
        address: '425 Alice St Oakland 94607, United States',
        occurred_at: 1561844243,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102859',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/6113747',
          api_url: 'https://seeclickfix.com/api/v2/issues/6113747',
        },
        media: {
          image_url: 'https://seeclickfix.com/files/issue_images/0140/4868/image.jpg',
          image_url_thumb: 'https://seeclickfix.com/files/issue_images/0140/4868/image_square.jpg',
        },
        location_type: null,
        location_description: null,
        type: 'Unconfirmed',
        type_properties: null,
      },
      {
        id: 102860,
        title: 'Traffic Safety (non-emergency)',
        description:
          'Piles of dirt on the road causing cars and bicycles to swerve into the oncoming traffic around a blind corner. OakDOT crews came through a few days ago and left piles of dirt on Skyline Blvd. northbound between Shepherd Canyon and Colton. These piles are largely concentrated around blind corners causing a major traffic safety issue. ',
        address: '7594–8192 Skyline Blvd Oakland 94611, United States',
        occurred_at: 1561843567,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102860',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/6113724',
          api_url: 'https://seeclickfix.com/api/v2/issues/6113724',
        },
        media: {
          image_url: null,
          image_url_thumb: null,
        },
        location_type: null,
        location_description: null,
        type: 'Hazard',
        type_properties: null,
      },
      {
        id: 102861,
        title: 'uneven driving lanes',
        description:
          'Intersection of Winchester Road in Riverdale Road requires attention due to recent lane shifts due to useless added bike lanes. Intersection is an accident waiting to happen as a result. When crossing over Winchester on Riverdale, drivers almost collide due to sudden lane shift in both directions. Please have this issue corrected. If nothing else, install lane hash marks in the intersection as a a guide and inform whomever is in charge that he or she messed up the intersection.  \nAdults must admit that when growing up, parents told kids to stay out of the street. Now city/ government officials today have taken it to another level and and deem it safe to do. I say "Don\'t fall" and hope drivers actually miss plowing down a bike rider from behind. Crazy !!!!  ',
        address: '6999 Winchester Rd Memphis, TN, 38125, USA',
        occurred_at: 1561843268,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102861',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/6113710',
          api_url: 'https://seeclickfix.com/api/v2/issues/6113710',
        },
        media: {
          image_url: null,
          image_url_thumb: null,
        },
        location_type: null,
        location_description: null,
        type: 'Hazard',
        type_properties: null,
      },
      {
        id: 102856,
        title: 'Stolen 2018 Giant Giant Advanced Defy 3 2018(black)',
        description: '',
        address: 'Huntington Beach, CA, 92646',
        occurred_at: 1561842000,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102856',
        source: {
          name: 'BikeIndex.org',
          html_url: 'https://bikeindex.org/bikes/626799',
          api_url: 'https://bikeindex.org/api/v1/bikes/626799',
        },
        media: {
          image_url: null,
          image_url_thumb: null,
        },
        location_type: null,
        location_description: null,
        type: 'Theft',
        type_properties: null,
      },
      {
        id: 102857,
        title: 'Regional/Community Parks',
        description:
          'Park rangers would rather sit in the john deer gater ay entrance yelling at people for not using crosswalk. insted of inforcing park rules such as drinking on the beach and riding bikes on trails ( my child was almost hit) with clearly posted signs prohibiting it. Would like these issues be fixed or close the park back down.',
        address: '1200-1298 Triton Beach Rd Edgewater, MD, 21037, USA',
        occurred_at: 1561841945,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102857',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/6113668',
          api_url: 'https://seeclickfix.com/api/v2/issues/6113668',
        },
        media: {
          image_url: null,
          image_url_thumb: null,
        },
        location_type: null,
        location_description: null,
        type: 'Hazard',
        type_properties: null,
      },
      {
        id: 102858,
        title: 'Parking in and partially in no parking areas',
        description:
          'There are almost always multiple cars parked completely or partially in the no parking zones in the areas adjacent to the new bike lane on the south side of park Ave. I see them in the stretch between Deering Ave and state Street. The limited visibility due to cars, even when they are parked correctly, makes this bike lane extremely dangerous when cars are turning right (or left) into driveways and streets. It becomes a death trap when cars are parked in, or partially in the no parking areas. This area needs a lot more consistent enforcement.\n\nI called the police non-emergency number, but I wanted to make sure that the message got through to the regular parking enforcement team.',
        address: '132 Park Ave Portland, ME 04101, USA',
        occurred_at: 1561841292,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102858',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/6113640',
          api_url: 'https://seeclickfix.com/api/v2/issues/6113640',
        },
        media: {
          image_url: 'https://seeclickfix.com/files/issue_images/0140/4806/img-image_680218675033185427543740.jpg',
          image_url_thumb:
            'https://seeclickfix.com/files/issue_images/0140/4806/img-image_680218675033185427543740_square.jpg',
        },
        location_type: null,
        location_description: null,
        type: 'Hazard',
        type_properties: null,
      },
      {
        id: 102849,
        title: 'Graffiti',
        description:
          'Hateful graffiti regarding abortion and cops on the back of a sign along the bike path just south of the railroad building. I saw a man doing it around 11pm when walking south. He was covering himself and the writing with a sleeping bag draped over the top of the sign and himself. By the time I walked back through around 12pm he was gone. ',
        address: 'Railway Ln Burlington, VT, 05401, USA',
        occurred_at: 1561837325,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102849',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/6113505',
          api_url: 'https://seeclickfix.com/api/v2/issues/6113505',
        },
        media: {
          image_url: null,
          image_url_thumb: null,
        },
        location_type: null,
        location_description: null,
        type: 'Unconfirmed',
        type_properties: null,
      },
      {
        id: 102854,
        title: 'Stolen 2017 Specialized Camber(red)',
        description: 'Stolen from garage while we were home middle of the day.  ',
        address: 'Seattle, WA, 98103',
        occurred_at: 1561834800,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102854',
        source: {
          name: 'BikeIndex.org',
          html_url: 'https://bikeindex.org/bikes/626804',
          api_url: 'https://bikeindex.org/api/v1/bikes/626804',
        },
        media: {
          image_url: 'https://files.bikeindex.org/uploads/Pu/165401/large_Screen_Shot_2019-06-29_at_12.40.38_PM.png',
          image_url_thumb:
            'https://files.bikeindex.org/uploads/Pu/165401/small_Screen_Shot_2019-06-29_at_12.40.38_PM.png',
        },
        location_type: null,
        location_description: null,
        type: 'Theft',
        type_properties: null,
      },
      {
        id: 102831,
        title: 'Stolen Bianchi San Jose(red)',
        description: '',
        address: 'Beaverton, 97005',
        occurred_at: 1561833785,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102831',
        source: {
          name: 'BikeIndex.org',
          html_url: 'https://bikeindex.org/bikes/626693',
          api_url: 'https://bikeindex.org/api/v1/bikes/626693',
        },
        media: {
          image_url: 'https://files.bikeindex.org/uploads/Pu/165353/large_bike.jpg',
          image_url_thumb: 'https://files.bikeindex.org/uploads/Pu/165353/small_bike.jpg',
        },
        location_type: null,
        location_description: null,
        type: 'Theft',
        type_properties: null,
      },
      {
        id: 102846,
        title: 'Traffic/Pedestrian Signal Complaint',
        description:
          'Two issues here, but related enough that they are combined in this single request.  Both are related to the flow of pedestrians and bicycles where the bicycle path crosses the sidewalk on the Northeast side of Mass Ave near Cameron.  \n\nFirst, there is a dangerous visibility issue created by the control panel of the BlueBikes kiosk.  Pedestrians and bicycles and scooters (especially children) which approach the kiosk either along the sidewalk (along the NE side of mass ave and traveling in the direction coming from arlington) or along the bike path toward the Mass Ave crossing (ie passing in front of all the blue bikes) can not see each other.  My 4 yo and I have been involved in several near misses.  My request is to eliminate the visibility issue somehow, perhaps by moving the BlueBikes control panel to the other end, or to make it substantially shorter in height or...(?)\n\nSecond, is a need for signage in that same location in regards to right of way or the lack of right of way rules or something.  I realize that we are talking about an intersection on the sidewalk of the traffic flow of non-motorized vehicles which is perhaps off the usual jurisdiction of the traffic department(?).  The issue is that folks traveling along the sidewalk (including adults and kids on bikes and scooters) and folks on bicycles crossing the street at speed with the bike green light have a crossing on the sidewalk that is perhaps unexpected and catches many people off guard.  My son and I have witnessed and have been part of numerous nears misses.  My request is to put up some signage either declaring some right of ways rules on the sidewalk there, or at least warning people of the hazard.\n',
        address: '7 Cameron Ave Cambridge, MA, 02140, USA',
        occurred_at: 1561833110,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102846',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/6113373',
          api_url: 'https://seeclickfix.com/api/v2/issues/6113373',
        },
        media: {
          image_url: null,
          image_url_thumb: null,
        },
        location_type: null,
        location_description: null,
        type: 'Hazard',
        type_properties: null,
      },
      {
        id: 102847,
        title: 'Abandoned Bicycle',
        description: '',
        address: '1651 Massachusetts Ave Cambridge 02138, United States',
        occurred_at: 1561833020,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102847',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/6113369',
          api_url: 'https://seeclickfix.com/api/v2/issues/6113369',
        },
        media: {
          image_url: 'https://seeclickfix.com/files/issue_images/0140/4693/image.jpg',
          image_url_thumb: 'https://seeclickfix.com/files/issue_images/0140/4693/image_square.jpg',
        },
        location_type: null,
        location_description: null,
        type: 'Theft',
        type_properties: null,
      },
      {
        id: 102848,
        title: 'Pedestrian or Bicycle Access Issues',
        description:
          'Bay Farm path around Mount Trashmore is overgrown and narrow: bike-ped-dog conflicts increasing and no room for safe two-way traffic. Please trim and cut back the overgrowth asap. ',
        address: 'Alameda 94621 United States',
        occurred_at: 1561832839,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102848',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/6113366',
          api_url: 'https://seeclickfix.com/api/v2/issues/6113366',
        },
        media: {
          image_url: 'https://seeclickfix.com/files/issue_images/0140/4690/image.jpg',
          image_url_thumb: 'https://seeclickfix.com/files/issue_images/0140/4690/image_square.jpg',
        },
        location_type: null,
        location_description: null,
        type: 'Hazard',
        type_properties: null,
      },
      {
        id: 102836,
        title: 'Stolen 2013 Bianchi Via Nirone Sora Dama(white)',
        description: null,
        address: 'San Jose, CA, 95124',
        occurred_at: 1561832089,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102836',
        source: {
          name: 'BikeIndex.org',
          html_url: 'https://bikeindex.org/bikes/626725',
          api_url: 'https://bikeindex.org/api/v1/bikes/626725',
        },
        media: {
          image_url: 'https://files.bikeindex.org/uploads/Pu/165367/large_IMG_20130719_160012.jpg',
          image_url_thumb: 'https://files.bikeindex.org/uploads/Pu/165367/small_IMG_20130719_160012.jpg',
        },
        location_type: null,
        location_description: null,
        type: 'Theft',
        type_properties: null,
      },
      {
        id: 102851,
        title: 'Stolen 2019 Sunday Forecaster(black)',
        description: '',
        address: 'Cedar Park, TX, 78613',
        occurred_at: 1561831200,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102851',
        source: {
          name: 'BikeIndex.org',
          html_url: 'https://bikeindex.org/bikes/626738',
          api_url: 'https://bikeindex.org/api/v1/bikes/626738',
        },
        media: {
          image_url: 'https://files.bikeindex.org/uploads/Pu/165372/large_GS_T2UkZRt%2B2eHNHmQ9%2B6w.jpg',
          image_url_thumb: 'https://files.bikeindex.org/uploads/Pu/165372/small_GS_T2UkZRt%2B2eHNHmQ9%2B6w.jpg',
        },
        location_type: null,
        location_description: null,
        type: 'Theft',
        type_properties: null,
      },
      {
        id: 102826,
        title: 'Pedestrian or Bicycle Access Issues',
        description:
          'Branch of tree has fallen across sidewalk. Branch is still partially attached to tree by a thin strip, but will ultimately finish falling. Potential for injury.',
        address: 'Barbers Point Rd & San Pedro Rd Alameda, CA, 94501, USA',
        occurred_at: 1561826656,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102826',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/6113084',
          api_url: 'https://seeclickfix.com/api/v2/issues/6113084',
        },
        media: {
          image_url: 'https://seeclickfix.com/files/issue_images/0140/4591/A39FC857-928E-4DCC-9543-A32EB8A23B89.jpeg',
          image_url_thumb:
            'https://seeclickfix.com/files/issue_images/0140/4591/A39FC857-928E-4DCC-9543-A32EB8A23B89_square.jpeg',
        },
        location_type: null,
        location_description: null,
        type: 'Hazard',
        type_properties: null,
      },
      {
        id: 102842,
        title: 'Stolen 2018 Specialized Sirrus(black)',
        description: '',
        address: 'San Diego, CA, 92101',
        occurred_at: 1561824000,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102842',
        source: {
          name: 'BikeIndex.org',
          html_url: 'https://bikeindex.org/bikes/626697',
          api_url: 'https://bikeindex.org/api/v1/bikes/626697',
        },
        media: {
          image_url: null,
          image_url_thumb: null,
        },
        location_type: null,
        location_description: null,
        type: 'Theft',
        type_properties: null,
      },
      {
        id: 102825,
        title: 'Investigate Manhole Cover',
        description: 'sinkhole in the bike lane',
        address: '13900 E Warren Ave Detroit, MI 48215, USA',
        occurred_at: 1561823825,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102825',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/6112997',
          api_url: 'https://seeclickfix.com/api/v2/issues/6112997',
        },
        media: {
          image_url:
            'https://seeclickfix.com/files/issue_images/0140/4536/img-SCF__20190629_11551756576685099499363954634568155416408103.jpg',
          image_url_thumb:
            'https://seeclickfix.com/files/issue_images/0140/4536/img-SCF__20190629_11551756576685099499363954634568155416408103_square.jpg',
        },
        location_type: null,
        location_description: null,
        type: 'Unconfirmed',
        type_properties: null,
      },
      {
        id: 102837,
        title: 'Stolen Schwinn(silver, gray or bare metal)',
        description: '',
        address: 'Salt Lake City, UT, 84107',
        occurred_at: 1561820400,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102837',
        source: {
          name: 'BikeIndex.org',
          html_url: 'https://bikeindex.org/bikes/626694',
          api_url: 'https://bikeindex.org/api/v1/bikes/626694',
        },
        media: {
          image_url: 'https://files.bikeindex.org/uploads/Pu/165349/large_B38E11D5-C750-480B-B92D-A4B0778FC3EB.jpeg',
          image_url_thumb:
            'https://files.bikeindex.org/uploads/Pu/165349/small_B38E11D5-C750-480B-B92D-A4B0778FC3EB.jpeg',
        },
        location_type: null,
        location_description: null,
        type: 'Theft',
        type_properties: null,
      },
      {
        id: 102824,
        title: 'Other issue',
        description:
          'hello, the shared use path, on washtenaw, westbound from platt on the north side has a lot of overgrown vegetation both on the ground and overhanging trees that make it a challange sometimes to bike on the path.  if this could be cleaned up that would be great.thx much',
        address: '3277-3279 Washtenaw Ave Ann Arbor, MI, 48104, USA',
        occurred_at: 1561817109,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102824',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/6112634',
          api_url: 'https://seeclickfix.com/api/v2/issues/6112634',
        },
        media: {
          image_url: null,
          image_url_thumb: null,
        },
        location_type: null,
        location_description: null,
        type: 'Hazard',
        type_properties: null,
      },
      {
        id: 102841,
        title: 'Stolen 2017 Fuji Supreme 1.1LE(black and green)',
        description:
          'Heading off ramp and bike fell off the bike rack. Circle back around and bike was gone. Saw a red pickup truck speeding off. ',
        address: 'Plano, TX, 75024',
        occurred_at: 1561813200,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102841',
        source: {
          name: 'BikeIndex.org',
          html_url: 'https://bikeindex.org/bikes/626687',
          api_url: 'https://bikeindex.org/api/v1/bikes/626687',
        },
        media: {
          image_url: null,
          image_url_thumb: null,
        },
        location_type: null,
        location_description: null,
        type: 'Theft',
        type_properties: null,
      },
      {
        id: 102821,
        title: 'Public Safety Issue',
        description: 'Sink hole has developed near west end of Marsh Bike Trail.',
        address: 'N Loop Trail Jekyll Island, GA 31527, USA',
        occurred_at: 1561811008,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102821',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/6112302',
          api_url: 'https://seeclickfix.com/api/v2/issues/6112302',
        },
        media: {
          image_url:
            'https://seeclickfix.com/files/issue_images/0140/4314/img-SCF__20190629_08215591167793604116027443551264802875251841.jpg',
          image_url_thumb:
            'https://seeclickfix.com/files/issue_images/0140/4314/img-SCF__20190629_08215591167793604116027443551264802875251841_square.jpg',
        },
        location_type: null,
        location_description: null,
        type: 'Hazard',
        type_properties: null,
      },
      {
        id: 102822,
        title: 'Other',
        description: 'A big THANKS for trimming the tree limbs on the bike path ',
        address: '1001–1049 Norfolk Ave Virginia Beach 23451, United States',
        occurred_at: 1561809274,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102822',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/6112196',
          api_url: 'https://seeclickfix.com/api/v2/issues/6112196',
        },
        media: {
          image_url: null,
          image_url_thumb: null,
        },
        location_type: null,
        location_description: null,
        type: 'Unconfirmed',
        type_properties: null,
      },
      {
        id: 102823,
        title: 'Abandoned Bicycle',
        description: '',
        address: '2 E India Square Mall Salem 01970, United States',
        occurred_at: 1561809220,
        updated_at: 1561852834,
        url: 'https://bikewise.org/api/v1/incidents/102823',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/6112185',
          api_url: 'https://seeclickfix.com/api/v2/issues/6112185',
        },
        media: {
          image_url: 'https://seeclickfix.com/files/issue_images/0140/4302/image.jpg',
          image_url_thumb: 'https://seeclickfix.com/files/issue_images/0140/4302/image_square.jpg',
        },
        location_type: null,
        location_description: null,
        type: 'Theft',
        type_properties: null,
      },
    ],
    loading: false,
    error: null,
    selected: null,
  };
  const spy = jest.spyOn(defaultProps, 'loadList');
  const component = props => <Home {...defaultProps} {...props} />;
  it('should render correctly', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });
  it('should include total number of cases', () => {
    const wrapper = mount(component());
    expect(wrapper.find('#total-cases').exists()).toBeTruthy();
  });
  it('should include 10 cases per page', () => {
    const wrapper = mount(component());
    expect(wrapper.find('.ant-list-item').exists()).toBeTruthy();
  });
  it('should include theft cases  for the berlin area', () => {
    const wrapper = mount(component());
    expect(spy).toHaveBeenCalledWith(1, 1000, 'theft', 'berlin', null, null);
  });
  it('should be able to filter reported bike thefts by date range', () => {
    const wrapper = mount(component());
    expect(wrapper.find('.ant-calendar-range-picker-input').length).toEqual(2);
  });
  it('should be able to filter reported bike thefts by parial case title', () => {
    const wrapper = mount(component());
    expect(wrapper.find('input').exists()).toBeTruthy();
  });
  it('should have a loading state untill list is available', () => {
    const wrapper = mount(component({ loading: true }));
    expect(wrapper.props().loading).toEqual(true);
  });
  it('should have a error state if list is unavailable', () => {
    const wrapper = mount(component({ error: { error: 'Object' } }));
    expect(wrapper.props().error).toBeTruthy();
  });
  it('should have empty state if there are no results', () => {
    const wrapper = mount(component({ list: [] }));
    expect(wrapper.props().list.length).toBeFalsy();
  });
});
