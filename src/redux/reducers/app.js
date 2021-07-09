import * as Actions from '@redux/actions'

const initialState = {
  games: null,
  gamePage: 1,
  platforms: null,
  search: '',
  ordering: 'popularity',
  platformFilter: null,
  gameDetail: null 
}

const App = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case Actions.LOAD_GAMES: {
      console.log('nu load games and what')
      return state;
    }
    
    case Actions.SET_GAMES: {
      return {
        ...state,
        games: action.games
      }
    }

    case Actions.ADD_GAMES: {
      return {
        ...state,
        games: [...state.games, ...action.games]
      }
    }

    case Actions.SET_PAGE: {
      return {
        ...state,
        gamePage: action.page
      }
    }
    
    case Actions.SET_PLATFORMS: {
      return {
        ...state,
        platforms: action.platforms
      }
    }

    case Actions.SET_SEARCH: {
      return {
        ...state,
        search: action.search
      }
    }

    case Actions.SET_ORDERING: {
      return {
        ...state,
        ordering: action.ordering
      }
    }

    case Actions.SET_PLATFORM_FILTER: {
      return {
        ...state,
        platformFilter: action.platformFilter
      }
    }

    case Actions.SET_GAME_DETAIL: {
      return {
        ...state,
        gameDetail: action.gameDetail
      }
    }

    default: {
      return state;
    }
  }
}

export default App;