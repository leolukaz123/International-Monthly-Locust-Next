import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Steps1 from '../components/steps1'
import Heading from '../components/heading'
import MapSearch from '../components/map-search'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const ApplicationPropertyConfirmation = (props) => {
  return (
    <>
      <div className="application-property-confirmation-container">
        <Head>
          <title>
            Application-Property-Confirmation - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="Application-Property-Confirmation - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper application-property-confirmation-container1">
          <div className="MainContainer application-property-confirmation-frame43">
            <Heading
              text="Write your address below to view your property Equity"
              heading="ENTER ADDRESS"
              rootClassName="heading-root-class-name19"
            ></Heading>
            <MapSearch rootClassName="map-search-root-class-name"></MapSearch>
            <img
              alt="image"
              src="/playground_assets/map-1200w.png"
              className="application-property-confirmation-image"
            />
            <Link href="/application-property-interests">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name34"
                  className="application-property-confirmation-component3"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name35"></Navbar>
        <Footer rootClassName="footer-root-class-name35"></Footer>
      </div>
      <style jsx>
        {`
          .application-property-confirmation-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .application-property-confirmation-image {
            width: 100%;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .application-property-confirmation-component3 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .application-property-confirmation-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .application-property-confirmation-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .application-property-confirmation-container1 {
              height: auto;
            }
            .application-property-confirmation-frame43 {
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

export default ApplicationPropertyConfirmation
