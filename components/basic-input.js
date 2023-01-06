import React from 'react'

import PropTypes from 'prop-types'

const BasicInput = (props) => {
  return (
    <>
      <div className={`basic-input-input-search ${props.rootClassName} `}>
        <div className="basic-input-frame70">
          <div className="basic-input-frame1">
            <div className="basic-input-frame71">
              <div className="basic-input-enteryouremailadress">
                <div className="basic-input-enteryouremailadress1">
                  <div className="basic-input-frame6">
                    <img
                      alt={props.image_alt}
                      src={props.image_src}
                      className="basic-input-image"
                    />
                    <svg viewBox="0 0 1024 1024" className="basic-input-icon">
                      <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="basic-input-icon2">
                      <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder={props.textinput_placeholder}
                    className="basic-input-textinput input Input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .basic-input-input-search {
            width: 100%;
            height: var(--dl-size-size-medium);
            display: flex;
            padding: 21px 44px;
            position: relative;
            box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .basic-input-frame70 {
            display: flex;
            padding: 10px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .basic-input-frame1 {
            width: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: space-between;
          }
          .basic-input-frame71 {
            width: auto;
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
          }
          .basic-input-enteryouremailadress {
            width: auto;
            height: 24px;
            display: flex;
            padding: 0;
            position: relative;
            align-self: auto;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
            border-style: none;
            border-width: 0;
            margin-right: 253px;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: row;
            justify-content: flex-start;
            background-color: transparent;
          }
          .basic-input-enteryouremailadress1 {
            top: 0px;
            left: 0px;
            width: auto;
            bottom: 0px;
            height: 36px;
            margin: auto;
            display: flex;
            padding: 0;
            position: absolute;
            align-self: auto;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
            border-style: none;
            border-width: 0;
            border-radius: 0px 0px 0px 0px;
            flex-direction: row;
            justify-content: flex-start;
            background-color: transparent;
          }
          .basic-input-frame6 {
            top: 0px;
            left: 0px;
            width: 24px;
            bottom: 0px;
            height: 24px;
            margin: auto;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
          }
          .basic-input-image {
            width: 24px;
            height: 24px;
            object-fit: cover;
          }
          .basic-input-icon {
            width: 24px;
            height: 24px;
          }
          .basic-input-icon2 {
            width: 24px;
            height: 24px;
          }
          .basic-input-textinput {
            width: 478px;
            height: 100%;
            border-width: 0px;
            padding-left: 34px;
          }

          @media (max-width: 767px) {
            .basic-input-textinput {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .basic-input-input-search {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .basic-input-frame70 {
              width: auto;
            }
            .basic-input-frame1 {
              width: auto;
            }
            .basic-input-frame71 {
              width: auto;
            }
            .basic-input-frame6 {
              width: auto;
            }
            .basic-input-textinput {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

BasicInput.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  textinput_placeholder: 'placeholder',
}

BasicInput.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default BasicInput
