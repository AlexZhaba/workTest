class URLCreator {
  constructor() {
    this.key = process.env.REACT_APP_API_KEY;
    this.domain = process.env.REACT_APP_DOMAIN;
  } 
  
  games = (state) => {
    return `${this.domain}/games?key=${this.key}&page_size=24&page=${state.gamePage}&search=${state.search}`
    + `&ordering=${state.ordering}&` 
    + `${state.platformFilter ? `${state.platformFilter.type === 'PARENT' ? 'parent_platforms' : 'platforms'}=${state.platformFilter.id}` : ''}`;
  }

  platforms = () => {
    return `${this.domain}/platforms/lists/parents?key=${this.key}`;
  }

  gameInfo = (slug) => {
    return `${this.domain}/games/${slug}?key=${this.key}`;
  }

  gameScreenshots = (slug) => {
    return `${this.domain}/games/${slug}/screenshots?key=${this.key}`;
  }
}

const instance = new URLCreator();

export default instance;

