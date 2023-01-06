import React from 'react'

import PropTypes from 'prop-types'

const UploadComponent = (props) => {
  return (
    <>
      <div
        className={`upload-component-upload-component ${props.rootClassName} `}
      >
        <button className="upload-component-circularbutton">
          <img
            alt="Rectangle684I464"
            src={props.image}
            className="upload-component-rectangle684"
          />
          <span className="upload-component-text">{props.text}</span>
        </button>
        <span className="upload-component-text1 subheading">{props.text1}</span>
        <select className="upload-component-select">
          <option value="Licence">Licence</option>
          <option value="Passport">Passport</option>
          <option value="Medicare">Medicare</option>
        </select>
        <svg viewBox="0 0 1024 1024" className="upload-component-icon">
          <path d="M512 256q70 0 120 50t50 120q0 54-64 111t-64 103h-84q0-46 20-79t44-48 44-37 20-50q0-34-26-59t-60-25-60 25-26 59h-84q0-70 50-120t120-50zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 768v-86h84v86h-84z"></path>
        </svg>
      </div>
      <style jsx>
        {`
          .upload-component-upload-component {
            width: 100%;
            height: auto;
            display: flex;
            padding: 40px 104px;
            overflow: hidden;
            position: relative;
            box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .upload-component-circularbutton {
            width: 48px;
            height: 48px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 100px;
            margin-bottom: 10px;
          }
          .upload-component-rectangle684 {
            top: 0px;
            left: 0px;
            width: 48px;
            height: 48px;
            position: absolute;
            border-color: transparent;
            border-radius: 100px;
          }
          .upload-component-text {
            top: 14px;
            left: 7.944827556610107px;
            color: rgba(255, 255, 255, 1);
            width: 33px;
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
          .upload-component-text1 {
            color: rgba(0, 0, 0, 1);
            width: 328px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          .upload-component-select {
            width: 345px;
            height: 48px;
            margin-top: var(--dl-space-space-unit);
          }
          .upload-component-icon {
            top: var(--dl-space-space-unit);
            fill: var(--dl-color-default-1aa7ec1);
            right: var(--dl-space-space-unit);
            width: 24px;
            cursor: pointer;
            height: 24px;
            position: absolute;
            transition: 0.3s;
          }
          .upload-component-icon:hover {
            opacity: 0.8;
          }

          @media (max-width: 479px) {
            .upload-component-upload-component {
              width: 100%;
              height: 169px;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
            }
            .upload-component-select {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

UploadComponent.defaultProps = {
  image: '/playground_assets/rectangle684i464-5y2-200w.png',
  text1: 'Add Selfie',
  rootClassName: '',
  text: '+',
}

UploadComponent.propTypes = {
  image: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default UploadComponent
