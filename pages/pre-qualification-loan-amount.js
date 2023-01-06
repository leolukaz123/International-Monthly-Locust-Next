import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Steps1 from '../components/steps1'
import Heading from '../components/heading'
import SelectPrice from '../components/select-price'
import ProgressBar from '../components/progress-bar'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const PreQualificationLoanAmount = (props) => {
  return (
    <>
      <div className="pre-qualification-loan-amount-container">
        <Head>
          <title>
            Pre-Qualification-Loan-Amount - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="Pre-Qualification-Loan-Amount - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper pre-qualification-loan-amount-container1">
          <div className="MainContainer pre-qualification-loan-amount-frame43">
            <Heading
              text="How much are you looking to take out as a loan? Based on our calculations you can potentially borrow up to $500,000 asdkjfhaskdfjhaksdfhaksdjfhaksjdfhjkashdfkjahsdfkjhasdkfjhaskdjfhaksdjfhkashdfkajshdfkjashdfkjahsdfkjhasdkfjhkasdjhfkajsdhf"
              heading="LOAN AMOUNT"
              image_src1="/playground_assets/property_value.svg"
              rootClassName="heading-root-class-name5"
            ></Heading>
            <SelectPrice
              rootClassName="select-price-root-class-name8"
              textinput_placeholder="$100000"
            ></SelectPrice>
            <span className="pre-qualification-loan-amount-text body1">
              You have currently used 20% of your potential equity borrowing
              power
            </span>
            <ProgressBar
              percentage="20%"
              rootClassName="progress-bar-root-class-name3"
            ></ProgressBar>
            <Link href="/pre-qualification-start-application">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name20"
                  className="pre-qualification-loan-amount-component4"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name21"></Navbar>
        <Footer rootClassName="footer-root-class-name21"></Footer>
      </div>
      <style jsx>
        {`
          .pre-qualification-loan-amount-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .pre-qualification-loan-amount-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pre-qualification-loan-amount-component4 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .pre-qualification-loan-amount-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .pre-qualification-loan-amount-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .pre-qualification-loan-amount-container1 {
              height: auto;
            }
            .pre-qualification-loan-amount-frame43 {
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

export default PreQualificationLoanAmount
