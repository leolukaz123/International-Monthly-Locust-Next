import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Steps1 from '../components/steps1'
import Heading from '../components/heading'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const ApplicationApplicationSubmitted = (props) => {
  return (
    <>
      <div className="application-application-submitted-container">
        <Head>
          <title>
            Application-Application-Submitted - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="Application-Application-Submitted - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper application-application-submitted-container1">
          <div className="MainContainer application-application-submitted-frame43">
            <Heading
              text="Congratulations, you have now submitted your application. We will now review it and get back to you within the next 10 working days."
              heading="APPLICATION SUBMITTED"
              image_src1="/playground_assets/confirmation.svg"
              rootClassName="heading-root-class-name15"
            ></Heading>
            <Link href="/offer-bank-details">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name30"
                  className="application-application-submitted-component2"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name31"></Navbar>
        <Footer rootClassName="footer-root-class-name31"></Footer>
      </div>
      <style jsx>
        {`
          .application-application-submitted-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .application-application-submitted-component2 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .application-application-submitted-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .application-application-submitted-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .application-application-submitted-container1 {
              height: auto;
            }
            .application-application-submitted-frame43 {
              height: auto;
              margin-top: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ApplicationApplicationSubmitted
