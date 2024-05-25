import { Typography } from '@juanmsl/ui';

import { FooterStyle } from './footer.style';

export const Footer = () => {
  return (
    <FooterStyle>
      <Typography variant='small' className='copyright' as='p'>
        Juanmsl technical test for 57Blocks
      </Typography>
    </FooterStyle>
  );
};
