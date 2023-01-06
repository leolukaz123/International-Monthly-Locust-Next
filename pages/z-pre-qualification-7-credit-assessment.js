import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Steps from '../components/steps'
import SelectPrice from '../components/select-price'
import Largebutton from '../components/largebutton'
import Footer from '../components/footer'

const ZPreQualification7CreditAssessment = (props) => {
  return (
    <>
      <div className="z-pre-qualification7credit-assessment-container">
        <Head>
          <title>
            z-Pre-Qualification-7-Credit-Assessment - International Monthly
            Locust
          </title>
          <meta
            property="og:title"
            content="z-Pre-Qualification-7-Credit-Assessment - International Monthly Locust"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name8"></Navbar>
        <Steps></Steps>
        <div className="z-pre-qualification7credit-assessment-container1">
          <div className="z-pre-qualification7credit-assessment-frame43">
            <div className="z-pre-qualification7credit-assessment-frame35">
              <img
                src="/playground_assets/credit_score.svg"
                className="z-pre-qualification7credit-assessment-location"
              />
              <div className="z-pre-qualification7credit-assessment-text-heading-subheading">
                <span className="z-pre-qualification7credit-assessment-text heading1">
                  CREDIT SCORE
                </span>
                <span className="z-pre-qualification7credit-assessment-text1">
                  Congratulations, we have been able to verify your credit score
                  is 842. This is an average rating and means that you can
                  potentially borrow up to $200,000 based on your property
                  value.
                </span>
                <span className="z-pre-qualification7credit-assessment-text2 heading1">
                  842
                </span>
                <span className="z-pre-qualification7credit-assessment-text3">
                  Congratulations, we have been able to verify your credit score
                  is 842. This is an average rating and means that you can
                  potentially borrow up to $200,000 based on your property
                  value.
                </span>
                <SelectPrice rootClassName="select-price-root-class-name3"></SelectPrice>
              </div>
            </div>
            <div className="z-pre-qualification7credit-assessment-frame79">
              <Link href="/z-application-1-i-d-verification">
                <a className="z-pre-qualification7credit-assessment-link">
                  <Largebutton
                    rootClassName="largebutton-root-class-name6"
                    className="z-pre-qualification7credit-assessment-component3"
                  ></Largebutton>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name8"></Footer>
      </div>
      <style jsx>
        {`
          .z-pre-qualification7credit-assessment-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .z-pre-qualification7credit-assessment-container1 {
            width: 100%;
            height: 576px;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            justify-content: center;
          }
          .z-pre-qualification7credit-assessment-frame43 {
            width: 913px;
            height: 572px;
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
            justify-content: flex-end;
            background-color: rgba(255, 255, 255, 1);
          }
          .z-pre-qualification7credit-assessment-frame35 {
            top: var(--dl-space-space-twounits);
            left: 102px;
            height: 262px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification7credit-assessment-location {
            width: 50px;
            height: 50px;
            position: relative;
            margin-bottom: 20px;
          }
          .z-pre-qualification7credit-assessment-text-heading-subheading {
            width: 709px;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification7credit-assessment-text {
            color: rgba(0, 0, 0, 1);
            width: 529px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 20px;
          }
          .z-pre-qualification7credit-assessment-text1 {
            color: rgb(0, 0, 0);
            width: 526px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          .z-pre-qualification7credit-assessment-text2 {
            color: rgba(0, 0, 0, 1);
            width: 529px;
            height: auto;
            align-self: auto;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 20px;
          }
          .z-pre-qualification7credit-assessment-text3 {
            color: rgb(0, 0, 0);
            width: 526px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          .z-pre-qualification7credit-assessment-frame79 {
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
          .z-pre-qualification7credit-assessment-link {
            display: contents;
          }
          .z-pre-qualification7credit-assessment-component3 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .z-pre-qualification7credit-assessment-frame43 {
              width: 893px;
            }
          }
          @media (max-width: 767px) {
            .z-pre-qualification7credit-assessment-frame43 {
              width: 697px;
            }
            .z-pre-qualification7credit-assessment-frame35 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
          }
          @media (max-width: 479px) {
            .z-pre-qualification7credit-assessment-frame43 {
              width: 100%;
              height: 635px;
            }
            .z-pre-qualification7credit-assessment-text-heading-subheading {
              width: 100%;
            }
            .z-pre-qualification7credit-assessment-text1 {
              width: 100%;
            }
            .z-pre-qualification7credit-assessment-text3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default ZPreQualification7CreditAssessment
