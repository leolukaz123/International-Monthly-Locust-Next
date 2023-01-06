import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Steps from '../components/steps'
import Largebutton from '../components/largebutton'
import SelectPrice from '../components/select-price'
import ProgressBar from '../components/progress-bar'
import Footer from '../components/footer'

const ZPreQualification4MortgageBalance = (props) => {
  return (
    <>
      <div className="z-pre-qualification4mortgage-balance-container">
        <Head>
          <title>
            z-Pre-Qualification-4-Mortgage-Balance - International Monthly
            Locust
          </title>
          <meta
            property="og:title"
            content="z-Pre-Qualification-4-Mortgage-Balance - International Monthly Locust"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name5"></Navbar>
        <Steps></Steps>
        <div className="z-pre-qualification4mortgage-balance-container1">
          <div className="z-pre-qualification4mortgage-balance-frame43">
            <div className="z-pre-qualification4mortgage-balance-frame35">
              <img
                alt="location1745"
                src="/playground_assets/property_value.svg"
                className="z-pre-qualification4mortgage-balance-location"
              />
              <div className="z-pre-qualification4mortgage-balance-text-heading-subheading">
                <span className="z-pre-qualification4mortgage-balance-text heading1">
                  MORTGAGE BALANCE
                </span>
                <span className="z-pre-qualification4mortgage-balance-text1 body1">
                  <span>Write your address below to view property equity</span>
                </span>
              </div>
            </div>
            <div className="z-pre-qualification4mortgage-balance-frame79">
              <Link href="/z-pre-qualification-5-loan-amount">
                <a className="z-pre-qualification4mortgage-balance-link">
                  <Largebutton
                    rootClassName="largebutton-root-class-name3"
                    className="z-pre-qualification4mortgage-balance-component2"
                  ></Largebutton>
                </a>
              </Link>
            </div>
            <div className="z-pre-qualification4mortgage-balance-frame78">
              <div className="z-pre-qualification4mortgage-balance-container2">
                <div className="z-pre-qualification4mortgage-balance-container3">
                  <SelectPrice rootClassName="select-price-root-class-name1"></SelectPrice>
                  <div className="z-pre-qualification4mortgage-balance-frame76">
                    <span className="z-pre-qualification4mortgage-balance-text3 body1">
                      <span>You have currently own 50% of your property</span>
                    </span>
                    <div className="z-pre-qualification4mortgage-balance-progressbar">
                      <ProgressBar rootClassName="progress-bar-root-class-name"></ProgressBar>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
      <style jsx>
        {`
          .z-pre-qualification4mortgage-balance-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .z-pre-qualification4mortgage-balance-container1 {
            width: 100%;
            height: 509px;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            justify-content: center;
          }
          .z-pre-qualification4mortgage-balance-frame43 {
            width: 913px;
            height: 506px;
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
          .z-pre-qualification4mortgage-balance-frame35 {
            top: var(--dl-space-space-twounits);
            left: 102px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification4mortgage-balance-location {
            width: 50px;
            height: 50px;
            position: relative;
            margin-bottom: 20px;
          }
          .z-pre-qualification4mortgage-balance-text-heading-subheading {
            width: 709px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification4mortgage-balance-text {
            color: rgba(0, 0, 0, 1);
            width: 529px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 20px;
          }
          .z-pre-qualification4mortgage-balance-text1 {
            color: rgba(0, 0, 0, 1);
            width: 526px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          .z-pre-qualification4mortgage-balance-frame79 {
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
          .z-pre-qualification4mortgage-balance-link {
            display: contents;
          }
          .z-pre-qualification4mortgage-balance-component2 {
            text-decoration: none;
          }
          .z-pre-qualification4mortgage-balance-frame78 {
            top: 197px;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 143px;
            margin: auto;
            display: flex;
            padding: 10px;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification4mortgage-balance-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .z-pre-qualification4mortgage-balance-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 140px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .z-pre-qualification4mortgage-balance-frame76 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification4mortgage-balance-text3 {
            color: rgba(0, 0, 0, 1);
            width: 526px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 20px;
          }
          .z-pre-qualification4mortgage-balance-progressbar {
            width: 346px;
            height: 28px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
          }
          @media (max-width: 991px) {
            .z-pre-qualification4mortgage-balance-frame43 {
              width: 893px;
            }
          }
          @media (max-width: 767px) {
            .z-pre-qualification4mortgage-balance-frame43 {
              width: 697px;
            }
            .z-pre-qualification4mortgage-balance-frame35 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .z-pre-qualification4mortgage-balance-frame78 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
          }
          @media (max-width: 479px) {
            .z-pre-qualification4mortgage-balance-frame43 {
              width: 100%;
            }
            .z-pre-qualification4mortgage-balance-frame78 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default ZPreQualification4MortgageBalance
