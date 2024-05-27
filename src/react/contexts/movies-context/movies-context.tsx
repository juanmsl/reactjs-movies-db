import { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { MovieEntity } from '@domain';

type MoviesContextState = {
  genreId: MovieEntity['id'] | null;
  setGenreId: (genreId: MovieEntity['id'] | null) => void;
  favorites: Array<MovieEntity['id']>;
  addFavorite: (genreId: MovieEntity['id']) => void;
  removeFavorite: (genreId: MovieEntity['id']) => void;
};

const MoviesContext = createContext(null);

type MoviesProviderProps = {
  children: React.ReactNode;
};

enum MoviesLocalStorageKeys {
  FAVORITES = 'favorite-movies',
}

export const MoviesProvider = ({ children }: MoviesProviderProps) => {
  const [genreId, setGenreId] = useState<MoviesContextState['genreId']>(null);
  const [favorites, setFavorites] = useState<Array<MovieEntity['id']>>([]);

  useEffect(() => {
    try {
      const stringFavorites = localStorage.getItem(MoviesLocalStorageKeys.FAVORITES);
      setFavorites(JSON.parse(stringFavorites) ?? []);
    } catch (error) {
      setFavorites([]);
    }
  }, []);

  const addFavorite = useCallback((id: MovieEntity['id']) => {
    setFavorites(prev => {
      const next = prev.includes(id) ? prev : [...prev, id];
      localStorage.setItem(MoviesLocalStorageKeys.FAVORITES, JSON.stringify(next));

      return next;
    });
  }, []);

  const removeFavorite = useCallback((id: MovieEntity['id']) => {
    setFavorites(prev => {
      const next = prev.filter(genreId => genreId !== id);
      localStorage.setItem(MoviesLocalStorageKeys.FAVORITES, JSON.stringify(next));

      return next;
    });
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        genreId,
        setGenreId: value => setGenreId(value),
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = (): MoviesContextState => {
  const context = useContext(MoviesContext);

  if (context === null) {
    throw new Error('useMovies must be used with in an MoviesProvider');
  }

  return context;
};
