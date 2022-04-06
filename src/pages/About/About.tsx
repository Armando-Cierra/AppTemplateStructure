import React from 'react';
import {
  AppPageTemplate,
  AppPageContent,
  Text
} from '@2600hz/sds-react-components';

interface Props {
  collapsed: boolean;
}

const About = ({ collapsed }: Props) => {
  return (
    <AppPageTemplate pageName="About" collapsed={collapsed}>
      <AppPageContent>
        <Text.h1 textStyle="Heading2">About the App</Text.h1>
        <Text.p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          dolorum at architecto ipsum quae incidunt laudantium vel recusandae
          minus, saepe sunt, autem fuga asperiores a provident ad quos
          necessitatibus delectus.
        </Text.p>
      </AppPageContent>
    </AppPageTemplate>
  );
};

export default About;
