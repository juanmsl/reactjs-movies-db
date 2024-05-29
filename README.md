# 57 Blocks | Movies API

This project is the technical test for the company 57 Blocks, which consisted of developing a platform with a login mock and an integration with an API, in this case a movie API.

## API

This project use the movie database and API integration from [TMDB (The Movie DB)](https://developer.themoviedb.org/docs/getting-started)

## Run this project

Just clone the repository, install the dependencies and start the project with the `dev` script

```
git clone git@github.com:juanmsl/reactjs-movies-db.git
cd reactjs-movies-db
yarn
yarn dev
```

Then just create a free account on [TMDB (The Movie DB)](https://developer.themoviedb.org/docs/getting-started), and generate an API token, to configure on the environment variables in file `.env` at root of the repository
```
VITE_APP_BACKEND_URL="https://api.themoviedb.org/3"
VITE_APP_API_KEY="YOUR-TMDB-API-KEY"
VITE_APP_ACCESS_TOKEN="YOUR-TMDB-ACCESS-TOKEN"
```