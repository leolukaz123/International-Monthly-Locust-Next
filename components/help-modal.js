import React from 'react'

import PropTypes from 'prop-types'

const HelpModal = (props) => {
  return (
    <>
      <div className={`help-modal-help-modal ${props.rootClassName} `}>
        <div className="help-modal-container"></div>
      </div>
      <style jsx>
        {`
          .help-modal-help-modal {
            flex: 0 0 auto;
            width: 100vw;
            height: 100vh;
            display: flex;
            z-index: 9999999;
            position: relative;
            box-shadow: 5px 5px 10px 0px #000000;
            align-items: center;
            justify-content: center;
            background-color: rgba(89, 89, 89, 0.7);
          }
          .help-modal-container {
            flex: 0 0 auto;
            width: 800px;
            height: 400px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            margin-right: var(--dl-space-space-sixunits);
            border-radius: 10px;
            justify-content: center;
            background-color: #d9d9d9;
          }
        `}
      </style>
    </>
  )
}

HelpModal.defaultProps = {
  rootClassName: '',
}

HelpModal.propTypes = {
  rootClassName: PropTypes.string,
}

export default HelpModal
