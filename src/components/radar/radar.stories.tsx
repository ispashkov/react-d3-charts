import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radar } from './radar.component';
import styled from 'styled-components';

export default {
  title: 'Components/Radar',
  component: Radar,
} as ComponentMeta<typeof Radar>;

const Template: ComponentStory<typeof Radar> = (args) => (
  <Wrapper>
    <Radar {...args} />
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 360px;
  margin: 0 auto;
`;

export const Example = Template.bind({});
