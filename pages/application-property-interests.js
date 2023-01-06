import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Steps1 from '../components/steps1'
import Heading from '../components/heading'
import BankSelect from '../components/bank-select'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const ApplicationPropertyInterests = (props) => {
  return (
    <>
      <div className="application-property-interests-container">
        <Head>
          <title>
            Application-Property-Interests - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="Application-Property-Interests - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper application-property-interests-container1">
          <div className="application-property-interests-frame43 MainContainer">
            <Heading
              text="You will need to add in additional property interests such as loans and caveats that might exist on the title."
              heading="PROPERTY INTERESTS"
              image_src="/playground_assets/idverification.svg"
              image_src1="/playground_assets/interests.svg"
              rootClassName="heading-root-class-name13"
            ></Heading>
            <BankSelect rootClassName="bank-select-root-class-name16"></BankSelect>
            <BankSelect rootClassName="bank-select-root-class-name19"></BankSelect>
            <span className="body1">+ Add Additional Interest</span>
            <span className="application-property-interests-text1 body1">
              3 interests
            </span>
            <Link href="/application-confirmation-of-application">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name28"
                  className="application-property-interests-component4"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name29"></Navbar>
        <Footer rootClassName="footer-root-class-name29"></Footer>
      </div>
      <style jsx>
        {`
          .application-property-interests-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .application-property-interests-frame43 {
            margin-top: 0px;
          }
          .application-property-interests-text1 {
            margin-top: var(--dl-space-space-unit);
          }
          .application-property-interests-component4 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .application-property-interests-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .application-property-interests-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .application-property-interests-container1 {
              height: auto;
            }
            .application-property-interests-frame43 {
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

export default ApplicationPropertyInterests
