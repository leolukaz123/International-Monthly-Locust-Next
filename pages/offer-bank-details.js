import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Steps1 from '../components/steps1'
import Heading from '../components/heading'
import BasicInput from '../components/basic-input'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const OfferBankDetails = (props) => {
  return (
    <>
      <div className="offer-bank-details-container">
        <Head>
          <title>Offer-Bank-Details - International Monthly Locust</title>
          <meta
            property="og:title"
            content="Offer-Bank-Details - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper offer-bank-details-container1">
          <div className="MainContainer offer-bank-details-frame43">
            <Heading
              text="Please provide your bank details of the account you would like to be paid into"
              heading="BANK DETAILS"
              image_src="/playground_assets/idverification.svg"
              image_src1="/playground_assets/property_value.svg"
              rootClassName="heading-root-class-name16"
            ></Heading>
            <BasicInput
              rootClassName="basic-input-root-class-name26"
              textinput_placeholder="Account Name"
            ></BasicInput>
            <BasicInput
              rootClassName="basic-input-root-class-name31"
              textinput_placeholder="Account Number"
            ></BasicInput>
            <BasicInput
              rootClassName="basic-input-root-class-name33"
              textinput_placeholder="BSB Number"
            ></BasicInput>
            <Link href="/offer-offer-documents">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name31"
                  className="offer-bank-details-component5"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name32"></Navbar>
        <Footer rootClassName="footer-root-class-name32"></Footer>
      </div>
      <style jsx>
        {`
          .offer-bank-details-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .offer-bank-details-component5 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .offer-bank-details-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .offer-bank-details-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .offer-bank-details-container1 {
              height: auto;
            }
            .offer-bank-details-frame43 {
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

export default OfferBankDetails
