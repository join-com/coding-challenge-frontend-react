import { mediaQuery } from './styled-media-queries';

const sizes = {
    mobile: 480,
    desktop: 992,
};

export const media = {
    mobile: mediaQuery`(max-width: ${sizes.mobile - 1}px)`,
    mobileNTablet: mediaQuery`(max-width: ${sizes.desktop - 1}px)`,
    tablet: mediaQuery`(min-width: ${sizes.mobile}px) and (max-width: ${sizes.desktop - 1}px)`,
    desktop: mediaQuery`(min-width: ${sizes.desktop}px)`,
    tabletNDesktop: mediaQuery`(min-width: ${sizes.mobile}px)`,
};
