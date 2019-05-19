import { camelToSnake, objKeysCamelToSnake } from '../camelCase';
import { optionsCamelCase, optionsSnakeCase } from '../__mocks__/options';
import { incidentsSnakeCaseArray, incidentsCamelCaseArray } from '../__mocks__/incidents';

it('should be snake case value', (): void => {
    expect(camelToSnake('occurredAfter')).toBe('occurred_after');
});

it('should be object with snake case keys', (): void => {
    Object.is(objKeysCamelToSnake(optionsCamelCase), optionsSnakeCase);

    Object.is(objKeysCamelToSnake(incidentsCamelCaseArray), incidentsSnakeCaseArray);
});
