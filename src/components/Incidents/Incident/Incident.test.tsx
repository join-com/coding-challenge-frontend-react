import React from 'react';
import { shallow } from 'enzyme';

import { Incident } from './Incident';

describe('Incident', () => {
    it('should render correctly', () => {
        const component = (
            <Incident
                id={1}
                title={'Stolen 2018 VAUN VELO(black)'}
                description={'Stolen from my courtyard'}
                occurredAt={1532152800}
                address={'Berlin, 12047, DE'}
                imageUrlThumb={
                    'https://avatars.mds.yandex.net/get-turbo/1505928/2a0000016836daee3ee7d60c44cca211b89b/max_g480_c12_r3x4_pd20'
                }
            />
        );

        const container = shallow(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });

    it('without some fields', () => {
        const component = <Incident id={1} />;

        const container = shallow(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
