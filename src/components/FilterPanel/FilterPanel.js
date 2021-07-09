import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
 
import OrderSelector from '@com/OrderSelector/OrderSelector.js'
import FilterPlatforms from '@com/FilterPlatforms/FilterPlatforms.js'
import { Container } from '@shared'

import { setOrdering, loadGames, setPage } from '@redux/action-creators'

const FilterPanel = ({ ordering, setOrdering, loadGames, setPage, platforms }) => {

  // const handleChange = (e, { value }) => 

  const handleChange = (data, setIsOpen) => {
    
    setIsOpen(false)
    setOrdering(data.value === 'popularity' ? '' : data)
    setPage(1);
    loadGames();
  }
  if (!platforms) return <div></div>
  return (
    <Wrapper no-overflow pad='0'>
      <OrderSelector ordering={ordering} setOrdering={setOrdering} handleChange={handleChange}/>     
      <FilterPlatforms
      /> 
    </Wrapper>
  )
}


let mapStateToProps = (state) => ({
  ordering: state.app.ordering,
  platforms: state.app.platforms
})

export default connect(mapStateToProps, { setOrdering, loadGames, setPage })(FilterPanel);

const Wrapper = styled(Container)`
  width: 100%;
  margin-top: 25px;
  background: none;
  display: flex;
  padding: 0 25px;
  /* justify-content: space-between; */
`;