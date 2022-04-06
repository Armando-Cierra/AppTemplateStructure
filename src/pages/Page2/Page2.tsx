import React from 'react';
import {
  AppPageTemplate,
  AppPageContent,
  AppPageActions,
  Text
} from '@2600hz/sds-react-components';

interface Props {
  collapsed: boolean;
}

const Page2 = ({ collapsed }: Props) => {
  return (
    <>
      <AppPageTemplate pageName="Page 2" collapsed={collapsed}>
        <AppPageActions className="Example">
          <h1>Hola</h1>
        </AppPageActions>
        <AppPageContent>
          <Text.h1 textStyle="Heading2">Some More Information</Text.h1>
          <Text.p>Using the AppPageAction component is optional.</Text.p>
        </AppPageContent>
      </AppPageTemplate>
    </>
  );
};

export default Page2;
