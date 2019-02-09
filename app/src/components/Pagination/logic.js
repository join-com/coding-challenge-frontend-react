import PropTypes from 'prop-types';
import range from 'lodash/range';
import first from 'lodash/first';
import last from 'lodash/last';
import isFunction from 'lodash/isFunction';
import isNumber from 'lodash/isNumber';
import {
    compose,
    withHandlers,
    withState,
    setPropTypes,
    withProps,
    defaultProps
} from 'recompose';

export default compose(
    setPropTypes({
        pages: PropTypes.number,
        onChange: PropTypes.func,
        activePage: PropTypes.number
    }),

    defaultProps({
        isNavigation: true
    }),

    withProps(props => {
        const {
            activePage,
            pages
        } = props;

        if (activePage > pages) {
            return { activePage: 1 };
        }
    }),

    withState(
        'activePage',
        'setActivePage',
        ({ activePage = 1 }) => activePage
    ),

    withHandlers({
        handleChangePage: props => page => e => {
            e && e.preventDefault();

            const {
                onChange,
                setActivePage
            } = props;

            if (!isNumber(page)) {
                return false;
            }

            setActivePage(page);

            isFunction(onChange) && onChange(page);
        },

        getPages: ({ pages }) => activePage => {
            let result = [];
            const _pages = range(1, pages + 1);
            const _curIndex = _pages.indexOf(activePage);
            let _before = _pages.slice(_curIndex > 4 ? (_curIndex - 4) : 0, _curIndex);
            const _after = _pages.slice(_curIndex + 1, _curIndex + (9 - _before.length));

            if (_after.length < 4) {
                _before = _pages.slice(_curIndex > (8 - _after.length) ? (_curIndex - (8 - _after.length)) : 0, _curIndex);
            }

            if (_before.length > 0 && first(_before) != first(_pages)) {
                result = result.concat([[1, '1']]);
            }

            if (first(_before) > first(_pages) + 1) {
                result = result.concat([[null, '...']]);
            }

            result = result.concat(_before.map(x => {
                return [x, x.toString()];
            }));

            result = result.concat([[activePage, String(activePage)]]);

            result = result.concat(_after.map(x => {
                return [x, x.toString()];
            }));

            if (_after.length > 0 && last(_after) < (last(_pages) - 1)) {
                result = result.concat([[null, '...']]);
            }

            if (_after.length > 0 && last(_after) != last(_pages)) {
                result = result.concat([[pages, String(pages)]]);
            }

            return result;
        },

        getActivePage: ({ activePage = 1 }) => () => activePage
    })
);
