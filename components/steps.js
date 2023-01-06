import React from 'react'

import PropTypes from 'prop-types'

const Steps = (props) => {
  return (
    <>
      <div className={`steps-steps ${props.rootClassName} `}>
        <div className="steps-container">
          <div className="steps-step">
            <div className="steps-container01">
              <div className="steps-line"></div>
              <div className="steps-container02">
                <a
                  href={props.link_icon}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="steps-link"
                >
                  <svg viewBox="0 0 1024 1024" className="steps-icon">
                    <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                  </svg>
                </a>
              </div>
              <div className="steps-line1"></div>
            </div>
            <div className="steps-container03">
              <span className="steps-text body1">
                <span>Pre-Qualification</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="steps-step1">
            <div className="steps-container04">
              <div className="steps-line2"></div>
              <div className="steps-container05">
                <a
                  href={props.link_icon1}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="steps-link1"
                >
                  <svg viewBox="0 0 1024 1024" className="steps-icon2">
                    <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                  </svg>
                </a>
              </div>
              <div className="steps-line3"></div>
            </div>
            <div className="steps-container06">
              <span className="steps-text03 body1">
                <span>Appllication</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="steps-step2">
            <div className="steps-container07">
              <div className="steps-line4"></div>
              <div className="steps-container08">
                <a
                  href={props.link_icon2}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="steps-link2"
                >
                  <svg viewBox="0 0 1024 1024" className="steps-icon4">
                    <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                    <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                  </svg>
                </a>
              </div>
              <div className="steps-line5"></div>
            </div>
            <div className="steps-container09">
              <span className="steps-text06 body1">
                <span>Processing</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="steps-step3">
            <div className="steps-container10">
              <div className="steps-line6"></div>
              <div className="steps-container11">
                <a
                  href={props.link_icon3}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="steps-link3"
                >
                  <svg viewBox="0 0 1024 1024" className="steps-icon7">
                    <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                  </svg>
                </a>
              </div>
              <div className="steps-line7"></div>
            </div>
            <div className="steps-container12">
              <span className="steps-text09 body1">
                <span>something else</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps-steps {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-sixunits);
            position: relative;
            max-width: 100%;
            align-items: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .steps-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .steps-step {
            width: 25%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .steps-container01 {
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
          .steps-line {
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
          .steps-container02 {
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
          .steps-link {
            display: contents;
          }
          .steps-icon {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .steps-line1 {
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
          .steps-container03 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .steps-text {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .steps-step1 {
            width: 25%;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .steps-container04 {
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
          .steps-line2 {
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
          .steps-container05 {
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
          .steps-link1 {
            display: contents;
          }
          .steps-icon2 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .steps-line3 {
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
          .steps-container06 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .steps-text03 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .steps-step2 {
            width: 25%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .steps-container07 {
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
          .steps-line4 {
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
          .steps-container08 {
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
          .steps-link2 {
            display: contents;
          }
          .steps-icon4 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .steps-line5 {
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
          .steps-container09 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .steps-text06 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .steps-step3 {
            width: 25%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .steps-container10 {
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
          .steps-line6 {
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
          .steps-container11 {
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
          .steps-link3 {
            display: contents;
          }
          .steps-icon7 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .steps-line7 {
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
          .steps-container12 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .steps-text09 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .steps-root-class-name {
            max-width: 100%;
          }
          @media (max-width: 767px) {
            .steps-steps {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .steps-container {
              align-items: flex-start;
              padding-left: var(--dl-space-space-fiveunits);
              flex-direction: column;
            }
            .steps-step {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .steps-container01 {
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
            .steps-line1 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .steps-container03 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .steps-text {
              text-align: left;
            }
            .steps-step1 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .steps-container04 {
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
            .steps-line2 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .steps-line3 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .steps-container06 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .steps-text03 {
              text-align: left;
            }
            .steps-step2 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .steps-container07 {
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
            .steps-line4 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .steps-line5 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .steps-container09 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .steps-text06 {
              text-align: left;
            }
            .steps-step3 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .steps-container10 {
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
            .steps-line6 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .steps-line7 {
              border-color: transparent;
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .steps-container12 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .steps-text09 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .steps-steps {
              height: 345px;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .steps-container {
              padding-left: 0px;
            }
            .steps-container03 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .steps-container06 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .steps-container09 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .steps-container12 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Steps.defaultProps = {
  link_icon3: '',
  rootClassName: '',
  link_icon1: '',
  link_icon2: '',
  link_icon: '',
}

Steps.propTypes = {
  link_icon3: PropTypes.string,
  rootClassName: PropTypes.string,
  link_icon1: PropTypes.string,
  link_icon2: PropTypes.string,
  link_icon: PropTypes.string,
}

export default Steps
