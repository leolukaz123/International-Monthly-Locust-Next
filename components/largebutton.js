import React from 'react'

import PropTypes from 'prop-types'

const Largebutton = (props) => {
  return (
    <>
      <div className={`largebutton-container ${props.rootClassName} `}>
        <div className="largebutton-container1">
          <span className="largebutton-text Input">{props.text1}</span>
        </div>
      </div>
      <style jsx>
        {`
          .largebutton-container {
            cursor: pointer;
            display: flex;
            position: relative;
            transition: 0.3s;
            border-radius: 48px;
            background-color: var(--dl-color-default-1aa7ec1);
          }
          .largebutton-container:hover {
            background-color: rgba(26, 167, 236, 0.8);
          }
          .largebutton-container1 {
            flex: 0 0 auto;
            width: var(--dl-size-size-xxlarge);
            cursor: pointer;
            height: 48px;
            display: flex;
            min-width: var(--dl-size-size-xxlarge);
            align-items: center;
            border-radius: 48px;
            justify-content: center;
          }
          .largebutton-text {
            color: #ffffff;
          }
          .largebutton-root-class-name {
            align-self: center;
          }
          .largebutton-root-class-name1 {
            align-self: center;
          }
          .largebutton-root-class-name2 {
            align-self: center;
          }
          .largebutton-root-class-name3 {
            align-self: center;
          }
          .largebutton-root-class-name4 {
            align-self: center;
          }
          .largebutton-root-class-name5 {
            align-self: center;
          }
          .largebutton-root-class-name6 {
            align-self: center;
          }
          .largebutton-root-class-name7 {
            align-self: center;
          }
          .largebutton-root-class-name8 {
            align-self: center;
          }
          .largebutton-root-class-name9 {
            align-self: center;
          }
          .largebutton-root-class-name10 {
            align-self: center;
          }
          .largebutton-root-class-name11 {
            align-self: center;
          }
          .largebutton-root-class-name12 {
            align-self: center;
          }
          .largebutton-root-class-name13 {
            align-self: center;
          }
          .largebutton-root-class-name14 {
            align-self: center;
          }
          .largebutton-root-class-name15 {
            align-self: center;
          }
          .largebutton-root-class-name16 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name17 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name18 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name19 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name20 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name21 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name22 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name23 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name24 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name25 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name26 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name27 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name28 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name29 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name30 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name31 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name32 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name33 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name34 {
            margin-top: var(--dl-space-space-unit);
          }
          .largebutton-root-class-name35 {
            margin-top: var(--dl-space-space-unit);
          }
          @media (max-width: 479px) {
            .largebutton-container {
              flex-direction: column;
            }
            .largebutton-container1 {
              width: 100%;
              height: var(--dl-size-size-small);
              align-self: center;
              border-radius: 48px;
              flex-direction: column;
              justify-content: center;
              background-color: var(--dl-color-default-1aa7ec1);
            }
            .largebutton-text {
              width: 100%;
              align-self: center;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Largebutton.defaultProps = {
  rootClassName: '',
  text1: 'Next',
}

Largebutton.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default Largebutton
