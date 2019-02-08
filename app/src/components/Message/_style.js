
import styled from 'styled-components';

export default styled.p`
    margin: 0 0 20px;
    font-weight: 600;
    color: ${props => props.color === 'secondary' ? 'red' : '#1187d2'};
`;
