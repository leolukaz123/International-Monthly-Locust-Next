import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Steps1 from '../components/steps1'
import Heading from '../components/heading'
import SummaryChart from '../components/summary-chart'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const ApplicationConfirmationOfApplication = (props) => {
  return (
    <>
      <div className="application-confirmation-of-application-container">
        <Head>
          <title>
            Application-Confirmation-of-application - International Monthly
            Locust
          </title>
          <meta
            property="og:title"
            content="Application-Confirmation-of-application - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper application-confirmation-of-application-container1">
          <div className="MainContainer application-confirmation-of-application-frame43">
            <Heading
              text="Please check the following details and update them if incorrect"
              heading="APPLICATION CONFIRMATION"
              image_src1="/playground_assets/confirmation.svg"
              rootClassName="heading-root-class-name12"
            ></Heading>
            <Link href="/application-confirm-identity">
              <a>
                <SummaryChart
                  heading="Personal Details"
                  rootClassName="summary-chart-root-class-name"
                  className="application-confirmation-of-application-component2"
                ></SummaryChart>
              </a>
            </Link>
            <Link href="/application-confirm-identity">
              <a>
                <SummaryChart
                  heading="Personal Details"
                  rootClassName="summary-chart-root-class-name7"
                  className="application-confirmation-of-application-component3"
                ></SummaryChart>
              </a>
            </Link>
            <Link href="/application-confirm-identity">
              <a>
                <SummaryChart
                  heading="Personal Details"
                  rootClassName="summary-chart-root-class-name6"
                  className="application-confirmation-of-application-component4"
                ></SummaryChart>
              </a>
            </Link>
            <Link href="/application-confirm-identity">
              <a>
                <SummaryChart
                  heading="Personal Details"
                  rootClassName="summary-chart-root-class-name5"
                  className="application-confirmation-of-application-component5"
                ></SummaryChart>
              </a>
            </Link>
            <Link href="/application-application-submitted">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name27"
                  className="application-confirmation-of-application-component6"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name28"></Navbar>
        <Footer rootClassName="footer-root-class-name28"></Footer>
      </div>
      <style jsx>
        {`
          .application-confirmation-of-application-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .application-confirmation-of-application-component2 {
            text-decoration: none;
          }
          .application-confirmation-of-application-component3 {
            text-decoration: none;
          }
          .application-confirmation-of-application-component4 {
            text-decoration: none;
          }
          .application-confirmation-of-application-component5 {
            text-decoration: none;
          }
          .application-confirmation-of-application-component6 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .application-confirmation-of-application-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .application-confirmation-of-application-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .application-confirmation-of-application-container1 {
              height: auto;
            }
            .application-confirmation-of-application-frame43 {
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

export default ApplicationConfirmationOfApplication
