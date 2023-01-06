import React from 'react'

import PropTypes from 'prop-types'

const ProgressBar = (props) => {
  return (
    <>
      <div className={`progress-bar-frame11 ${props.rootClassName} `}>
        <div className="progress-bar-frame12">
          <span className="progress-bar-text body1">{props.percentage}</span>
        </div>
      </div>
      <style jsx>
        {`
          .progress-bar-frame11 {
            width: var(--dl-size-size-xxlarge);
            height: 31px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 50px;
            margin-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-default-1aa7ec);
          }
          .progress-bar-frame12 {
            width: 50%;
            height: 100%;
            display: flex;
            padding: 2px 14px;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 50px 0 0 50px;
            background-color: var(--dl-color-default-7dd6f6);
          }
          .progress-bar-text {
            color: rgba(0, 0, 0, 1);
            width: 30px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          .progress-bar-root-class-name {
            top: 0.5px;
            left: 3px;
            position: absolute;
          }

          @media (max-width: 479px) {
            .progress-bar-frame11 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ProgressBar.defaultProps = {
  percentage: '30%',
  rootClassName: '',
}

ProgressBar.propTypes = {
  percentage: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ProgressBar
