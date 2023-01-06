import React from 'react'

import PropTypes from 'prop-types'

import InputSearch from './input-search'

const SearchComponent = (props) => {
  return (
    <>
      <div className={`search-component-container ${props.rootClassName} `}>
        <div className="search-component-frame75">
          <div className="search-component-frame43">
            <div className="search-component-frame74">
              <div className="search-component-frame35">
                <img
                  alt="location1725"
                  src="/playground_assets/location1725-ing.svg"
                  className="search-component-location"
                />
                <div className="search-component-text-heading-subheading">
                  <span className="search-component-text heading1">
                    <span>ENTER ADDRESS</span>
                  </span>
                  <span className="search-component-text2 body1">
                    <span>
                      Write your address below to view property equity
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="search-component-frame44">
              <InputSearch rootClassName="input-search-root-class-name2"></InputSearch>
              <button className="search-component-largebutton">
                <img
                  alt="Rectangle684I172"
                  src="/playground_assets/rectangle684i172-7ti-200h.png"
                  className="search-component-rectangle684"
                />
                <span className="search-component-text4">
                  <span>Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .search-component-container {
            width: 1188px;
            height: 517px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .search-component-frame75 {
            width: 100%;
            height: auto;
            display: flex;
            padding: 26px 183px;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .search-component-frame43 {
            width: 1071px;
            height: 459px;
            display: flex;
            padding: 0 89px;
            overflow: hidden;
            position: relative;
            box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 5px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .search-component-frame74 {
            display: flex;
            padding: 10px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            margin-bottom: 0px;
            flex-direction: column;
          }
          .search-component-frame35 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .search-component-location {
            width: 50px;
            height: 50px;
            position: relative;
            margin-bottom: 20px;
          }
          .search-component-text-heading-subheading {
            width: 709px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .search-component-text {
            color: rgba(0, 0, 0, 1);
            width: 529px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 20px;
          }
          .search-component-text2 {
            color: rgba(0, 0, 0, 1);
            width: 526px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          .search-component-frame44 {
            width: 888px;
            display: flex;
            padding: 0 83px;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 5px;
            flex-direction: column;
          }
          .search-component-largebutton {
            width: 345px;
            height: 48px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
          }
          .search-component-rectangle684 {
            top: 0px;
            left: 0px;
            width: 345px;
            height: 48px;
            position: absolute;
            border-color: transparent;
            border-radius: 24px;
          }
          .search-component-text4 {
            top: 14px;
            left: 57.10344696044922px;
            color: rgba(255, 255, 255, 1);
            width: 236px;
            height: auto;
            position: absolute;
            font-size: 14px;
            align-self: auto;
            font-style: Medium;
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }

          @media (max-width: 479px) {
            .search-component-frame35 {
              width: 479px;
            }
            .search-component-frame44 {
              width: 479px;
            }
          }
        `}
      </style>
    </>
  )
}

SearchComponent.defaultProps = {
  rootClassName: '',
}

SearchComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default SearchComponent
