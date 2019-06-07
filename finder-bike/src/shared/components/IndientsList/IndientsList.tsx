import React from 'react';
import { Card } from '../../ui-kits/Card';
import styled from 'styled-components';

const StyledIndientsList = styled.div``;

function IndientsList(props) {
  return (
    <StyledIndientsList>
      {props.data.map(elm => (
        <Card
          key={elm.id}
          title={elm.title}
          description={elm.description}
          thumbnailURL={elm.media.image_url_thumb}
          date={elm.address}
        />
      ))}
    </StyledIndientsList>
  );
}

export default IndientsList;
