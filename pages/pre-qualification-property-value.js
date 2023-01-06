import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Steps1 from '../components/steps1'
import Heading from '../components/heading'
import SelectPrice from '../components/select-price'
import Confidence from '../components/confidence'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const PreQualificationPropertyValue = (props) => {
  return (
    <>
      <div className="pre-qualification-property-value-container">
        <Head>
          <title>
            Pre-Qualification-Property-Value - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="Pre-Qualification-Property-Value - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper pre-qualification-property-value-container1">
          <div className="MainContainer pre-qualification-property-value-frame43">
            <Heading
              text="You can look up your property value by searching for your property here https://www.onthehouse.com.au/"
              heading="PROPERTY VALUE"
              image_src1="/playground_assets/property_value.svg"
              rootClassName="heading-root-class-name3"
            ></Heading>
            <SelectPrice
              rootClassName="select-price-root-class-name5"
              textinput_placeholder="1400000"
            ></SelectPrice>
            <Confidence rootClassName="confidence-root-class-name"></Confidence>
            <Link href="/pre-qualification-mortgage-balance">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name18"
                  className="pre-qualification-property-value-component3"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name19"></Navbar>
        <Footer rootClassName="footer-root-class-name19"></Footer>
      </div>
      <style jsx>
        {`
          .pre-qualification-property-value-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .pre-qualification-property-value-component3 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .pre-qualification-property-value-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .pre-qualification-property-value-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .pre-qualification-property-value-container1 {
              height: auto;
              position: relative;
            }
            .pre-qualification-property-value-frame43 {
              height: auto;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default PreQualificationPropertyValue
