import { Image, Typography } from '@juanmsl/ui';
import { useParams } from 'react-router-dom';

import { DetailsStyle } from './details.style';

import { LoaderLogo } from '@components/ui';
import { useMovieDetails } from '@hooks';

export const Details = () => {
  const { id } = useParams();
  const { data, isLoading } = useMovieDetails(parseInt(id), {});

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
        <section className='poster-data-container'>
          <Typography className='poster-title' variant='header1'>
            {title}
          </Typography>
          <section className='genre-tags'>
            {genres.map(({ id, name }) => (
              <Typography key={id} variant='small' weight='bold' className='genre-tag'>
                {name}
              </Typography>
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
