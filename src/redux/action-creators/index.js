import { 
  SET_PAGE, LOAD_GAMES, SET_GAMES, SET_PLATFORMS, 
  SET_SEARCH, ADD_GAMES, SET_ORDERING, SET_PLATFORM_FILTER, 
  LOAD_GAME_DETAIL, SET_GAME_DETAIL } from '@redux/actions'
import axios from 'axios'

import history from '../../history'

export const loadGames = (option) => (dispatch, getState) => {
  axios.get(`/games?key=${process.env.REACT_APP_API_KEY}&page_size=24&page=${getState().app.gamePage}&search=${getState().app.search}`
  +`&ordering=${getState().app.ordering}&` +
  `${getState().app.platformFilter ? `${getState().app.platformFilter.type === 'PARENT' ? 'parent_platforms' : 'platforms'}=${getState().app.platformFilter.id}` : ''}`).then(response => {
    console.log(response)
    if (option === 'ADD') {
      dispatch(addGames(response.data.results))
    } else dispatch(setGames(response.data.results))
    dispatch(setPage(getState().app.gamePage + 1))
  })
}

export const loadPlatforms = () => (dispatch, getState) => {
  axios.get(`/platforms/lists/parents?key=${process.env.REACT_APP_API_KEY}`).then(({ data }) => {
    // console.log('platform:',data)
    dispatch(setPlatforms(data.results))
  })
}


export const setGames = (games) => ({
  type: SET_GAMES,
  games
})
export const addGames = (games) => ({
  type: ADD_GAMES,
  games
})

export const setPage = (page) => ({
  type: SET_PAGE,
  page
})

export const setPlatforms = (platforms) => ({
  type: SET_PLATFORMS,
  platforms
})

export const setSearch = (search) => ({
  type: SET_SEARCH,
  search
})

export const setOrdering = (ordering) => ({
  type: SET_ORDERING,
  ordering
})

export const setPlatformFilter = (platformFilter) => ({
  type: SET_PLATFORM_FILTER,
  platformFilter
})

export const loadGameDetail = (slug, callback) => (dispatch, getState) => {
  axios.get(`/games/${slug}?key=${process.env.REACT_APP_API_KEY}`).then(({ data }) => {
    console.log('data:',data)
    dispatch(setGameDetail(data))
    let mainData = data;
    axios.get(`/games/${slug}/screenshots?key=${process.env.REACT_APP_API_KEY}`).then( ({ data }) => {
      console.log('data=',data)
      dispatch(setGameDetail({...mainData, screenshots: data.results}))
      if (callback) callback();
    })
  })
}

export const setGameDetail = (gameDetail) => ({
  type: SET_GAME_DETAIL,
  gameDetail
})