import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Steps1 from '../components/steps1'
import Heading from '../components/heading'
import MapSearch from '../components/map-search'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const PreQualificationConfirmAddress = (props) => {
  return (
    <>
      <div className="pre-qualification-confirm-address-container">
        <Head>
          <title>
            Pre-Qualification-Confirm-Address - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="Pre-Qualification-Confirm-Address - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper pre-qualification-confirm-address-container1">
          <div className="MainContainer pre-qualification-confirm-address-frame43">
            <Heading
              text="Write your address below to view your property Equity"
              heading="ENTER ADDRESS"
              rootClassName="heading-root-class-name2"
            ></Heading>
            <MapSearch rootClassName="map-search-root-class-name1"></MapSearch>
            <img
              alt="image"
              src="/playground_assets/map-1200w.png"
              className="pre-qualification-confirm-address-image"
            />
            <Link href="/pre-qualification-property-value">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name17"
                  className="pre-qualification-confirm-address-component3"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name18"></Navbar>
        <Footer rootClassName="footer-root-class-name18"></Footer>
      </div>
      <style jsx>
        {`
          .pre-qualification-confirm-address-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .pre-qualification-confirm-address-image {
            width: 100%;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .pre-qualification-confirm-address-component3 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .pre-qualification-confirm-address-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .pre-qualification-confirm-address-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .pre-qualification-confirm-address-container1 {
              height: auto;
            }
            .pre-qualification-confirm-address-frame43 {
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

export default PreQualificationConfirmAddress
