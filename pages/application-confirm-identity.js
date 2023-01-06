import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Steps1 from '../components/steps1'
import Heading from '../components/heading'
import BasicInput from '../components/basic-input'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const ApplicationConfirmIdentity = (props) => {
  return (
    <>
      <div className="application-confirm-identity-container">
        <Head>
          <title>
            Application-Confirm-Identity - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="Application-Confirm-Identity - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper application-confirm-identity-container1">
          <div className="MainContainer application-confirm-identity-frame43">
            <Heading
              text="First, we need to identify you to check your current credit score. Then we will be able to determine if you are eligible to use our product."
              heading="IDENTITY VERIFICATION"
              image_src="/playground_assets/idverification.svg"
              image_src1="/playground_assets/idverification.svg"
              rootClassName="heading-root-class-name10"
            ></Heading>
            <BasicInput
              rootClassName="basic-input-root-class-name27"
              textinput_placeholder="First Name"
            ></BasicInput>
            <BasicInput
              rootClassName="basic-input-root-class-name28"
              textinput_placeholder="Surname"
            ></BasicInput>
            <BasicInput
              rootClassName="basic-input-root-class-name29"
              textinput_placeholder="Date of Birth"
            ></BasicInput>
            <BasicInput
              rootClassName="basic-input-root-class-name30"
              textinput_placeholder="Address"
            ></BasicInput>
            <Link href="/application-confirm-documents">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name25"
                  className="application-confirm-identity-component6"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name26"></Navbar>
        <Footer rootClassName="footer-root-class-name26"></Footer>
      </div>
      <style jsx>
        {`
          .application-confirm-identity-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .application-confirm-identity-component6 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .application-confirm-identity-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .application-confirm-identity-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .application-confirm-identity-container1 {
              height: auto;
            }
            .application-confirm-identity-frame43 {
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

export default ApplicationConfirmIdentity
