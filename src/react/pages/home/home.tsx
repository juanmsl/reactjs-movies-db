import { Line, Tabs, Typography } from '@juanmsl/ui';

import { HomeStyle } from './home.style';

import { NowPlayingGallery } from '@components/ui';
import { PopularGallery } from '@components/ui/popular-gallery';
import { TopRatedGallery } from '@components/ui/top-rated-gallery';
import { UpcomingGallery } from '@components/ui/upcoming-gallery';

export const Home = () => {
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
          <section className='category-tabs'>
            <Tabs.Tab id='now-playing' className='category-tab'>
              <Typography tabIndex={0} weight='bold'>
                Now playing
              </Typography>
            </Tabs.Tab>
            <Tabs.Tab id='popular' className='category-tab'>
              <Typography tabIndex={0} weight='bold'>
                Popular
              </Typography>
            </Tabs.Tab>
            <Tabs.Tab id='top-rated' className='category-tab'>
              <Typography tabIndex={0} weight='bold'>
                Top Rated
              </Typography>
            </Tabs.Tab>
            <Tabs.Tab id='upcoming' className='category-tab'>
              <Typography tabIndex={0} weight='bold'>
                Upcoming
              </Typography>
            </Tabs.Tab>
          </section>

          <Line orientation='horizontal' />

          <section className='movies-gallery'>
            <Tabs.TabPanel id='now-playing'>
              <NowPlayingGallery />
            </Tabs.TabPanel>
            <Tabs.TabPanel id='popular'>
              <PopularGallery />
            </Tabs.TabPanel>
            <Tabs.TabPanel id='top-rated'>
              <TopRatedGallery />
            </Tabs.TabPanel>
            <Tabs.TabPanel id='upcoming'>
              <UpcomingGallery />
            </Tabs.TabPanel>
          </section>
        </section>
      </Tabs>
    </HomeStyle>
  );
};
