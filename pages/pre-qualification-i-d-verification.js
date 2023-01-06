import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Steps1 from '../components/steps1'
import Heading from '../components/heading'
import BasicInput from '../components/basic-input'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const PreQualificationIDVerification = (props) => {
  return (
    <>
      <div className="pre-qualification-i-d-verification-container">
        <Head>
          <title>
            Pre-Qualification-ID-Verification - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="Pre-Qualification-ID-Verification - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper pre-qualification-i-d-verification-container1">
          <div className="MainContainer pre-qualification-i-d-verification-frame43">
            <Heading
              text="We will need a few details in order to perform an initial credit assessment. If successful you can proceed to application."
              heading="ID VERIFICATION"
              image_src="/playground_assets/idverification.svg"
              rootClassName="heading-root-class-name6"
            ></Heading>
            <BasicInput
              rootClassName="basic-input-root-class-name15"
              textinput_placeholder="First Name"
            ></BasicInput>
            <BasicInput
              rootClassName="basic-input-root-class-name18"
              textinput_placeholder="Surname"
            ></BasicInput>
            <BasicInput
              rootClassName="basic-input-root-class-name17"
              textinput_placeholder="Date of Birth"
            ></BasicInput>
            <BasicInput
              rootClassName="basic-input-root-class-name16"
              textinput_placeholder="Address"
            ></BasicInput>
            <BasicInput
              rootClassName="basic-input-root-class-name19"
              textinput_placeholder="Phone Number"
            ></BasicInput>
            <Link href="/pre-qualification-credit-approval">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name21"
                  className="pre-qualification-i-d-verification-component07"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name22"></Navbar>
        <Footer rootClassName="footer-root-class-name22"></Footer>
      </div>
      <style jsx>
        {`
          .pre-qualification-i-d-verification-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .pre-qualification-i-d-verification-component07 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .pre-qualification-i-d-verification-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .pre-qualification-i-d-verification-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .pre-qualification-i-d-verification-container1 {
              height: auto;
            }
            .pre-qualification-i-d-verification-frame43 {
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

export default PreQualificationIDVerification
