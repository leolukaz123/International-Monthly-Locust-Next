import React from 'react'

import PropTypes from 'prop-types'

const MapSearch = (props) => {
  return (
    <>
      <div
        className={`map-search-enteryouremailadress ${props.rootClassName} `}
      >
        <div className="map-search-frame1">
          <div className="map-search-container">
            <svg viewBox="0 0 1024 1024" className="map-search-icon">
              <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
            </svg>
            <input
              type="text"
              placeholder={props.Input_placeholder1}
              className="map-search-input Input"
            />
          </div>
          <div className="map-search-container1">
            <svg viewBox="0 0 1024 1024" className="map-search-icon2">
              <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .map-search-enteryouremailadress {
            width: 100%;
            height: var(--dl-size-size-medium);
            display: flex;
            padding: 24px 0;
            position: relative;
            box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .map-search-frame1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: space-between;
          }
          .map-search-container {
            flex: 0 0 auto;
            width: 80%;
            height: 47px;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .map-search-icon {
            fill: var(--dl-color-default-1aa7ec1);
            width: 24px;
            height: 24px;
          }
          .map-search-input {
            width: 100%;
            transition: 0.3s;
            border-width: 0px;
            border-radius: 0px;
          }
          .map-search-container1 {
            flex: 0 0 auto;
            width: 48px;
            cursor: pointer;
            height: 48px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            border-radius: 48px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-1aa7ec1);
          }
          .map-search-container1:hover {
            background-color: rgba(26, 167, 236, 0.8);
          }
          .map-search-icon2 {
            fill: #ffffff;
            width: 24px;
            height: 24px;
          }

          @media (max-width: 767px) {
            .map-search-enteryouremailadress {
              width: 100%;
            }
            .map-search-frame1 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .map-search-enteryouremailadress {
              width: 320px;
              height: var(--dl-size-size-large);
            }
            .map-search-frame1 {
              left: 0px;
              right: 0px;
              width: 100%;
              height: 100%;
              position: static;
              margin-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .map-search-container {
              width: 100%;
              height: auto;
              margin-left: 0px;
              flex-direction: column;
            }
            .map-search-icon {
              height: auto;
              margin-bottom: var(--dl-space-space-unit);
            }
            .map-search-input {
              text-align: center;
            }
            .map-search-container1 {
              margin-top: var(--dl-space-space-unit);
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

MapSearch.defaultProps = {
  Input_placeholder1: 'enter your address',
  rootClassName: '',
}

MapSearch.propTypes = {
  Input_placeholder1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default MapSearch
