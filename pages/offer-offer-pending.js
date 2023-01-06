import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Steps1 from '../components/steps1'
import Heading from '../components/heading'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const OfferOfferPending = (props) => {
  return (
    <>
      <div className="offer-offer-pending-container">
        <Head>
          <title>Offer-Offer-Pending - International Monthly Locust</title>
          <meta
            property="og:title"
            content="Offer-Offer-Pending - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper offer-offer-pending-container1">
          <div className="MainContainer offer-offer-pending-frame43">
            <Heading
              text="Thank you for submitting the application, we will. be back to you shortly"
              heading="APPLICATION PENDING"
              image_src="/playground_assets/pending.svg"
              image_src1="/playground_assets/pending.svg"
              rootClassName="heading-root-class-name20"
            ></Heading>
            <Link href="/">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name35"
                  className="offer-offer-pending-component2"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name36"></Navbar>
        <Footer rootClassName="footer-root-class-name36"></Footer>
      </div>
      <style jsx>
        {`
          .offer-offer-pending-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .offer-offer-pending-component2 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .offer-offer-pending-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .offer-offer-pending-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .offer-offer-pending-container1 {
              height: auto;
            }
            .offer-offer-pending-frame43 {
              height: auto;
              margin-top: 0px;
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default OfferOfferPending
