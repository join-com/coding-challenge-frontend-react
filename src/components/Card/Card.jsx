import React from "react";
import formatTimeStampToDate from "../../helpers/formatDate";
import { StyledCard, BikeImage, BikeInfo } from "./StyledCard";
import Text from "../ui/Text";
import Heading from "../ui/Heading";
import { Link } from "react-router-dom";
import { incidentPropTypes } from "../../constants/propTypes";

function Card({
  item: {
    id,
    title,
    description,
    address,
    occurred_at,
    updated_at,
    media: { image_url_thumb }
  }
}) {
  return (
    <StyledCard key={id}>
      <BikeImage src={image_url_thumb || `/bicycle.svg`} alt={title} />
      <BikeInfo>
        <Link to={`/case/${id}`}>
          <Heading level={3}>{title}</Heading>
        </Link>
        {description && <Text>{description}</Text>}
        <Text>
          Occurred at: {formatTimeStampToDate(occurred_at)} - {address}
        </Text>
        <Text>Updated at: {formatTimeStampToDate(updated_at)}</Text>
      </BikeInfo>
    </StyledCard>
  );
}

Card.propTypes = {
  item: incidentPropTypes.isRequired
};

export default Card;
