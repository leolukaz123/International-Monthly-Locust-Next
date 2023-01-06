import React from 'react'

import PropTypes from 'prop-types'

const Summary = (props) => {
  return (
    <>
      <div className="summary-frame65">
        <div className="summary-frame64">
          <div className="summary-icon">
            <img
              alt={props.contract_alt}
              src={props.contract_src}
              className="summary-contract"
            />
          </div>
          <span className="summary-text">
            <span>Eliminate Debt</span>
          </span>
          <span className="summary-text2">
            <span>
              Remove the debt you have so that you can do other stuff with your
              money.
            </span>
          </span>
        </div>
        <div>Placeholder for widget timer</div>
      </div>
      <style jsx>
        {`
          .summary-frame65 {
            width: 345px;
            cursor: pointer;
            display: flex;
            padding: 28px 19px 28px 40px;
            position: relative;
            box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
            transition: 0.3s;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 10px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .summary-frame65:hover {
            box-shadow: 0px 4px 12px 0px rgba(32, 132, 216, 0.39);
          }
          .summary-frame64 {
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .summary-icon {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            margin-bottom: 20px;
          }
          .summary-contract {
            width: 50px;
            height: 50px;
            position: relative;
          }
          .summary-text {
            color: var(--dl-color-default-1e2f97);
            width: 187px;
            height: auto;
            font-size: 24px;
            align-self: auto;
            font-style: SemiBold;
            text-align: left;
            font-family: Raleway;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 20px;
            text-decoration: none;
          }
          .summary-text2 {
            color: rgba(0, 0, 0, 1);
            width: 258px;
            height: auto;
            font-size: 20px;
            align-self: auto;
            font-style: Light;
            text-align: left;
            font-family: Raleway;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

Summary.defaultProps = {
  contract_alt: 'contract1164',
  contract_src: '/playground_assets/contract1164-0rgl.svg',
}

Summary.propTypes = {
  contract_alt: PropTypes.string,
  contract_src: PropTypes.string,
}

export default Summary
