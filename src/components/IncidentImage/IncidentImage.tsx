import React from 'react';
import styled from 'styled-components';

import prevewSvg from 'components/assets/preview.svg';
import { media } from 'ui/media';

interface IContainerProps {
    isPreview: boolean;
}

const Container = styled.div`
    ${media.mobile`
		display: ${(props: IContainerProps) => (props.isPreview ? 'none' : 'inherit')};
		padding-bottom: 10px;
  	`}

    ${media.tabletNDesktop`
		width: 100px;
		height: 100px;
		min-width: 100px;
		min-height: 100px;

		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		border-radius: 4px;
		border: 1px solid rgba(0, 0, 0, 0.05);
    	background: rgba(0, 0, 0, 0.02);
	`}
`;

interface Props {
    imageUrl?: string | null;
}

const Image = styled.div`
    background-image: url(${(props: Props) => props.imageUrl});
    background-repeat: no-repeat;
    background-size: cover;

    ${media.mobile`
		padding-top: 100%;
		width: 100%;
  	`}

    ${media.tabletNDesktop`
		width: 90px;
		height: 90px;
	`}
`;

const Preview = styled.div`
    background-image: url(${prevewSvg});
    background-repeat: no-repeat;
    background-size: cover;

    width: 55px;
    height: 32px;

    ${media.mobile`
		display: none;
  	`}
`;

export const IncidentImage = ({ imageUrl }: Props) => {
    // @ts-ignore
    const image = <Image imageUrl={imageUrl} />;

    // @ts-ignore
    return <Container isPreview={!Boolean(imageUrl)}>{imageUrl ? image : <Preview />}</Container>;
};
