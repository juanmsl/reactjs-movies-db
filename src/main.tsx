import { IconProvider, ThemeProvider, Typography } from '@juanmsl/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import './styles.scss';

import { LoaderLogo } from '@components/ui';
import { AuthProvider } from '@contexts';
import { CommonTheme, DarkTheme, LightTheme, ThemeConstants } from '@core/theme';
import { Router } from '@router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider lightTheme={LightTheme} darkTheme={DarkTheme} commonTheme={CommonTheme} constants={ThemeConstants}>
      <IconProvider>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<LoaderLogo />}>
            <ErrorBoundary fallback={<Typography variant='header1'>Error</Typography>}>
              <AuthProvider>
                <BrowserRouter>
                  <Router />
                </BrowserRouter>
              </AuthProvider>
            </ErrorBoundary>
          </Suspense>
        </QueryClientProvider>
      </IconProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
