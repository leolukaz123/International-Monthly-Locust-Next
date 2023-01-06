import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Steps from '../components/steps'
import Heading from '../components/heading'
import Largebutton from '../components/largebutton'
import MapSearch from '../components/map-search'
import Footer from '../components/footer'

const ZPreQualification1EnterAddress = (props) => {
  return (
    <>
      <div className="z-pre-qualification1enter-address-container">
        <Head>
          <title>
            z-Pre-Qualification-1-Enter-Address - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="z-Pre-Qualification-1-Enter-Address - International Monthly Locust"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name12"></Navbar>
        <Steps></Steps>
        <div className="z-pre-qualification1enter-address-container1">
          <div className="z-pre-qualification1enter-address-frame43">
            <Heading rootClassName="heading-root-class-name"></Heading>
            <div className="z-pre-qualification1enter-address-frame79">
              <Link href="/z-pre-qualification-2-confirm-address1">
                <a className="z-pre-qualification1enter-address-link">
                  <Largebutton
                    rootClassName="largebutton-root-class-name10"
                    className="z-pre-qualification1enter-address-component3"
                  ></Largebutton>
                </a>
              </Link>
            </div>
            <div className="z-pre-qualification1enter-address-frame78">
              <div className="z-pre-qualification1enter-address-container2">
                <div className="z-pre-qualification1enter-address-container3">
                  <MapSearch></MapSearch>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name12"></Footer>
      </div>
      <style jsx>
        {`
          .z-pre-qualification1enter-address-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .z-pre-qualification1enter-address-container1 {
            width: 100%;
            height: 422px;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            justify-content: center;
          }
          .z-pre-qualification1enter-address-frame43 {
            width: 913px;
            height: 422px;
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
          .z-pre-qualification1enter-address-frame79 {
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
          .z-pre-qualification1enter-address-link {
            display: contents;
          }
          .z-pre-qualification1enter-address-component3 {
            text-decoration: none;
          }
          .z-pre-qualification1enter-address-frame78 {
            top: 197px;
            left: 92px;
            height: 110px;
            display: flex;
            padding: 10px;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification1enter-address-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .z-pre-qualification1enter-address-container3 {
            flex: 0 0 auto;
            height: 107px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          @media (max-width: 991px) {
            .z-pre-qualification1enter-address-frame43 {
              width: 893px;
            }
          }
          @media (max-width: 767px) {
            .z-pre-qualification1enter-address-frame43 {
              width: 697px;
            }
            .z-pre-qualification1enter-address-frame78 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .z-pre-qualification1enter-address-container3 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .z-pre-qualification1enter-address-container1 {
              height: 806px;
            }
            .z-pre-qualification1enter-address-frame43 {
              width: 100%;
              height: 806px;
            }
            .z-pre-qualification1enter-address-frame78 {
              width: 479px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ZPreQualification1EnterAddress
