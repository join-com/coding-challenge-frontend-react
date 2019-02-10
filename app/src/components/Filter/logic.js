import PropTypes from 'prop-types';
import {
    compose,
    setDisplayName,
    withHandlers,
    withState,
    setPropTypes
} from 'recompose';

const defaultState = {
    query: '',
    occurred_after: '',
    occurred_before: ''
};

export default compose(
    setDisplayName('filter'),

    setPropTypes({
        onSubmit: PropTypes.func
    }),

    withState(
        'formData',
        'setFormData',
        {...defaultState}
    ),

    withHandlers({
        reset: ({ setFormData }) => () => {
            setFormData({...defaultState});
        }
    }),

    withHandlers({
        handleInputChange: props => e => {
            const {
                setFormData
            } = props;
            const {
                name,
                value
            } = e.target;

            setFormData(state => ({
                ...state,
                [name]: value
            }));
        },

        handleSubmit: props => e => {
            e && e.preventDefault();

            const {
                onSubmit,
                formData,
                reset
            } = props;

            typeof onSubmit === 'function' && onSubmit(formData);

            reset();
        }
    })
);
