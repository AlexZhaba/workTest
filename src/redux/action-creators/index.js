import { 
  SET_PAGE, SET_GAMES, SET_PLATFORMS, 
  SET_SEARCH, ADD_GAMES, SET_ORDERING, SET_PLATFORM_FILTER, 
   SET_GAME_DETAIL, SET_LOADING } from '@redux/actions';
import URLCreator from '@utils/URLCreator.js';

export const loadGames = (option) => (dispatch, getState) => {
  if (option !== 'ADD') dispatch(setLoading(true));
  fetch(URLCreator.games(getState().app)).then(response => response.json()).then(data => {
    if (option === 'ADD') {
      dispatch(addGames(data.results))
    } else dispatch(setGames(data.results));
    dispatch(setPage(getState().app.gamePage + 1));
    dispatch(setLoading(false));
  });
}

export const loadPlatforms = () => (dispatch) => {
  fetch(URLCreator.platforms()).then(response => response.json()).then((data) => {
    dispatch(setPlatforms(data.results));
  });
}

export const loadGameDetail = (slug, callback) => (dispatch) => {
  fetch(URLCreator.gameInfo(slug)).then(response => response.json()).then((data) => {
    dispatch(setGameDetail(data));
    const mainData = data;
    fetch(URLCreator.gameScreenshots(slug)).then(response => response.json()).then((data) => {
      dispatch(setGameDetail({...mainData, screenshots: data.results}))
      if (callback) callback();
    });
  });
}

export const setGames = (games) => ({
  type: SET_GAMES,
  games
});

export const addGames = (games) => ({
  type: ADD_GAMES,
  games
});

export const setPage = (page) => ({
  type: SET_PAGE,
  page
});

export const setPlatforms = (platforms) => ({
  type: SET_PLATFORMS,
  platforms
});

export const setSearch = (search) => ({
  type: SET_SEARCH,
  search
});

export const setOrdering = (ordering) => ({
  type: SET_ORDERING,
  ordering
});

export const setPlatformFilter = (platformFilter) => ({
  type: SET_PLATFORM_FILTER,
  platformFilter
});

export const setGameDetail = (gameDetail) => ({
  type: SET_GAME_DETAIL,
  gameDetail
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});