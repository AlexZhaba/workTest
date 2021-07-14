import React, { useState, useRef } from 'react';
import { Container, Text } from '@shared'
import { Dropdown } from './style.js'
import Order from './Order';
import useControlModal from '@hooks/useControlModal.js'
import { orderName } from '../../config';

const orderingType = [ 
  'popularity', 'released', '-released', 'metacritic', '-metacritic'
]

const OrderSelector = ({ ordering, handleChange }) => {

  const menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useControlModal(menuRef, setIsOpen);

  return (
    <Container no-overflow pad='8px 20px'>
        <Text>
          <Text size='13px' font='Montserrat'>Order by: &nbsp;</Text>
          <Text size='14px'  weight='500' hover onClick={() => {
            setIsOpen(true)
          }}  data-control="true" >
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

export default OrderSelector;

