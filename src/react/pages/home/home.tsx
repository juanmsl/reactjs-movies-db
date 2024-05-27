import { Line, Tabs, Typography } from '@juanmsl/ui';

import { HomeStyle } from './home.style';

import { GenreTag, MoviesGallery } from '@components/ui';
import { useMovies } from '@contexts';
import { MoviesList } from '@domain';
import { useListGenres } from '@hooks';

export const Home = () => {
  const { data } = useListGenres();
  const { genreId, setGenreId } = useMovies();

  return (
    <HomeStyle>
      <section className='home-header'>
        <Typography variant='header1' withoutPadding>
          57Blocks | Movies
        </Typography>
        <Typography>
          By
          <a href='https://juanmsl.com' className='header-link' target='_blank' rel='noopener noreferrer'>
            Juanmsl.com
          </a>
        </Typography>
      </section>

      <Tabs defaultOpenTab='now-playing'>
        <section className='movies-categories-content'>
          <section className='genre-tags'>
            <GenreTag selected={genreId === null} onClick={() => setGenreId(null)} label='All genres' />
            {(data?.genres ?? []).map(({ id, name }) => (
              <GenreTag selected={genreId === id} onClick={() => setGenreId(id)} label={name} key={id} />
            ))}
          </section>

          <Line orientation='horizontal' />

          <section className='category-tabs'>
            <Tabs.Tab id='now-playing' className='category-tab'>
              <Typography variant='label' withoutPadding tabIndex={0} weight='bold'>
                Now playing
              </Typography>
            </Tabs.Tab>
            <Tabs.Tab id='popular' className='category-tab'>
              <Typography variant='label' withoutPadding tabIndex={0} weight='bold'>
                Popular
              </Typography>
            </Tabs.Tab>
            <Tabs.Tab id='top-rated' className='category-tab'>
              <Typography variant='label' withoutPadding tabIndex={0} weight='bold'>
                Top Rated
              </Typography>
            </Tabs.Tab>
            <Tabs.Tab id='upcoming' className='category-tab'>
              <Typography variant='label' withoutPadding tabIndex={0} weight='bold'>
                Upcoming
              </Typography>
            </Tabs.Tab>
          </section>

          <Line orientation='horizontal' />

          <section className='movies-gallery'>
            <Tabs.TabPanel id='now-playing'>
              <MoviesGallery category={MoviesList.NOW_PLAYING} />
            </Tabs.TabPanel>
            <Tabs.TabPanel id='popular'>
              <MoviesGallery category={MoviesList.POPULAR} />
            </Tabs.TabPanel>
            <Tabs.TabPanel id='top-rated'>
              <MoviesGallery category={MoviesList.TOP_RATED} />
            </Tabs.TabPanel>
            <Tabs.TabPanel id='upcoming'>
              <MoviesGallery category={MoviesList.UPCOMING} />
            </Tabs.TabPanel>
          </section>
        </section>
      </Tabs>
    </HomeStyle>
  );
};
