import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Steps from '../components/steps'
import Largebutton from '../components/largebutton'
import MapSearch from '../components/map-search'
import Footer from '../components/footer'

const ZPreQualification2ConfirmAddress1 = (props) => {
  return (
    <>
      <div className="z-pre-qualification2confirm-address1-container">
        <Head>
          <title>
            z-Pre-Qualification-2-Confirm-Address1 - International Monthly
            Locust
          </title>
          <meta
            property="og:title"
            content="z-Pre-Qualification-2-Confirm-Address1 - International Monthly Locust"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name13"></Navbar>
        <Steps></Steps>
        <div className="z-pre-qualification2confirm-address1-container1">
          <div className="z-pre-qualification2confirm-address1-frame43">
            <div className="z-pre-qualification2confirm-address1-frame35">
              <img
                alt="location1745"
                src="/playground_assets/location1745-jekh.svg"
                className="z-pre-qualification2confirm-address1-location"
              />
              <div className="z-pre-qualification2confirm-address1-text-heading-subheading">
                <span className="z-pre-qualification2confirm-address1-text heading1">
                  <span>ENTER ADDRESS</span>
                </span>
                <span className="z-pre-qualification2confirm-address1-text2 body1">
                  <span>Write your address below to view property equity</span>
                </span>
              </div>
            </div>
            <div className="z-pre-qualification2confirm-address1-frame79">
              <Link href="/z-pre-qualification-3-property-value">
                <a className="z-pre-qualification2confirm-address1-link">
                  <Largebutton
                    rootClassName="largebutton-root-class-name11"
                    className="z-pre-qualification2confirm-address1-component2"
                  ></Largebutton>
                </a>
              </Link>
            </div>
            <div className="z-pre-qualification2confirm-address1-frame78">
              <div className="z-pre-qualification2confirm-address1-container2">
                <div className="z-pre-qualification2confirm-address1-container3">
                  <MapSearch></MapSearch>
                  <img
                    alt="image"
                    src="/playground_assets/map-800w.png"
                    className="z-pre-qualification2confirm-address1-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name13"></Footer>
      </div>
      <style jsx>
        {`
          .z-pre-qualification2confirm-address1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .z-pre-qualification2confirm-address1-container1 {
            width: 100%;
            height: 1013px;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            justify-content: center;
          }
          .z-pre-qualification2confirm-address1-frame43 {
            width: 913px;
            height: 1011px;
            display: flex;
            padding: 0 89px;
            overflow: hidden;
            position: relative;
            align-self: flex-start;
            box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 5px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .z-pre-qualification2confirm-address1-frame35 {
            top: var(--dl-space-space-twounits);
            left: 102px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification2confirm-address1-location {
            width: 50px;
            height: 50px;
            position: relative;
            margin-bottom: 20px;
          }
          .z-pre-qualification2confirm-address1-text-heading-subheading {
            width: 709px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification2confirm-address1-text {
            color: rgba(0, 0, 0, 1);
            width: 529px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 20px;
          }
          .z-pre-qualification2confirm-address1-text2 {
            color: rgba(0, 0, 0, 1);
            width: 526px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          .z-pre-qualification2confirm-address1-frame79 {
            left: 0px;
            right: 0px;
            bottom: var(--dl-space-space-unit);
            margin: auto;
            display: flex;
            padding: 10px;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .z-pre-qualification2confirm-address1-link {
            display: contents;
          }
          .z-pre-qualification2confirm-address1-component2 {
            text-decoration: none;
          }
          .z-pre-qualification2confirm-address1-frame78 {
            top: 197px;
            left: 92px;
            height: 237px;
            display: flex;
            padding: 10px;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification2confirm-address1-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .z-pre-qualification2confirm-address1-container3 {
            flex: 0 0 auto;
            height: 237px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .z-pre-qualification2confirm-address1-image {
            width: 712px;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .z-pre-qualification2confirm-address1-frame43 {
              width: 893px;
            }
          }
          @media (max-width: 767px) {
            .z-pre-qualification2confirm-address1-frame43 {
              width: 697px;
            }
            .z-pre-qualification2confirm-address1-frame35 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .z-pre-qualification2confirm-address1-frame78 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .z-pre-qualification2confirm-address1-container3 {
              width: 100%;
            }
            .z-pre-qualification2confirm-address1-image {
              width: 648px;
            }
          }
          @media (max-width: 479px) {
            .z-pre-qualification2confirm-address1-container1 {
              height: 806px;
            }
            .z-pre-qualification2confirm-address1-frame43 {
              width: 100%;
              height: 806px;
            }
            .z-pre-qualification2confirm-address1-frame78 {
              width: 479px;
            }
            .z-pre-qualification2confirm-address1-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default ZPreQualification2ConfirmAddress1
