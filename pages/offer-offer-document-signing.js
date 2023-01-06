import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Steps1 from '../components/steps1'
import Heading from '../components/heading'
import BasicInput from '../components/basic-input'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const OfferOfferDocumentSigning = (props) => {
  return (
    <>
      <div className="offer-offer-document-signing-container">
        <Head>
          <title>
            Offer-Offer-Document-Signing - International Monthly Locust
          </title>
          <meta
            property="og:title"
            content="Offer-Offer-Document-Signing - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper offer-offer-document-signing-container1">
          <div className="MainContainer offer-offer-document-signing-frame43">
            <Heading
              text="Below are the offer documents. Please review and sign them and we can then process your Equity Loan so that you can be paid!"
              heading="OFFER DOCUMENTS"
              image_src="/playground_assets/idverification.svg"
              image_src1="/playground_assets/offer.svg"
              rootClassName="heading-root-class-name18"
            ></Heading>
            <img
              alt="image"
              src="/playground_assets/sign-1200w.png"
              className="offer-offer-document-signing-image"
            />
            <BasicInput
              rootClassName="basic-input-root-class-name32"
              textinput_placeholder="Signature"
            ></BasicInput>
            <Link href="/offer-offer-documents">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name33"
                  className="offer-offer-document-signing-component3"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name34"></Navbar>
        <Footer rootClassName="footer-root-class-name34"></Footer>
      </div>
      <style jsx>
        {`
          .offer-offer-document-signing-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .offer-offer-document-signing-image {
            width: 1009px;
            object-fit: cover;
          }
          .offer-offer-document-signing-component3 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .offer-offer-document-signing-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .offer-offer-document-signing-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .offer-offer-document-signing-container1 {
              height: auto;
            }
            .offer-offer-document-signing-frame43 {
              height: auto;
              margin-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .offer-offer-document-signing-image {
              width: 100%;
              height: 414px;
            }
          }
        `}
      </style>
    </>
  )
}

export default OfferOfferDocumentSigning
