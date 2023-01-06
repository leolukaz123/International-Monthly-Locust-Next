import React from 'react'

import PropTypes from 'prop-types'

const SummaryChart = (props) => {
  return (
    <>
      <div className={`summary-chart-container ${props.rootClassName} `}>
        <div className="summary-chart-enteryouremailadress">
          <div className="summary-chart-frame1">
            <div className="summary-chart-container1">
              <h1 className="summary-chart-text">{props.heading}</h1>
            </div>
            <div className="summary-chart-container2">
              <svg viewBox="0 0 1024 1024" className="summary-chart-icon">
                <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="summary-chart-container3">
          <li className="list-item">
            <span className="body1">{props.text}</span>
          </li>
          <li className="list-item">
            <span className="body1">{props.text4}</span>
          </li>
          <li className="list-item">
            <span className="body1">{props.text3}</span>
          </li>
          <li className="list-item">
            <span className="body1">{props.text2}</span>
          </li>
          <li className="list-item">
            <span className="body1">{props.text1}</span>
          </li>
        </div>
      </div>
      <style jsx>
        {`
          .summary-chart-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .summary-chart-enteryouremailadress {
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
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .summary-chart-frame1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: space-between;
          }
          .summary-chart-container1 {
            flex: 0 0 auto;
            width: 342px;
            height: 47px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .summary-chart-text {
            font-size: 28px;
            font-style: normal;
            font-family: Lato;
            font-weight: 300;
            margin-left: var(--dl-space-space-unit);
            font-stretch: normal;
          }
          .summary-chart-container2 {
            top: 0px;
            flex: 0 0 auto;
            right: var(--dl-space-space-unit);
            width: 62px;
            bottom: 0px;
            height: 49px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .summary-chart-icon {
            width: 24px;
            height: 24px;
          }
          .summary-chart-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }

          @media (max-width: 767px) {
            .summary-chart-container {
              align-items: center;
            }
            .summary-chart-enteryouremailadress {
              width: 100%;
            }
            .summary-chart-frame1 {
              width: 100%;
              position: static;
            }
            .summary-chart-container2 {
              top: 0px;
              bottom: 0px;
              margin: auto;
            }
          }
          @media (max-width: 479px) {
            .summary-chart-enteryouremailadress {
              width: 100%;
            }
            .summary-chart-frame1 {
              left: var(--dl-space-space-unit);
              width: 80%;
            }
            .summary-chart-container1 {
              width: 100%;
              justify-content: flex-start;
            }
            .summary-chart-text {
              font-size: 20px;
              margin-left: var(--dl-space-space-halfunit);
            }
            .summary-chart-icon {
              width: 19px;
              height: 19px;
              margin-left: 0px;
            }
            .summary-chart-container3 {
              align-items: flex-start;
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

SummaryChart.defaultProps = {
  text1: 'Text',
  text2: 'Text',
  text: 'Text',
  text3: 'Text',
  rootClassName: '',
  heading: 'Heading',
  text4: 'Text',
}

SummaryChart.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  text4: PropTypes.string,
}

export default SummaryChart
