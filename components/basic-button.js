import React, { useState } from 'react'

import PropTypes from 'prop-types'

const BasicButton = (props) => {
  const [type, setType] = useState('Primary')
  return (
    <>
      <div className={`basic-button-container ${props.rootClassName} `}>
        <button type="button" className="basic-button-button Input button">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .basic-button-container {
            display: flex;
            position: relative;
          }
          .basic-button-button {
            color: rgb(255, 255, 255);
            cursor: pointer;
            height: 48px;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 24px;
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-default-1aa7ec2);
          }
          .basic-button-button:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .basic-button-root-class-name {
            margin-right: var(--dl-space-space-unit);
          }

          @media (max-width: 479px) {
            .basic-button-root-class-name {
              margin-right: 0px;
            }
            .basic-button-root-class-name1 {
              margin-right: 0px;
            }
            .basic-button-root-class-name2 {
              margin-right: 0px;
            }
            .basic-button-root-class-name3 {
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

BasicButton.defaultProps = {
  rootClassName: '',
  button: 'Pre-Qualify',
}

BasicButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default BasicButton
