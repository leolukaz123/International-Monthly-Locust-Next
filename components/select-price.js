import React from 'react'

import PropTypes from 'prop-types'

const SelectPrice = (props) => {
  return (
    <>
      <div
        className={`select-price-enteryouremailadress ${props.rootClassName} `}
      >
        <div className="select-price-frame1">
          <div className="select-price-container roundButton">
            <span className="select-price-text body1">-</span>
          </div>
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            className="select-price-textinput Input"
          />
          <div className="select-price-container1 roundButton">
            <span className="select-price-text1 body1">+</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .select-price-enteryouremailadress {
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
            flex-direction: column;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .select-price-frame1 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 512;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: space-between;
          }
          .select-price-container {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .select-price-text {
            color: #ffffff;
          }
          .select-price-textinput {
            width: 357px;
            font-style: normal;
            text-align: center;
          }
          .select-price-container1 {
            flex: 0 0 auto;
            width: 48;
            height: 48;
            display: flex;
            align-items: center;
            border-radius: 48px;
            justify-content: center;
            background-color: var(--dl-color-default-1e2f97);
          }
          .select-price-text1 {
            color: #ffffff;
          }

          .select-price-root-class-name3 {
            margin-top: var(--dl-space-space-twounits);
          }

          @media (max-width: 1200px) {
            .select-price-root-class-name3 {
              left: 102px;
              bottom: var(--dl-space-space-sixunits);
              position: static;
              margin-top: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 991px) {
            .select-price-frame1 {
              width: 499px;
            }
          }
          @media (max-width: 767px) {
            .select-price-enteryouremailadress {
              width: 100%;
            }
            .select-price-frame1 {
              width: 467px;
            }
          }
          @media (max-width: 479px) {
            .select-price-enteryouremailadress {
              width: 100%;
            }
            .select-price-frame1 {
              width: 80%;
              margin-left: 0px;
              margin-right: 0px;
              justify-content: center;
            }
            .select-price-textinput {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  )
}

SelectPrice.defaultProps = {
  textinput_placeholder: 'placeholder',
  rootClassName: '',
}

SelectPrice.propTypes = {
  textinput_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SelectPrice
