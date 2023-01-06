import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Steps1 from '../components/steps1'
import Heading from '../components/heading'
import BasicInput from '../components/basic-input'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const ApplicationConfirmDocuments = (props) => {
  return (
    <>
      <div className="application-confirm-documents-container">
        <Head>
          <title>
            Application-Confirm-Documents - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="Application-Confirm-Documents - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper application-confirm-documents-container1">
          <div className="application-confirm-documents-frame43 MainContainer">
            <Heading
              text="First, we need to identify you to check your current credit score. Then we will be able to determine if you are eligible to use our product."
              heading="IDENTITY VERIFICATION"
              image_src="/playground_assets/idverification.svg"
              image_src1="/playground_assets/idverification.svg"
              rootClassName="heading-root-class-name9"
            ></Heading>
            <BasicInput
              rootClassName="basic-input-root-class-name23"
              textinput_placeholder="Passport Number"
            ></BasicInput>
            <BasicInput
              rootClassName="basic-input-root-class-name24"
              textinput_placeholder="Licence Number"
            ></BasicInput>
            <BasicInput
              rootClassName="basic-input-root-class-name25"
              textinput_placeholder="Medicare Number"
            ></BasicInput>
            <span className="body1">+ Add Additional Document</span>
            <span className="application-confirm-documents-text1 body1">
              0/5 documents
            </span>
            <Link href="/application-photo-i-d">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name24"
                  className="application-confirm-documents-component5"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name25"></Navbar>
        <Footer rootClassName="footer-root-class-name25"></Footer>
      </div>
      <style jsx>
        {`
          .application-confirm-documents-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .application-confirm-documents-frame43 {
            max-width: 1200px;
          }
          .application-confirm-documents-text1 {
            margin-top: var(--dl-space-space-unit);
          }
          .application-confirm-documents-component5 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .application-confirm-documents-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .application-confirm-documents-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .application-confirm-documents-container1 {
              height: auto;
            }
            .application-confirm-documents-frame43 {
              height: auto;
              margin-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default ApplicationConfirmDocuments
