import { Typography, useClassNames } from '@juanmsl/ui';

import { GenreTagStyle } from './genre-tag.style';

type GenreTagProps = {
  label: string;
  onClick?: () => void;
  selected?: boolean;
};
export const GenreTag = ({ label, onClick, selected }: GenreTagProps) => {
  const className = useClassNames({
    'genre-tag': true,
    'tag-selected': selected,
  });

  return (
    <GenreTagStyle>
      <Typography onClick={onClick} variant='small' weight='bold' className={className}>
        {label}
      </Typography>
    </GenreTagStyle>
  );
};
