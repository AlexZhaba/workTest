import React from 'react';
import { connect } from 'react-redux';
import OrderSelector from '@com/OrderSelector/OrderSelector.js'
import FilterPlatforms from '@com/FilterPlatforms/FilterPlatforms.js'
import { setOrdering, loadGames, setPage } from '@redux/action-creators'
import { Wrapper } from './style';

const FilterPanel = ({ ordering, setOrdering, loadGames, setPage, platforms }) => {

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


const mapStateToProps = (state) => ({
  ordering: state.app.ordering,
  platforms: state.app.platforms
})

export default connect(mapStateToProps, { setOrdering, loadGames, setPage })(FilterPanel);

