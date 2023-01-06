import React from 'react'

import PropTypes from 'prop-types'

const BankSelect = (props) => {
  return (
    <>
      <div
        className={`bank-select-enteryouremailadress ${props.rootClassName} `}
      >
        <div className="bank-select-frame1">
          <div className="bank-select-container">
            <svg viewBox="0 0 1024 1024" className="bank-select-icon">
              <path d="M214 170h596v128h-234v512h-128v-512h-234v-128z"></path>
            </svg>
            <input
              type="text"
              placeholder={props.Name}
              className="bank-select-textinput input Input"
            />
          </div>
          <div className="bank-select-container1">
            <svg
              viewBox="0 0 1097.142857142857 1024"
              className="bank-select-icon2"
            >
              <path d="M548.571 0l548.571 219.429v73.143h-73.143c0 20-17.714 36.571-39.429 36.571h-872c-21.714 0-39.429-16.571-39.429-36.571h-73.143v-73.143zM146.286 365.714h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h33.714c21.714 0 39.429 16.571 39.429 36.571v36.571h-950.857v-36.571c0-20 17.714-36.571 39.429-36.571h33.714v-438.857zM1057.714 914.286c21.714 0 39.429 16.571 39.429 36.571v73.143h-1097.143v-73.143c0-20 17.714-36.571 39.429-36.571h1018.286z"></path>
            </svg>
            <input
              type="text"
              placeholder={props.Owner}
              className="bank-select-textinput1 input Input"
            />
          </div>
          <div className="bank-select-container2">
            <svg viewBox="0 0 1024 1024" className="bank-select-icon4">
              <path d="M504 466q44 12 73 24t61 33 49 53 17 76q0 62-41 101t-109 51v92h-128v-92q-66-14-109-56t-47-108h94q8 90 126 90 62 0 89-23t27-53q0-72-128-104-200-46-200-176 0-58 42-99t106-55v-92h128v94q66 16 101 60t37 102h-94q-4-90-108-90-52 0-83 22t-31 58q0 58 128 92z"></path>
            </svg>
            <input
              type="number"
              placeholder={props.Amount}
              className="bank-select-textinput2 input Input"
            />
          </div>
        </div>
        <div className="bank-select-frame11">
          <div className="bank-select-container3">
            <svg viewBox="0 0 1024 1024" className="bank-select-icon6">
              <path d="M810 170v86h-596v-86h148l44-42h212l44 42h148zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .bank-select-enteryouremailadress {
            width: 100%;
            height: var(--dl-size-size-medium);
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
          .bank-select-frame1 {
            width: 60%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            margin-left: 0px;
            border-color: transparent;
            justify-content: space-between;
          }
          .bank-select-container {
            flex: 0 0 auto;
            width: 179px;
            height: 47px;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .bank-select-icon {
            width: 24px;
            height: 24px;
          }
          .bank-select-textinput {
            width: 157px;
            transition: 0.3s;
            border-width: 0px;
            border-radius: 0px;
          }
          .bank-select-textinput:focus {
            border-color: rgba(0, 0, 0, 0.17);
            border-bottom-width: 1px;
          }
          .bank-select-container1 {
            flex: 0 0 auto;
            width: 179px;
            height: 47px;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .bank-select-icon2 {
            width: 24px;
            height: 24px;
          }
          .bank-select-textinput1 {
            width: 157px;
            transition: 0.3s;
            border-width: 0px;
            border-radius: 0px;
          }
          .bank-select-textinput1:focus {
            border-color: rgba(0, 0, 0, 0.17);
            border-bottom-width: 1px;
          }
          .bank-select-container2 {
            flex: 0 0 auto;
            width: 179px;
            height: 47px;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .bank-select-icon4 {
            width: 24px;
            height: 24px;
          }
          .bank-select-textinput2 {
            width: 157px;
            transition: 0.3s;
            border-width: 0px;
            border-radius: 0px;
          }
          .bank-select-textinput2:focus {
            border-color: rgba(0, 0, 0, 0.17);
            border-bottom-width: 1px;
          }
          .bank-select-frame11 {
            width: 10%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 0px;
            justify-content: flex-end;
          }
          .bank-select-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 47px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .bank-select-icon6 {
            width: 24px;
            cursor: pointer;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }

          @media (max-width: 767px) {
            .bank-select-enteryouremailadress {
              width: 100%;
              flex-direction: row;
            }
            .bank-select-frame1 {
              width: 581px;
            }
            .bank-select-frame11 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .bank-select-enteryouremailadress {
              width: 100%;
              height: 189px;
            }
            .bank-select-frame1 {
              width: 100%;
              align-self: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .bank-select-container {
              align-self: flex-start;
              margin-left: var(--dl-space-space-unit);
            }
            .bank-select-container1 {
              align-self: flex-start;
              margin-left: var(--dl-space-space-unit);
            }
            .bank-select-container2 {
              align-self: flex-start;
              margin-left: var(--dl-space-space-unit);
            }
            .bank-select-frame11 {
              width: 67px;
              height: 52px;
              position: static;
              align-self: center;
              flex-direction: column;
            }
            .bank-select-container3 {
              top: 0px;
              right: 0px;
              width: 80px;
              position: absolute;
              justify-content: center;
            }
            .bank-select-icon6 {
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

BankSelect.defaultProps = {
  rootClassName: '',
  Name: 'Loan',
  Owner: 'Bank',
  Amount: '1000000',
}

BankSelect.propTypes = {
  rootClassName: PropTypes.string,
  Name: PropTypes.string,
  Owner: PropTypes.string,
  Amount: PropTypes.string,
}

export default BankSelect
