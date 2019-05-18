import { snakeToCamel, objKeysSnakeToCamel } from '../snakeCase';

it('should be camel case value', (): void => {
    expect(snakeToCamel('occurred_after')).toBe('occurredAfter');
});

it('should be object with camel case keys', (): void => {
    /* eslint-disable @typescript-eslint/camelcase */
    Object.is(objKeysSnakeToCamel({ occurred_after: 1555125302 }), { occurredAfter: 1555125302 });

    Object.is(
        objKeysSnakeToCamel({
            page: 1,
            per_page: 10,
            occurred_after: 1555125302,
            occurred_before: 1555125302,
            incident_type: 'theft',
            proximity: 1,
            proximity_square: 100,
            query: 'Berlin',
        }),
        {
            page: 1,
            perPage: 10,
            occurredAfter: 1555125302,
            occurredBefore: 1555125302,
            incidentType: 'theft',
            proximity: 1,
            proximitySquare: 100,
            query: 'Berlin',
        },
    );

    Object.is(
        objKeysSnakeToCamel({
            address: 'Berlin, 10827, DE',
            description:
                'There were the 2 bikes I owned parked adjacent to each other and with 1 cable lock I locked the 2 bikes together and with another cable lock I locked the bike ,which was stolen, to the bike parking station bar in the courtyard of my apartment. I came back home at about 12:30 pm on 25.04.2019 and checked the bikes and found out the incident. The thief(s) cut off the cable locks and took only 1 of the bikes and left the 2nd bike.',
            id: 99362,
            location_description: null,
            location_type: null,
            media: {
                image_url:
                    'https://files.bikeindex.org/uploads/Pu/153579/large_WhatsApp_Image_2019-04-25_at_14.01.49.jpeg',
                image_url_thumb:
                    'https://files.bikeindex.org/uploads/Pu/153579/small_WhatsApp_Image_2019-04-25_at_14.01.49.jpeg',
            },
            occurred_at: 1556179200,
            source: {
                name: 'BikeIndex.org',
                html_url: 'https://bikeindex.org/bikes/603410',
                api_url: 'https://bikeindex.org/api/v1/bikes/603410',
            },
            title: 'Stolen 2016 Cube Analog(blue)',
            type: 'Theft',
            type_properties: null,
            updated_at: 1558180870,
            url: 'https://bikewise.org/api/v1/incidents/99362',
        }),
        {
            address: 'Berlin, 10827, DE',
            description:
                'There were the 2 bikes I owned parked adjacent to each other and with 1 cable lock I locked the 2 bikes together and with another cable lock I locked the bike ,which was stolen, to the bike parking station bar in the courtyard of my apartment. I came back home at about 12:30 pm on 25.04.2019 and checked the bikes and found out the incident. The thief(s) cut off the cable locks and took only 1 of the bikes and left the 2nd bike.',
            id: 99362,
            locationDescription: null,
            locationType: null,
            media: {
                imageUrl:
                    'https://files.bikeindex.org/uploads/Pu/153579/large_WhatsApp_Image_2019-04-25_at_14.01.49.jpeg',
                imageUrlThumb:
                    'https://files.bikeindex.org/uploads/Pu/153579/small_WhatsApp_Image_2019-04-25_at_14.01.49.jpeg',
            },
            occurredAt: 1556179200,
            source: {
                name: 'BikeIndex.org',
                htmlUrl: 'https://bikeindex.org/bikes/603410',
                apiUrl: 'https://bikeindex.org/api/v1/bikes/603410',
            },
            title: 'Stolen 2016 Cube Analog(blue)',
            type: 'Theft',
            typeProperties: null,
            updatedAt: 1558180870,
            url: 'https://bikewise.org/api/v1/incidents/99362',
        },
    );

    /* eslint-enable @typescript-eslint/camelcase */
});
