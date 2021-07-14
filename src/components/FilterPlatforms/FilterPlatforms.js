import React, { useState, useRef } from 'react'
import { connect } from 'react-redux';
import Platform from './Platform'
import useControlModal from '@hooks/useControlModal'
import { setPlatformFilter, loadGames, setPage } from '@redux/action-creators'
import { Container, Text } from '@shared';
import { Dropdown, Wrapper, ParentContainer, PlatformTitle } from './style.js' 

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
        <PlatformTitle hover size='13px' font='Montserrat' weight='400' onClick={() => setIsOpen(true)} data-control="true">
          {platformFilter ? platformFilter.name : 'All Platforms'}
        </PlatformTitle>
        {isOpen &&
          <Dropdown ref={menuRef} data-control="true">
          <Text size='14px' ml="10px" hover onClick={handleTop}>
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

let mapStateToProps = (state) => ({
  platforms: state.app.platforms,
  platformFilter: state.app.platformFilter
})

export default connect(mapStateToProps, { setPlatformFilter, loadGames, setPage })(FilterPlatforms)


