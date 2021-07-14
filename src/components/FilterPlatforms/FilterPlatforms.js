import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import Platform from './Platform'
import useControlModal from '@hooks/useControlModal'
import { setPlatformFilter, loadGames, setPage } from '@redux/action-creators'
import { Container, Text } from '@shared';

const FilterPlatforms = ({ platforms, setPlatformFilter, loadGames, setPage, platformFilter }) => {

  const menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [parentPlatform, setParentPlatform] = useState(null);

  useControlModal(menuRef, setIsOpen);

  const handleTop = () => {
    if (!parentPlatform) setIsOpen(false);
    setParentPlatform(false);
    setPlatformFilter(null);
    setPage(1);
    loadGames();
  }

  const handleSetPlatform = (type, id, name) => {
    setIsOpen(false);
    setParentPlatform(false);
    console.log('handleSetPlatform()');
    setPlatformFilter({ type, id, name });
    setPage(1);
    loadGames();
  }

  if (!platforms) return <div></div>
  
  return (
    <Wrapper>
      <Container pad='8px 20px' no-overflow active={platformFilter}>
        <Text hover size='13px' font='Montserrat' weight='400' onClick={() => setIsOpen(true)} data-control="true"  style={{minWidth: 100, textAlign: 'center'}}>
          {platformFilter ? platformFilter.name : 'All Platforms'}
        </Text>
        {isOpen &&
          <Dropdown ref={menuRef} data-control="true">
          <Text size='14px' style={{marginLeft: 10}} hover onClick={handleTop}>
            {!parentPlatform ? 'All Platforms' : 'Back'}
            
          </Text>
            <ParentContainer parentPlatform={parentPlatform}>
              {platforms.map(platform => 
                  <Platform 
                    key={platform.id}
                    platform={platform} 
                    handleClick={(platform) => {
                      setParentPlatform(platform)
                      if (platform.platforms.length === 1) handleSetPlatform('PARENT', platform.id, platform.name)
                    }}
                  />
                )
              }
              
            </ParentContainer>
            {parentPlatform && parentPlatform.platforms.map(platform => 
            <>
              <Platform 
                platform={platform}
                handleClick={(platform) => {
                  handleSetPlatform('CHILD', platform.id, platform.name)
                }}
                />
            </>
            )}
            {parentPlatform && <Platform 
                platform={parentPlatform} 
                customTitle="Select All"
                handleClick={(parentPlatform) => {
                  setParentPlatform(parentPlatform)
                  handleSetPlatform('PARENT', parentPlatform.id, parentPlatform.name)
                }}
              />}
          </Dropdown>
        }
      </Container>
    </Wrapper>
  )
}

const ParentContainer = styled.div`
  height: ${props => props.parentPlatform ? '0px': ''};
  overflow: hidden;
`;

let mapStateToProps = (state) => ({
  platforms: state.app.platforms,
  platformFilter: state.app.platformFilter
})

export default connect(mapStateToProps, { setPlatformFilter, loadGames, setPage })(FilterPlatforms)

const Dropdown = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #FFF;
  padding: 10px 0;
  background: ${props => props.DARK_BCG_COLOR};
  z-index: 10;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  /* box-shadow: 0 0 10px 5px #222; */
`;

const Wrapper = styled.div`
  margin-left: 10px;
`;

