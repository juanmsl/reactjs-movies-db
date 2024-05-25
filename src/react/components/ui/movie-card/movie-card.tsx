import { Image, Typography } from '@juanmsl/ui';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { MovieCardStyle } from './movie-card.style';

import { PATHS } from '@core/constants';
import { MovieEntity } from '@domain';

type MovieCardProps = {
  data: MovieEntity;
};

export const MovieCard = ({ data }: MovieCardProps) => {
  const { title, vote_average, backdrop_path, release_date, id } = data;
  const navigate = useNavigate();

  const handleCardClick = useCallback(() => {
    navigate(PATHS.DETAILS_URL.replace(':id', `${id}`));
  }, [id, navigate]);

  return (
    <MovieCardStyle onClick={handleCardClick}>
      <section className='backdrop-image-container'>
        <Image className='backdrop-image' loading='lazy' src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
      </section>
      <section className='movie-card-content'>
        <Typography variant='body' weight='bold' nowrap>
          {title}
        </Typography>
        <section className='movie-card-footer'>
          <Typography variant='small'>{release_date}</Typography>
          <Typography variant='small'>{Math.round(vote_average * 10) / 10} / 10</Typography>
        </section>
      </section>
    </MovieCardStyle>
  );
};
