import { Icon } from '@juanmsl/ui';

import { LoaderLogoStyle } from './loader-logo.style';

type LoaderLogoProps = {
  className?: string;
};

export const LoaderLogo = ({ className }: LoaderLogoProps) => {
  return (
    <LoaderLogoStyle className={className}>
      <Icon name='spinner' className='loader-icon' />
    </LoaderLogoStyle>
  );
};
