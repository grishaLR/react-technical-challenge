import * as React from 'react';
import BrandingRoot from 'docs/src/modules/branding/BrandingRoot';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// You can use this dataset for the component
import countries from './countries';
import ComboBox from './ComboBox';

/**
 * You can render this page with:
 * yarn docs:dev && open http://0.0.0.0:3003/components/phase1/
 */
export default function LandingPage() {
  const countryNameArray = countries.map((country) => country.label)
  return (
    <BrandingRoot>
      <Container>
        <Typography component="h1" variant="h2" sx={{ mt: 8 }}>
          Search for your Country
        </Typography>
        <ComboBox strings={countryNameArray} />
      </Container>
    </BrandingRoot>
  );
}
