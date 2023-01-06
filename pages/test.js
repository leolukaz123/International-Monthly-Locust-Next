import React from 'react'
import Head from 'next/head'

import Heading from '../components/heading'
import InputSearch from '../components/input-search'
import BankSelect from '../components/bank-select'
import SelectPrice from '../components/select-price'
import ProgressBar from '../components/progress-bar'
import Largebutton from '../components/largebutton'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Test = (props) => {
  return (
    <>
      <div className="test-container">
        <Head>
          <title>Test - International Monthly Locust</title>
          <meta
            property="og:title"
            content="Test - International Monthly Locust"
          />
        </Head>
        <div className="test-steps">
          <div className="test-container01">
            <div className="test-step">
              <div className="test-container02">
                <div className="test-line"></div>
                <div className="test-container03">
                  <svg viewBox="0 0 1024 1024" className="test-icon">
                    <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                  </svg>
                </div>
                <div className="test-line1"></div>
              </div>
              <div className="test-container04">
                <span className="test-text">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="test-step1">
              <div className="test-container05">
                <div className="test-line2"></div>
                <div className="test-container06">
                  <svg viewBox="0 0 1024 1024" className="test-icon2">
                    <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                  </svg>
                </div>
                <div className="test-line3"></div>
              </div>
              <div className="test-container07">
                <span className="test-text03">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="test-step2">
              <div className="test-container08">
                <div className="test-line4"></div>
                <div className="test-container09">
                  <svg viewBox="0 0 1024 1024" className="test-icon4">
                    <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                    <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                  </svg>
                </div>
                <div className="test-line5"></div>
              </div>
              <div className="test-container10">
                <span className="test-text06">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="test-step3">
              <div className="test-container11">
                <div className="test-line6"></div>
                <div className="test-container12">
                  <svg viewBox="0 0 1024 1024" className="test-icon7">
                    <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                  </svg>
                </div>
                <div className="test-line7"></div>
              </div>
              <div className="test-container13">
                <span className="test-text09">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="test-container14 MainWrapper">
          <div className="MainContainer test-frame43">
            <Heading
              text="Some other title"
              heading="Title"
              rootClassName="heading-root-class-name1"
            ></Heading>
            <InputSearch rootClassName="input-search-root-class-name3"></InputSearch>
            <div className="test-container15">
              <span className="test-text12 body1">
                This is some more information
              </span>
              <BankSelect rootClassName="bank-select-root-class-name17"></BankSelect>
              <SelectPrice rootClassName="select-price-root-class-name7"></SelectPrice>
              <SelectPrice rootClassName="select-price-root-class-name4"></SelectPrice>
            </div>
            <ProgressBar rootClassName="progress-bar-root-class-name1"></ProgressBar>
            <img
              alt="image"
              src="/playground_assets/map-1200w.png"
              className="test-image"
            />
            <Largebutton rootClassName="largebutton-root-class-name16"></Largebutton>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name17"></Navbar>
        <Footer rootClassName="footer-root-class-name17"></Footer>
      </div>
      <style jsx>
        {`
          .test-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .test-steps {
            width: 1204px;
            display: flex;
            padding: 0px;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            margin-top: 117px;
            align-items: center;
            margin-left: var(--dl-space-space-sixunits);
            margin-right: var(--dl-space-space-sixunits);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .test-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
          }
          .test-step {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .test-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .test-line {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .test-container03 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .test-icon {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          .test-line1 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .test-container04 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .test-text {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .test-step1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .test-container05 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .test-line2 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .test-container06 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .test-icon2 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          .test-line3 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .test-container07 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .test-text03 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .test-step2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .test-container08 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .test-line4 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .test-container09 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .test-icon4 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          .test-line5 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .test-container10 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .test-text06 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .test-step3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .test-container11 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .test-line6 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .test-container12 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .test-icon7 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          .test-line7 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .test-container13 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .test-text09 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .test-container14 {
            margin-top: 0px;
          }
          .test-container15 {
            width: 100%;
            height: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .test-text12 {
            height: 100%;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .test-image {
            width: 100%;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 1200px) {
            .test-container15 {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .test-frame43 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .test-steps {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .test-container01 {
              align-items: flex-start;
              padding-left: var(--dl-space-space-fiveunits);
              flex-direction: column;
            }
            .test-step {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .test-container02 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .test-line1 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .test-container04 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .test-text {
              text-align: left;
            }
            .test-step1 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .test-container05 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .test-line2 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .test-line3 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .test-container07 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .test-text03 {
              text-align: left;
            }
            .test-step2 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .test-container08 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .test-line4 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .test-line5 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .test-container10 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .test-text06 {
              text-align: left;
            }
            .test-step3 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .test-container11 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .test-line6 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .test-line7 {
              border-color: transparent;
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .test-container13 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .test-text09 {
              text-align: left;
            }
            .test-frame43 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .test-steps {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .test-container01 {
              padding-left: 0px;
            }
            .test-container04 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .test-container07 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .test-container10 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .test-container13 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .test-frame43 {
              height: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Test
