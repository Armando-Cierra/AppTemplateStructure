import React from 'react';
import {
  AppPageTemplate,
  AppPageActions,
  AppPageContent,
  Button,
  Text
} from '@2600hz/sds-react-components';

interface Props {
  collapsed: boolean;
}

const Page1 = ({ collapsed }: Props) => {
  const primaryAction = () => {
    console.log('Primary Action');
  };

  const secondaryAction = () => {
    console.log('Secondary Action');
  };

  const contentAction = () => {
    console.log('Content Action');
  };

  return (
    <>
      <AppPageTemplate pageName="Page 1" collapsed={collapsed}>
        <AppPageActions className="Page1Actions">
          <Button type="Base" onClick={secondaryAction}>
            Secondary Action
          </Button>
          <Button type="Primary" onClick={primaryAction}>
            Primary Action
          </Button>
        </AppPageActions>
        <AppPageContent className="Page1Content">
          <Text.h1 textStyle="Heading2">Here Goes the Page Content</Text.h1>
          <Text.p>
            You can create new structures inside this component and even use
            more sds-components, like the following Button
          </Text.p>
          <Button type="Secondary" onClick={contentAction}>
            Content Action
          </Button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Text.p>
            You can create new structures inside this component and even use
            more sds-components, like the following Button
          </Text.p>
        </AppPageContent>
      </AppPageTemplate>
    </>
  );
};

export default Page1;
