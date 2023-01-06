import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Steps1 from '../components/steps1'
import Heading from '../components/heading'
import SelectPrice from '../components/select-price'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const PreQualificationCreditApproval = (props) => {
  return (
    <>
      <div className="pre-qualification-credit-approval-container">
        <Head>
          <title>
            Pre-Qualification-Credit-Approval - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="Pre-Qualification-Credit-Approval - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper pre-qualification-credit-approval-container1">
          <div className="MainContainer pre-qualification-credit-approval-frame43">
            <Heading
              text="Congratulations, we have been able to verify your credit score is 842. This is an average rating and means that you can potentially borrow up to $200,000 based on your property value."
              heading="CREDIT SCORE"
              image_src="/playground_assets/credit_score.svg"
              image_src1="/playground_assets/property_value.svg"
              rootClassName="heading-root-class-name7"
            ></Heading>
            <h1 className="pre-qualification-credit-approval-text">842</h1>
            <span className="pre-qualification-credit-approval-text1 body1">
              Your maximum loan amount for a credit score of 842 is $200,000,
              would you like to update your estimate based on this new value?
            </span>
            <SelectPrice
              text="200000"
              value="100000"
              NumberValue="$100000"
              rootClassName="select-price-root-class-name9"
              textinput_placeholder="200000"
            ></SelectPrice>
            <Link href="/pre-qualification-start-application">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name22"
                  className="pre-qualification-credit-approval-component3"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name23"></Navbar>
        <Footer rootClassName="footer-root-class-name23"></Footer>
      </div>
      <style jsx>
        {`
          .pre-qualification-credit-approval-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .pre-qualification-credit-approval-text {
            font-size: 32px;
            font-style: normal;
            font-family: Inter;
            font-weight: 400;
            line-height: 1.15;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: none;
            text-decoration: none;
          }
          .pre-qualification-credit-approval-text1 {
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pre-qualification-credit-approval-component3 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .pre-qualification-credit-approval-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .pre-qualification-credit-approval-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .pre-qualification-credit-approval-container1 {
              height: auto;
            }
            .pre-qualification-credit-approval-frame43 {
              height: auto;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default PreQualificationCreditApproval
