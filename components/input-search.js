import React from 'react'

import PropTypes from 'prop-types'

const InputSearch = (props) => {
  return (
    <>
      <div className={`input-search-input-search ${props.rootClassName} `}>
        <div className="input-search-frame70">
          <div className="input-search-frame1">
            <div className="input-search-frame71">
              <div className="input-search-enteryouremailadress">
                <div className="input-search-enteryouremailadress1">
                  <div className="input-search-frame6">
                    <div className="input-search-group1683">
                      <img
                        alt={props.Vector_alt}
                        src={props.Vector_src2}
                        className="input-search-vector"
                      />
                      <img
                        alt={props.Vector_alt1}
                        src={props.Vector_src1}
                        className="input-search-vector1"
                      />
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder={props.textinput_placeholder}
                    className="input-search-textinput Input input"
                  />
                </div>
              </div>
              <button className="input-search-smallbutton">
                <img
                  alt={props.Rectangle684_alt}
                  src={props.Rectangle684_src}
                  className="input-search-rectangle684"
                />
                <span className="input-search-text body1">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .input-search-input-search {
            width: 100%;
            height: auto;
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
          .input-search-frame70 {
            width: 100%;
            display: flex;
            padding: 10px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .input-search-frame1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: space-between;
          }
          .input-search-frame71 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            justify-content: center;
          }
          .input-search-enteryouremailadress {
            width: 100%;
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
            margin-right: 0px;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: row;
            justify-content: flex-start;
            background-color: transparent;
          }
          .input-search-enteryouremailadress1 {
            top: 0px;
            left: 0px;
            width: 401px;
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
          .input-search-frame6 {
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
          .input-search-group1683 {
            top: 5.5px;
            left: 0px;
            right: 0px;
            width: 16.59000015258789px;
            height: 12.710000038146973px;
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
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: row;
            justify-content: flex-start;
            background-color: transparent;
          }
          .input-search-vector {
            top: 0px;
            left: 0px;
            width: 17px;
            height: 13px;
            position: absolute;
          }
          .input-search-vector1 {
            top: 0.6300048828125px;
            left: 0.35009765625px;
            width: 16px;
            height: 5px;
            position: absolute;
          }
          .input-search-textinput {
            width: 100%;
            height: 100%;
            border-width: 0px;
            padding-left: 34px;
          }
          .input-search-smallbutton {
            width: 156px;
            height: 48px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
          }
          .input-search-rectangle684 {
            top: 0px;
            left: 0px;
            width: 156px;
            height: 48px;
            position: absolute;
            transition: 0.3s;
            border-color: transparent;
            border-radius: 24px;
          }
          .input-search-rectangle684:hover {
            cursor: pointer;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .input-search-text {
            top: 14px;
            left: 25.820690155029297px;
            color: rgb(255, 255, 255);
            width: 107px;
            height: auto;
            position: absolute;
            align-self: auto;
            text-align: center;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .input-search-root-class-name {
            margin-top: var(--dl-space-space-twounits);
          }

          .input-search-root-class-name2 {
            margin-bottom: var(--dl-space-space-twounits);
          }

          @media (max-width: 767px) {
            .input-search-textinput {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .input-search-input-search {
              width: 100%;
              align-items: center;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
            }
            .input-search-frame70 {
              width: 100%;
              align-self: center;
              align-items: center;
              margin-right: 0px;
            }
            .input-search-frame1 {
              width: 100%;
              align-self: stretch;
              justify-content: center;
            }
            .input-search-frame71 {
              width: 100%;
              height: 101px;
              flex-direction: column;
              justify-content: flex-start;
            }
            .input-search-enteryouremailadress1 {
              width: 100%;
            }
            .input-search-frame6 {
              display: none;
            }
            .input-search-group1683 {
              margin-left: 0px;
            }
            .input-search-textinput {
              width: 100%;
              text-align: center;
              padding-left: 0px;
              border-radius: 0px;
              padding-right: 0px;
              border-bottom-width: 1px;
            }
            .input-search-smallbutton {
              width: var(--dl-size-size-large);
              margin-top: var(--dl-space-space-twounits);
            }
            .input-search-rectangle684 {
              width: 100%;
              margin-right: 0px;
            }
            .input-search-text {
              top: 13px;
              left: 0px;
              color: rgb(255, 255, 255);
              right: 0px;
              margin: auto;
              font-size: 14px;
              font-family: Poppins;
              font-weight: 500;
              line-height: normal;
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

InputSearch.defaultProps = {
  Vector_src1: '/playground_assets/vector1645-xqtm.svg',
  textinput_placeholder: 'placeholder',
  Vector_alt: 'Vector1645',
  Vector_alt1: 'Vector1645',
  Vector_src2: '/playground_assets/vector1645-yva.svg',
  Rectangle684_alt: 'Rectangle684I164',
  Vector_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e6d072cd-d25b-489f-a354-bab49e1c0b7d/59f6ba72-cf67-46a4-898d-e9a146ac1879?org_if_sml=1378',
  Rectangle684_src: '/playground_assets/rectangle684i164-kgzu-200h.png',
  rootClassName: '',
}

InputSearch.propTypes = {
  Vector_src1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  Vector_alt: PropTypes.string,
  Vector_alt1: PropTypes.string,
  Vector_src2: PropTypes.string,
  Rectangle684_alt: PropTypes.string,
  Vector_src: PropTypes.string,
  Rectangle684_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default InputSearch
