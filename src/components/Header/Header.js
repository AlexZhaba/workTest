import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import {Text} from '@shared';
import { setSearch } from '@redux/action-creators'
import Search from '@com/Search/Search.js';
import { HeaderWrapper, CompanyName } from './style.js';
import useInput from '@hooks/useInput.js';
import { loadGames, setPage, setPlatformFilter, setOrdering } from '@redux/action-creators';

const Header = ({  setSearch, loadGames, setPage,  setPlatformFilter, setOrdering }) => {

  const searchString = useInput('');
  const history = useHistory();

  const handleSearch = () => {
    document.getElementById('headerSearch').blur();
    setSearch(searchString.value);
    setPage(1);
    loadGames();
    history.push('/')
  }

  return (
    <HeaderWrapper>
      <CompanyName>
        <Text size="25px" orange hover onClick={() => {
          setPage(1);
          setSearch('');
          setPlatformFilter(null)
          setOrdering('')
          loadGames();
          searchString.onChange({target: {value: ''}})
          // document.getElementById('headerSearch').value = '';
          history.push('/')
        }}>
          Zhaba&nbsp;GAMES
        </Text>
      </CompanyName>
      <Search searchString={searchString} handleSearch={handleSearch}/>
    </HeaderWrapper>
  )
}

let mapStateToProps = (state) => ({
  search: state.app.search,
  page: state.app.pageGame
})

export default connect(mapStateToProps, { setSearch, loadGames, setPage, setPlatformFilter, setOrdering })(Header);

