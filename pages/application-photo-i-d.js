import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Steps1 from '../components/steps1'
import Heading from '../components/heading'
import UploadComponent from '../components/upload-component'
import PhotoDetails from '../components/photo-details'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const ApplicationPhotoID = (props) => {
  return (
    <>
      <div className="application-photo-i-d-container">
        <Head>
          <title>Application-Photo-ID - International Monthly Locust</title>
          <meta
            property="og:title"
            content="Application-Photo-ID - International Monthly Locust"
          />
        </Head>
        <Steps1></Steps1>
        <div className="MainWrapper application-photo-i-d-container1">
          <div className="MainContainer application-photo-i-d-frame43">
            <Heading
              text="First, we need to identify you to check your current credit score. Then we will be able to determine if you are eligible to use our product."
              heading="IDENTITY VERIFICATION"
              image_src="/playground_assets/idverification.svg"
              image_src1="/playground_assets/idverification.svg"
              rootClassName="heading-root-class-name11"
            ></Heading>
            <UploadComponent rootClassName="upload-component-root-class-name"></UploadComponent>
            <PhotoDetails rootClassName="photo-details-root-class-name1"></PhotoDetails>
            <PhotoDetails rootClassName="photo-details-root-class-name9"></PhotoDetails>
            <PhotoDetails rootClassName="photo-details-root-class-name8"></PhotoDetails>
            <PhotoDetails rootClassName="photo-details-root-class-name7"></PhotoDetails>
            <span className="application-photo-i-d-text body1">
              0/5 documents
            </span>
            <Link href="/application-property-confirmation">
              <a>
                <Largebutton
                  rootClassName="largebutton-root-class-name26"
                  className="application-photo-i-d-component07"
                ></Largebutton>
              </a>
            </Link>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name27"></Navbar>
        <Footer rootClassName="footer-root-class-name27"></Footer>
      </div>
      <style jsx>
        {`
          .application-photo-i-d-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .application-photo-i-d-text {
            margin-top: var(--dl-space-space-unit);
          }
          .application-photo-i-d-component07 {
            text-decoration: none;
          }
          @media (max-width: 1200px) {
            .application-photo-i-d-frame43 {
              margin-left: 0px;
              margin-right: 0px;
            }
          }
          @media (max-width: 991px) {
            .application-photo-i-d-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .application-photo-i-d-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .application-photo-i-d-container1 {
              height: auto;
            }
            .application-photo-i-d-frame43 {
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default ApplicationPhotoID
