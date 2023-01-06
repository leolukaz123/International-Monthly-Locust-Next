import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Steps from '../components/steps'
import Largebutton from '../components/largebutton'
import MapSearch from '../components/map-search'
import Footer from '../components/footer'

const ZApplication4ConfirmAddress = (props) => {
  return (
    <>
      <div className="z-application4confirm-address-container">
        <Head>
          <title>
            z-Application-4-Confirm-Address - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="z-Application-4-Confirm-Address - International Monthly Locust"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name3"></Navbar>
        <Steps></Steps>
        <div className="z-application4confirm-address-container1">
          <div className="z-application4confirm-address-frame43">
            <div className="z-application4confirm-address-frame35">
              <img
                alt="location1745"
                src="/playground_assets/location1745-jekh.svg"
                className="z-application4confirm-address-location"
              />
              <div className="z-application4confirm-address-text-heading-subheading">
                <span className="z-application4confirm-address-text heading1">
                  <span>ENTER ADDRESS</span>
                </span>
                <span className="z-application4confirm-address-text2 body1">
                  <span>Write your address below to view property equity</span>
                </span>
              </div>
            </div>
            <div className="z-application4confirm-address-frame79">
              <Link href="/z-application-5-property-interests">
                <a className="z-application4confirm-address-link">
                  <Largebutton
                    rootClassName="largebutton-root-class-name1"
                    className="z-application4confirm-address-component2"
                  ></Largebutton>
                </a>
              </Link>
            </div>
            <div className="z-application4confirm-address-frame78">
              <div className="z-application4confirm-address-container2">
                <div className="z-application4confirm-address-container3">
                  <MapSearch></MapSearch>
                  <img
                    alt="image"
                    src="/playground_assets/map-800h.png"
                    className="z-application4confirm-address-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .z-application4confirm-address-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .z-application4confirm-address-container1 {
            width: 100%;
            height: 1013px;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            justify-content: center;
          }
          .z-application4confirm-address-frame43 {
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
          .z-application4confirm-address-frame35 {
            top: var(--dl-space-space-twounits);
            left: 102px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application4confirm-address-location {
            width: 50px;
            height: 50px;
            position: relative;
            margin-bottom: 20px;
          }
          .z-application4confirm-address-text-heading-subheading {
            width: 709px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application4confirm-address-text {
            color: rgba(0, 0, 0, 1);
            width: 529px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 20px;
          }
          .z-application4confirm-address-text2 {
            color: rgba(0, 0, 0, 1);
            width: 526px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          .z-application4confirm-address-frame79 {
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
          .z-application4confirm-address-link {
            display: contents;
          }
          .z-application4confirm-address-component2 {
            text-decoration: none;
          }
          .z-application4confirm-address-frame78 {
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
          .z-application4confirm-address-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .z-application4confirm-address-container3 {
            flex: 0 0 auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .z-application4confirm-address-image {
            width: 712px;
            object-fit: cover;
          }
          @media (max-width: 1200px) {
            .z-application4confirm-address-container3 {
              height: 711px;
            }
          }
          @media (max-width: 991px) {
            .z-application4confirm-address-frame43 {
              width: 893px;
            }
          }
          @media (max-width: 767px) {
            .z-application4confirm-address-frame43 {
              width: 697px;
            }
            .z-application4confirm-address-frame35 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .z-application4confirm-address-frame78 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .z-application4confirm-address-container3 {
              width: 100%;
            }
            .z-application4confirm-address-image {
              width: 648px;
            }
          }
          @media (max-width: 479px) {
            .z-application4confirm-address-container1 {
              height: 806px;
            }
            .z-application4confirm-address-frame43 {
              width: 100%;
              height: 806px;
            }
            .z-application4confirm-address-frame78 {
              width: 479px;
            }
            .z-application4confirm-address-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default ZApplication4ConfirmAddress
