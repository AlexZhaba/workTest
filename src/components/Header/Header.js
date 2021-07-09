import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import {Text} from '@shared';
import { setSearch } from '@redux/action-creators'
import logo from '@assets/logo.png'
import Search from '@com/Search/Search.js';

import useInput from '@hooks/useInput.js';
import { loadGames, setPage, setPlatformFilter, setOrdering } from '@redux/action-creators';

const Header = ({ search, setSearch, loadGames, setPage, page, setPlatformFilter, setOrdering }) => {

  let searchString = useInput('');
  let history = useHistory();

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

const CompanyName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 125px;
  @media(max-width: 650px) {
    margin: 0;
    margin-top: 10px;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* border-bottom: 2px solid ${props => props.theme.DARK_COLOR}; */
  /* justify-content: center; */

  @media(max-width: 650px) {
    flex-direction: column;
    height: 90px;
  }
`;

