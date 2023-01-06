import React from 'react'

import PropTypes from 'prop-types'

const Confidence = (props) => {
  return (
    <>
      <div className={`confidence-container ${props.rootClassName} `}>
        <div className="confidence-container1"></div>
        <span className="confidence-text body1">{props.text}</span>
      </div>
      <style jsx>
        {`
          .confidence-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .confidence-container1 {
            flex: 0 0 auto;
            width: 15px;
            height: 15px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: #ff0000;
          }
          .confidence-text {
            margin-left: var(--dl-space-space-unit);
          }
          .confidence-root-class-name {
            display: none;
          }
        `}
      </style>
    </>
  )
}

Confidence.defaultProps = {
  text: 'Low Confidence',
  rootClassName: '',
}

Confidence.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Confidence
