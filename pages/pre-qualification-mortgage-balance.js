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

const PreQualificationMortgageBalance = (props) => {
  return (
    <>
      <div className="pre-qualification-mortgage-balance-container">
        <Head>
          <title>
            Pre-Qualification-Mortgage-Balance - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="Pre-Qualification-Mortgage-Balance - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper pre-qualification-mortgage-balance-container1">
          <div className="MainContainer pre-qualification-mortgage-balance-frame43">
            <Heading
              text="How big is your mortgage?"
              heading="MORTGAGE BALANCE"
              image_src="/playground_assets/property_value.svg"
              image_src1="/playground_assets/housewindow.svg"
              link_icon1="/home"
              rootClassName="heading-root-class-name4"
            ></Heading>
            <SelectPrice
              rootClassName="select-price-root-class-name6"
              textinput_placeholder="$200000"
            ></SelectPrice>
            <span className="pre-qualification-mortgage-balance-text body1">
              You currently own 50% of your mortgage
            </span>
            <ProgressBar rootClassName="progress-bar-root-class-name2"></ProgressBar>
            <Link href="/pre-qualification-loan-amount">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name19"
                  className="pre-qualification-mortgage-balance-component4"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name20"></Navbar>
        <Footer rootClassName="footer-root-class-name20"></Footer>
      </div>
      <style jsx>
        {`
          .pre-qualification-mortgage-balance-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .pre-qualification-mortgage-balance-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pre-qualification-mortgage-balance-component4 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .pre-qualification-mortgage-balance-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .pre-qualification-mortgage-balance-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .pre-qualification-mortgage-balance-container1 {
              height: auto;
            }
            .pre-qualification-mortgage-balance-frame43 {
              height: auto;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .pre-qualification-mortgage-balance-text {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default PreQualificationMortgageBalance
