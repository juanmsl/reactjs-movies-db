import { Icon, Image, Tooltip, Typography } from '@juanmsl/ui';
import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMovies } from '../../../contexts/movies-context';

import { MovieCardStyle } from './movie-card.style';

import { PATHS } from '@core/constants';
import { MovieEntity } from '@domain';

type MovieCardProps = {
  data: MovieEntity;
};

export const MovieCard = ({ data }: MovieCardProps) => {
  const { title, vote_average, backdrop_path, release_date, id } = data;
  const navigate = useNavigate();
  const { favorites = [], addFavorite, removeFavorite } = useMovies();

  const handleCardClick = useCallback(() => {
    navigate(PATHS.DETAILS_URL.replace(':id', `${id}`));
  }, [id, navigate]);

  const isFavorite = useMemo(() => favorites.includes(id), [favorites, id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <MovieCardStyle onClick={handleCardClick}>
      <section className='backdrop-image-container'>
        <Image className='backdrop-image' loading='lazy' src={backdrop_path} />
      </section>
      <section className='movie-card-actions'>
        <Tooltip content={isFavorite ? 'Remove favorite' : 'Add favorite'}>
          <section className='favorite-action'>
            <Icon name={isFavorite ? 'star' : 'star-empty'} onClick={toggleFavorite} />
          </section>
        </Tooltip>
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
