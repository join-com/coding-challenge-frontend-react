import PropTypes from "prop-types";

export const incidentPropTypes = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  address: PropTypes.string,
  occurred_at: PropTypes.number,
  updated_at: PropTypes.number,
  media: PropTypes.shape({
    image_url_thumb: PropTypes.string
  })
});
