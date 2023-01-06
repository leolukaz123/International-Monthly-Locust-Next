import React from 'react'

import PropTypes from 'prop-types'

const PhotoDetails = (props) => {
  return (
    <>
      <div
        className={`photo-details-enteryouremailadress ${props.rootClassName} `}
      >
        <div className="photo-details-frame1">
          <div className="photo-details-container">
            <div className="photo-details-container1">
              <svg viewBox="0 0 1024 1024" className="photo-details-icon">
                <path d="M512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM384 86h256l78 84h136q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h136zM376 512q0-56 40-96t96-40 96 40 40 96-40 96-96 40-96-40-40-96z"></path>
              </svg>
              <span className="photo-details-text body1">{props.text}</span>
              <select className="photo-details-select">
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <svg viewBox="0 0 1024 1024" className="photo-details-icon2">
              <path d="M810 170v86h-596v-86h148l44-42h212l44 42h148zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .photo-details-enteryouremailadress {
            width: 100%;
            height: 90px;
            display: flex;
            padding: 24px 0;
            position: relative;
            box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
            background-color: rgba(255, 255, 255, 1);
          }
          .photo-details-frame1 {
            width: 100%;
            display: flex;
            flex-shrink: 0;
            margin-left: 0px;
            border-color: transparent;
            flex-direction: column;
            justify-content: center;
          }
          .photo-details-container {
            flex: 0 0 auto;
            width: 100%;
            height: 47px;
            display: flex;
            align-items: center;
            margin-left: 0px;
            flex-direction: row;
            justify-content: space-between;
          }
          .photo-details-container1 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .photo-details-icon {
            width: 24px;
            height: 24px;
          }
          .photo-details-text {
            margin-left: var(--dl-space-space-unit);
          }
          .photo-details-select {
            width: var(--dl-size-size-large);
            margin-left: var(--dl-space-space-unit);
          }
          .photo-details-icon2 {
            width: 24px;
            cursor: pointer;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .photo-details-root-class-name1 {
            width: 100%;
          }
          .photo-details-root-class-name7 {
            width: 100%;
          }
          .photo-details-root-class-name8 {
            width: 100%;
          }
          .photo-details-root-class-name9 {
            width: 100%;
          }
          @media (max-width: 767px) {
            .photo-details-enteryouremailadress {
              width: 100%;
              flex-direction: row;
            }
            .photo-details-frame1 {
              width: 100%;
            }
            .photo-details-container1 {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .photo-details-enteryouremailadress {
              width: 100%;
              height: auto;
              flex-direction: row;
            }
            .photo-details-frame1 {
              width: 100%;
              align-self: center;
              align-items: center;
              margin-left: 0px;
              flex-direction: row;
            }
            .photo-details-container {
              width: 100%;
              height: 100%;
              align-self: flex-start;
              flex-direction: row;
              justify-content: space-between;
            }
            .photo-details-container1 {
              width: 70%;
              height: 86px;
              align-items: flex-start;
              margin-left: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .photo-details-text {
              margin-left: 0px;
            }
            .photo-details-select {
              width: 100%;
              margin-left: 0px;
            }
            .photo-details-icon2 {
              margin-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

PhotoDetails.defaultProps = {
  text: 'Licence Photo',
  rootClassName: '',
}

PhotoDetails.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default PhotoDetails
