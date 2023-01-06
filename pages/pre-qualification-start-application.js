import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Steps1 from '../components/steps1'
import Heading from '../components/heading'
import BasicInput from '../components/basic-input'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const PreQualificationStartApplication = (props) => {
  return (
    <>
      <div className="pre-qualification-start-application-container">
        <Head>
          <title>
            Pre-Qualification-Start-Application - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="Pre-Qualification-Start-Application - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper pre-qualification-start-application-container1">
          <div className="MainContainer pre-qualification-start-application-frame43">
            <Heading
              text="Thanks for completing the pre-approval process. We will review your application and let you know if you are eligible to conduct a full application."
              heading="START APPLICATION"
              image_src="/playground_assets/idverification.svg"
              image_src1="/playground_assets/start.svg"
              rootClassName="heading-root-class-name8"
            ></Heading>
            <BasicInput
              rootClassName="basic-input-root-class-name20"
              textinput_placeholder="Email"
            ></BasicInput>
            <Link href="/application-confirm-documents">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name23"
                  className="pre-qualification-start-application-component3"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name24"></Navbar>
        <Footer rootClassName="footer-root-class-name24"></Footer>
      </div>
      <style jsx>
        {`
          .pre-qualification-start-application-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .pre-qualification-start-application-component3 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .pre-qualification-start-application-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .pre-qualification-start-application-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .pre-qualification-start-application-container1 {
              height: auto;
            }
            .pre-qualification-start-application-frame43 {
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

export default PreQualificationStartApplication
