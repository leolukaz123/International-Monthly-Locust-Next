import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Steps from '../components/steps'
import Largebutton from '../components/largebutton'
import BankSelect from '../components/bank-select'
import Footer from '../components/footer'

const ZApplication5PropertyInterests = (props) => {
  return (
    <>
      <div className="z-application5property-interests-container">
        <Head>
          <title>
            z-Application-5-Property-Interests - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="z-Application-5-Property-Interests - International Monthly Locust"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name14"></Navbar>
        <Steps></Steps>
        <div className="z-application5property-interests-container1">
          <div className="z-application5property-interests-frame43">
            <div className="z-application5property-interests-frame35">
              <img
                alt="location1745"
                src="/playground_assets/interests.svg"
                className="z-application5property-interests-location"
              />
              <div className="z-application5property-interests-text-heading-subheading">
                <span className="z-application5property-interests-text heading1">
                  PROPERTY INTERESTS
                </span>
                <span className="z-application5property-interests-text1 body1">
                  Add your property interests below
                </span>
              </div>
            </div>
            <div className="z-application5property-interests-frame79">
              <Link href="/z-application-6-application-confirmation">
                <a className="z-application5property-interests-link">
                  <Largebutton
                    rootClassName="largebutton-root-class-name12"
                    className="z-application5property-interests-component2"
                  ></Largebutton>
                </a>
              </Link>
            </div>
            <div className="z-application5property-interests-frame78">
              <div className="z-application5property-interests-container2">
                <div className="z-application5property-interests-container3">
                  <BankSelect rootClassName="bank-select-root-class-name"></BankSelect>
                  <BankSelect rootClassName="bank-select-root-class-name3"></BankSelect>
                  <BankSelect rootClassName="bank-select-root-class-name2"></BankSelect>
                  <BankSelect rootClassName="bank-select-root-class-name1"></BankSelect>
                </div>
              </div>
            </div>
            <span className="z-application5property-interests-text2">
              Add Property Interest +
            </span>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name14"></Footer>
      </div>
      <style jsx>
        {`
          .z-application5property-interests-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .z-application5property-interests-container1 {
            width: 100%;
            height: auto;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            justify-content: center;
          }
          .z-application5property-interests-frame43 {
            width: 913px;
            height: 767px;
            display: flex;
            padding: 0 89px;
            overflow: hidden;
            position: relative;
            align-self: flex-start;
            box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 5px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .z-application5property-interests-frame35 {
            top: var(--dl-space-space-twounits);
            left: 102px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application5property-interests-location {
            width: 50px;
            height: 50px;
            position: relative;
            margin-bottom: 20px;
          }
          .z-application5property-interests-text-heading-subheading {
            width: 709px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application5property-interests-text {
            color: rgba(0, 0, 0, 1);
            width: 529px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 20px;
          }
          .z-application5property-interests-text1 {
            color: rgba(0, 0, 0, 1);
            width: 526px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          .z-application5property-interests-frame79 {
            left: 0px;
            right: 0px;
            bottom: var(--dl-space-space-unit);
            margin: auto;
            display: flex;
            padding: 10px;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .z-application5property-interests-link {
            display: contents;
          }
          .z-application5property-interests-component2 {
            text-decoration: none;
          }
          .z-application5property-interests-frame78 {
            top: 197px;
            left: 92px;
            height: 237px;
            display: flex;
            padding: 10px;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application5property-interests-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .z-application5property-interests-container3 {
            top: var(--dl-space-space-unit);
            flex: 0 0 auto;
            left: 0px;
            height: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .z-application5property-interests-text2 {
            left: 0px;
            right: 0px;
            bottom: var(--dl-space-space-sixunits);
            cursor: pointer;
            margin: auto;
            position: absolute;
            text-align: center;
            transition: 0.3s;
          }
          .z-application5property-interests-text2:hover {
            color: var(--dl-color-default-1aa7ec1);
          }
          @media (max-width: 991px) {
            .z-application5property-interests-frame43 {
              width: 893px;
            }
          }
          @media (max-width: 767px) {
            .z-application5property-interests-frame43 {
              width: 697px;
            }
            .z-application5property-interests-frame35 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .z-application5property-interests-frame78 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .z-application5property-interests-container3 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .z-application5property-interests-container1 {
              height: 806px;
            }
            .z-application5property-interests-frame43 {
              width: 100%;
              height: 806px;
            }
            .z-application5property-interests-frame78 {
              width: 479px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ZApplication5PropertyInterests
