import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Steps1 from '../components/steps1'
import Heading from '../components/heading'
import OfferDocuments from '../components/offer-documents'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const OfferOfferDocuments = (props) => {
  return (
    <>
      <div className="offer-offer-documents-container">
        <Head>
          <title>Offer-Offer-Documents - International Monthly Locust</title>
          <meta
            property="og:title"
            content="Offer-Offer-Documents - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper offer-offer-documents-container1">
          <div className="MainContainer offer-offer-documents-frame43">
            <Heading
              text="Below are the offer documents. Please review and sign them and we can then process your Equity Loan so that you can be paid!"
              heading="OFFER DOCUMENTS"
              image_src="/playground_assets/idverification.svg"
              image_src1="/playground_assets/offer.svg"
              rootClassName="heading-root-class-name17"
            ></Heading>
            <Link href="/offer-offer-document-signing">
              <a>
                <OfferDocuments
                  Name="Offer Document 1"
                  rootClassName="offer-documents-root-class-name"
                  className="offer-offer-documents-component2"
                ></OfferDocuments>
              </a>
            </Link>
            <Link href="/offer-offer-document-signing">
              <a>
                <OfferDocuments
                  Name="Loan 2"
                  rootClassName="offer-documents-root-class-name4"
                  className="offer-offer-documents-component3"
                ></OfferDocuments>
              </a>
            </Link>
            <Link href="/offer-offer-document-signing">
              <a>
                <OfferDocuments
                  rootClassName="offer-documents-root-class-name3"
                  className="offer-offer-documents-component4"
                ></OfferDocuments>
              </a>
            </Link>
            <Link href="/offer-offer-pending">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name32"
                  className="offer-offer-documents-component5"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name33"></Navbar>
        <Footer rootClassName="footer-root-class-name33"></Footer>
      </div>
      <style jsx>
        {`
          .offer-offer-documents-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .offer-offer-documents-component2 {
            text-decoration: none;
          }
          .offer-offer-documents-component3 {
            text-decoration: none;
          }
          .offer-offer-documents-component4 {
            text-decoration: none;
          }
          .offer-offer-documents-component5 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .offer-offer-documents-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .offer-offer-documents-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .offer-offer-documents-container1 {
              height: auto;
            }
            .offer-offer-documents-frame43 {
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

export default OfferOfferDocuments
