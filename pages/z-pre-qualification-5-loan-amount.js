import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Steps from '../components/steps'
import Largebutton from '../components/largebutton'
import SelectPrice from '../components/select-price'
import Footer from '../components/footer'

const ZPreQualification5LoanAmount = (props) => {
  return (
    <>
      <div className="z-pre-qualification5loan-amount-container">
        <Head>
          <title>
            z-Pre-Qualification-5-Loan-Amount - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="z-Pre-Qualification-5-Loan-Amount - International Monthly Locust"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name6"></Navbar>
        <Steps></Steps>
        <div className="z-pre-qualification5loan-amount-container1">
          <div className="z-pre-qualification5loan-amount-frame43">
            <div className="z-pre-qualification5loan-amount-frame35">
              <img
                alt="location1745"
                src="/playground_assets/property_value.svg"
                className="z-pre-qualification5loan-amount-location"
              />
              <div className="z-pre-qualification5loan-amount-text-heading-subheading">
                <span className="z-pre-qualification5loan-amount-text heading1">
                  LOAN AMOUNT
                </span>
                <span className="z-pre-qualification5loan-amount-text1 body1">
                  <span>Write your address below to view property equity</span>
                </span>
              </div>
            </div>
            <div className="z-pre-qualification5loan-amount-frame79">
              <Link href="/z-pre-qualification-6-i-d-verification">
                <a className="z-pre-qualification5loan-amount-link">
                  <Largebutton
                    rootClassName="largebutton-root-class-name4"
                    className="z-pre-qualification5loan-amount-component2"
                  ></Largebutton>
                </a>
              </Link>
            </div>
            <div className="z-pre-qualification5loan-amount-frame78">
              <div className="z-pre-qualification5loan-amount-container2">
                <div className="z-pre-qualification5loan-amount-container3">
                  <SelectPrice rootClassName="select-price-root-class-name2"></SelectPrice>
                  <div className="z-pre-qualification5loan-amount-frame76">
                    <span className="z-pre-qualification5loan-amount-text3 body1">
                      You would like to borrow 20% of your potential equity
                    </span>
                    <div className="z-pre-qualification5loan-amount-progressbar">
                      <div className="z-pre-qualification5loan-amount-frame11">
                        <div className="z-pre-qualification5loan-amount-frame12">
                          <span className="z-pre-qualification5loan-amount-text4 body1">
                            20%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name5"></Footer>
      </div>
      <style jsx>
        {`
          .z-pre-qualification5loan-amount-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .z-pre-qualification5loan-amount-container1 {
            width: 100%;
            height: 509px;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            justify-content: center;
          }
          .z-pre-qualification5loan-amount-frame43 {
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
          .z-pre-qualification5loan-amount-frame35 {
            top: var(--dl-space-space-twounits);
            left: 102px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification5loan-amount-location {
            width: 50px;
            height: 50px;
            position: relative;
            margin-bottom: 20px;
          }
          .z-pre-qualification5loan-amount-text-heading-subheading {
            width: 709px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification5loan-amount-text {
            color: rgba(0, 0, 0, 1);
            width: 529px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 20px;
          }
          .z-pre-qualification5loan-amount-text1 {
            color: rgba(0, 0, 0, 1);
            width: 526px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          .z-pre-qualification5loan-amount-frame79 {
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
          .z-pre-qualification5loan-amount-link {
            display: contents;
          }
          .z-pre-qualification5loan-amount-component2 {
            text-decoration: none;
          }
          .z-pre-qualification5loan-amount-frame78 {
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
          .z-pre-qualification5loan-amount-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .z-pre-qualification5loan-amount-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 114px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .z-pre-qualification5loan-amount-frame76 {
            width: 100%;
            height: 89px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification5loan-amount-text3 {
            color: rgba(0, 0, 0, 1);
            width: 526px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 20px;
          }
          .z-pre-qualification5loan-amount-progressbar {
            width: 346px;
            height: 28px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
          }
          .z-pre-qualification5loan-amount-frame11 {
            top: 0.5px;
            left: 3px;
            width: 343px;
            height: 31px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 50px;
            background-color: var(--dl-color-default-1aa7ec);
          }
          .z-pre-qualification5loan-amount-frame12 {
            width: 66px;
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
          .z-pre-qualification5loan-amount-text4 {
            color: rgba(0, 0, 0, 1);
            width: 30px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          @media (max-width: 991px) {
            .z-pre-qualification5loan-amount-frame43 {
              width: 893px;
            }
          }
          @media (max-width: 767px) {
            .z-pre-qualification5loan-amount-frame43 {
              width: 697px;
            }
            .z-pre-qualification5loan-amount-frame35 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .z-pre-qualification5loan-amount-frame78 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
          }
          @media (max-width: 479px) {
            .z-pre-qualification5loan-amount-frame43 {
              width: 100%;
            }
            .z-pre-qualification5loan-amount-frame78 {
              width: 479px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ZPreQualification5LoanAmount
