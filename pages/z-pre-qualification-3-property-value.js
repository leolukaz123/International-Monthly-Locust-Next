import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Steps from '../components/steps'
import Largebutton from '../components/largebutton'
import SelectPrice from '../components/select-price'
import Footer from '../components/footer'

const ZPreQualification3PropertyValue = (props) => {
  return (
    <>
      <div className="z-pre-qualification3property-value-container">
        <Head>
          <title>
            z-Pre-Qualification-3-Property-Value - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="z-Pre-Qualification-3-Property-Value - International Monthly Locust"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name4"></Navbar>
        <Steps></Steps>
        <div className="z-pre-qualification3property-value-container1">
          <div className="z-pre-qualification3property-value-frame43">
            <div className="z-pre-qualification3property-value-frame35">
              <img
                alt="location1745"
                src="/playground_assets/property_value.svg"
                className="z-pre-qualification3property-value-location"
              />
              <div className="z-pre-qualification3property-value-text-heading-subheading">
                <span className="z-pre-qualification3property-value-text heading1">
                  PROPERTY VALUE
                </span>
                <span className="z-pre-qualification3property-value-text1 body1">
                  <span>Write your address below to view property equity</span>
                </span>
              </div>
            </div>
            <div className="z-pre-qualification3property-value-frame79">
              <Link href="/z-pre-qualification-4-mortgage-balance">
                <a className="z-pre-qualification3property-value-link">
                  <Largebutton
                    rootClassName="largebutton-root-class-name2"
                    className="z-pre-qualification3property-value-component2"
                  ></Largebutton>
                </a>
              </Link>
            </div>
            <div className="z-pre-qualification3property-value-frame78">
              <div className="z-pre-qualification3property-value-container2">
                <div className="z-pre-qualification3property-value-container3">
                  <SelectPrice rootClassName="select-price-root-class-name"></SelectPrice>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
      <style jsx>
        {`
          .z-pre-qualification3property-value-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .z-pre-qualification3property-value-container1 {
            width: 100%;
            height: 421px;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            justify-content: center;
          }
          .z-pre-qualification3property-value-frame43 {
            width: 913px;
            height: 417px;
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
          .z-pre-qualification3property-value-frame35 {
            top: var(--dl-space-space-twounits);
            left: 102px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification3property-value-location {
            width: 50px;
            height: 50px;
            position: relative;
            margin-bottom: 20px;
          }
          .z-pre-qualification3property-value-text-heading-subheading {
            width: 709px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification3property-value-text {
            color: rgba(0, 0, 0, 1);
            width: 529px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 20px;
          }
          .z-pre-qualification3property-value-text1 {
            color: rgba(0, 0, 0, 1);
            width: 526px;
            height: auto;
            align-self: auto;
            text-align: center;
            line-height: normal;
            margin-right: 0;
            margin-bottom: 0;
          }
          .z-pre-qualification3property-value-frame79 {
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
          .z-pre-qualification3property-value-link {
            display: contents;
          }
          .z-pre-qualification3property-value-component2 {
            text-decoration: none;
          }
          .z-pre-qualification3property-value-frame78 {
            top: 197px;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 143px;
            margin: auto;
            display: flex;
            padding: 10px;
            position: absolute;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .z-pre-qualification3property-value-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .z-pre-qualification3property-value-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 140px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          @media (max-width: 991px) {
            .z-pre-qualification3property-value-frame43 {
              width: 893px;
            }
          }
          @media (max-width: 767px) {
            .z-pre-qualification3property-value-frame43 {
              width: 697px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .z-pre-qualification3property-value-frame35 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .z-pre-qualification3property-value-frame78 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
          }
          @media (max-width: 479px) {
            .z-pre-qualification3property-value-frame43 {
              width: 100%;
            }
            .z-pre-qualification3property-value-text-heading-subheading {
              width: 100%;
            }
            .z-pre-qualification3property-value-text1 {
              width: 100%;
            }
            .z-pre-qualification3property-value-frame78 {
              left: 0px;
              right: 0px;
              width: 100%;
              margin: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default ZPreQualification3PropertyValue
