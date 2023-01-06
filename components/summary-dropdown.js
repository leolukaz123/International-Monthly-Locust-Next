import React from 'react'

import PropTypes from 'prop-types'

const SummaryDropdown = (props) => {
  return (
    <>
      <div
        className={`summary-dropdown-enteryouremailadress ${props.rootClassName} `}
      >
        <div className="summary-dropdown-frame1">
          <div className="summary-dropdown-container">
            <svg viewBox="0 0 1024 1024" className="summary-dropdown-icon">
              <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
            </svg>
            <input
              type="text"
              placeholder={props.Name}
              className="summary-dropdown-textinput input"
            />
          </div>
          <div className="summary-dropdown-container1">
            <svg viewBox="0 0 1024 1024" className="summary-dropdown-icon2">
              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .summary-dropdown-enteryouremailadress {
            width: 710px;
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
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .summary-dropdown-frame1 {
            top: 21px;
            left: 43.5px;
            width: 623px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: space-between;
          }
          .summary-dropdown-container {
            flex: 0 0 auto;
            width: 179px;
            height: 47px;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .summary-dropdown-icon {
            width: 24px;
            height: 24px;
          }
          .summary-dropdown-textinput {
            width: 157px;
            transition: 0.3s;
            border-width: 0px;
            border-radius: 0px;
          }
          .summary-dropdown-textinput:focus {
            border-color: rgba(0, 0, 0, 0.17);
            border-bottom-width: 1px;
          }
          .summary-dropdown-container1 {
            flex: 0 0 auto;
            width: 28px;
            height: 47px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .summary-dropdown-icon2 {
            width: 24px;
            height: 24px;
          }
          @media (max-width: 767px) {
            .summary-dropdown-enteryouremailadress {
              width: 647px;
            }
            .summary-dropdown-frame1 {
              width: 581px;
            }
          }
          @media (max-width: 479px) {
            .summary-dropdown-enteryouremailadress {
              width: 468px;
            }
            .summary-dropdown-frame1 {
              width: 406px;
            }
          }
        `}
      </style>
    </>
  )
}

SummaryDropdown.defaultProps = {
  rootClassName: '',
  Name: 'Loan',
}

SummaryDropdown.propTypes = {
  rootClassName: PropTypes.string,
  Name: PropTypes.string,
}

export default SummaryDropdown
