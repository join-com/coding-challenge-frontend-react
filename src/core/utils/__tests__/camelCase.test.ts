import { camelToSnake, objKeysCamelToSnake } from '../camelCase';

it('should be occurred_after', (): void => {
    expect(camelToSnake('occurredAfter')).toBe('occurred_after');
});

it('should be object with camel case keys', (): void => {
    /* eslint-disable @typescript-eslint/camelcase */
    Object.is(objKeysCamelToSnake({ occurredAfter: 12312 }), { occurred_after: 12312 });

    Object.is(
        objKeysCamelToSnake({
            page: 1,
            perPage: 10,
            occurredAfter: 1121,
            occurredBefore: 1121,
            incidentType: 'test',
            proximity: 1,
            proximitySquare: 100,
            query: 'string',
        }),
        {
            page: 1,
            per_page: 10,
            occurred_after: 1121,
            occurred_before: 1121,
            incident_type: 'test',
            proximity: 1,
            proximity_square: 100,
            query: 'string',
        },
    );
    /* eslint-enable @typescript-eslint/camelcase */
});
