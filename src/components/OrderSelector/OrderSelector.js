import React, { useState, useRef } from 'react';
// import { Dropdown, Header, Icon } from 'semantic-ui-react'
import styled from 'styled-components';
import { Container, Text } from '@shared'

import Order from './Order';

import useControlModal from '@hooks/useControlModal.js'

import { orderName } from '../../config';

const orderingType = [ 
  'popularity', 'released', '-released', 'metacritic', '-metacritic'
]

const OrderSelector = ({ ordering, setOrdering, handleChange }) => {

  let menuRef = useRef();

  let [isOpen, setIsOpen] = useState(false);


  useControlModal(menuRef, setIsOpen)

  return (
    <Container no-overflow pad='8px 20px'>
        <Text>
          <Text size='13px' font='Montserrat'>Order by: &nbsp;</Text>
          <Text size='14px'  weight='500' hover onClick={() => {
            setIsOpen(true)
          }}  data-control="true" >
            {/* <Dropdown
              inline
              options={options}
              defaultValue={options[0].value}
              onChange={handleChange}
            /> */}
            {orderName[ordering]}
          </Text>
        </Text>
        {isOpen &&
          <Dropdown ref={menuRef} data-control="true" >
            {
              orderingType.map((ordering) => <Order ordering={ordering} handleClick={handleChange} setIsOpen={setIsOpen}/> )
            }
          </Dropdown>
        }
    </Container>
  )
}

//ascending

export default OrderSelector;

const Dropdown = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  width: 190px;
  min-width: 100%;
  color: #FFF;
  padding: 10px 0;
  background: ${props => props.DARK_BCG_COLOR};
  z-index: 10;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  /* box-shadow: 0 0 10px 5px #222; */
`;
