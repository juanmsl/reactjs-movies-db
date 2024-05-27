import { Icon, Image, Typography } from '@juanmsl/ui';
import { useNavigate, useParams } from 'react-router-dom';

import { DetailsStyle } from './details.style';

import { GenreTag, LoaderLogo } from '@components/ui';
import { PATHS } from '@core/constants';
import { useMovieDetails } from '@hooks';

export const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useMovieDetails(parseInt(id));

  if (!data || isLoading) {
    return <LoaderLogo />;
  }

  const { title, poster_path, genres, overview } = data;

  return (
    <DetailsStyle>
      <section className='header-container'>
        <section className='poster-image-container'>
          <Image className='poster-image' src={poster_path} />
        </section>
        <section className='poster-header-container'>
          <Typography weight='bold' onClick={() => navigate(PATHS.HOME_URL)} variant='label' className='back-to-home'>
            <Icon name='arrow-left' />
            <span>Back to home</span>
          </Typography>
        </section>
        <section className='poster-data-container'>
          <Typography className='poster-title' variant='header1'>
            {title}
          </Typography>
          <section className='genre-tags'>
            {genres.map(({ id, name }) => (
              <GenreTag label={name} key={id} />
            ))}
          </section>
        </section>
      </section>
      <section className='movie-details'>
        <Typography className='movie-overview'>{overview}</Typography>
      </section>
    </DetailsStyle>
  );
};
