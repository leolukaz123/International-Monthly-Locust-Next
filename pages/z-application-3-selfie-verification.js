import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Steps from '../components/steps'
import Largebutton from '../components/largebutton'
import UploadComponent from '../components/upload-component'
import Footer from '../components/footer'

const ZApplication3SelfieVerification = (props) => {
  return (
    <>
      <div className="z-application3selfie-verification-container">
        <Head>
          <title>
            z-Application-3-Selfie-Verification - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="z-Application-3-Selfie-Verification - International Monthly Locust"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name11"></Navbar>
        <Steps></Steps>
        <div className="z-application3selfie-verification-container1">
          <div className="z-application3selfie-verification-frame43">
            <div className="z-application3selfie-verification-frame35">
              <img
                src="/playground_assets/idverification.svg"
                className="z-application3selfie-verification-location"
              />
              <div className="z-application3selfie-verification-text-heading-subheading">
                <span className="z-application3selfie-verification-text heading1">
                  ID VERIFICATION
                </span>
                <span className="z-application3selfie-verification-text1 body1">
                  Fill out the details below to verify your address
                </span>
              </div>
            </div>
            <div className="z-application3selfie-verification-frame79">
              <Link href="/z-application-4-confirm-address">
                <a className="z-application3selfie-verification-link">
                  <Largebutton
                    rootClassName="largebutton-root-class-name9"
                    className="z-application3selfie-verification-component2"
                  ></Largebutton>
                </a>
              </Link>
            </div>
            <div className="z-application3selfie-verification-frame78">
              <div className="z-application3selfie-verification-container2">
                <div className="z-application3selfie-verification-container3">
                  <div className="z-application3selfie-verification-frame47">
                    <UploadComponent></UploadComponent>
                  </div>
                  <select className="z-application3selfie-verification-select">
                    <option value="Licence">Licence</option>
                    <option value="Passport">Passport</option>
                    <option value="Medicare">Medicare</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name11"></Footer>
      </div>
      <style jsx>
        {`
          .z-application3selfie-verification-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .z-application3selfie-verification-container1 {
            width: 100%;
            height: 747px;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            justify-content: center;
          }
          .z-application3selfie-verification-frame43 {
            width: 913px;
            height: 744px;
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
          .z-application3selfie-verification-frame35 {
            top: var(--dl-space-space-twounits);
            left: 102px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application3selfie-verification-location {
            width: 50px;
            height: 50px;
            position: relative;
            margin-bottom: 20px;
          }
          .z-application3selfie-verification-text-heading-subheading {
            width: 709px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application3selfie-verification-text {
            color: rgba(0, 0, 0, 1);
            width: 529px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 20px;
          }
          .z-application3selfie-verification-text1 {
            color: rgba(0, 0, 0, 1);
            width: 526px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          .z-application3selfie-verification-frame79 {
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
          .z-application3selfie-verification-link {
            display: contents;
          }
          .z-application3selfie-verification-component2 {
            text-decoration: none;
          }
          .z-application3selfie-verification-frame78 {
            top: 197px;
            left: 92px;
            height: 452px;
            display: flex;
            padding: 10px;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application3selfie-verification-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .z-application3selfie-verification-container3 {
            flex: 0 0 auto;
            width: 698px;
            height: 472px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .z-application3selfie-verification-frame47 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-application3selfie-verification-select {
            width: 345px;
            height: 48px;
            margin-top: var(--dl-space-space-unit);
          }
          @media (max-width: 991px) {
            .z-application3selfie-verification-frame43 {
              width: 893px;
            }
          }
          @media (max-width: 767px) {
            .z-application3selfie-verification-frame43 {
              width: 697px;
            }
            .z-application3selfie-verification-frame35 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .z-application3selfie-verification-frame78 {
              left: 0px;
              right: 0px;
              height: 530px;
              margin: auto;
            }
          }
          @media (max-width: 479px) {
            .z-application3selfie-verification-frame43 {
              width: 100%;
            }
            .z-application3selfie-verification-frame78 {
              width: 479px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ZApplication3SelfieVerification
