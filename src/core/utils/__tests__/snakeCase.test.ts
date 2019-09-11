import { snakeToCamel, objKeysSnakeToCamel } from '../snakeCase';
import { optionsSnakeCase, optionsCamelCase } from '../__mocks__/options';
import { incidentsSnakeCaseArray, incidentsCamelCaseArray } from '../__mocks__/incidents';

it('should be camel case value', (): void => {
    expect(snakeToCamel('occurred_after')).toBe('occurredAfter');
});

it('should be object with camel case keys', (): void => {
    Object.is(objKeysSnakeToCamel(['occurred_after', 'occurred_at']), ['occurred_after', 'occurred_at']);

    Object.is(objKeysSnakeToCamel([1, 2, 3, 4]), [1, 2, 3, 4]);

    Object.is(objKeysSnakeToCamel(optionsSnakeCase), optionsCamelCase);

    Object.is(objKeysSnakeToCamel(incidentsSnakeCaseArray), incidentsCamelCaseArray);
});
