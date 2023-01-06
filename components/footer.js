import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className={`footer-footer ${props.rootClassName} `}>
        <div className="footer-container">
          <div className="footer-logo">
            <img src="/playground_assets/logo.svg" className="footer-image" />
            <span className="footer-text heading1">
              <br></br>
              <span>Easy Equity</span>
            </span>
          </div>
          <div className="footer-links-container">
            <div className="footer-container1">
              <div className="footer-product-container">
                <span className="footer-text03 BodySemibold">{props.text}</span>
                <span className="footer-text04 body1">{props.text1}</span>
                <span className="footer-text05 body1">{props.text2}</span>
                <span className="footer-text06 body1">{props.text3}</span>
                <span className="body1">{props.text4}</span>
              </div>
              <div className="footer-company-container">
                <span className="footer-text08 BodySemibold">
                  {props.text5}
                </span>
                <span className="footer-text09 body1">{props.text6}</span>
                <span className="footer-text10 body1">{props.text7}</span>
                <span className="footer-text11">{props.text8}</span>
                <span className="body1">{props.text9}</span>
              </div>
            </div>
            <div className="footer-container2">
              <div className="footer-contact">
                <span className="footer-text13 BodySemibold">
                  {props.text10}
                </span>
                <span className="footer-text14 body1">{props.text11}</span>
                <span className="body1">{props.text12}</span>
              </div>
              <div className="footer-socials">
                <span className="footer-text16 BodySemibold">
                  {props.text13}
                </span>
                <div className="footer-icon-group">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="footer-icon"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="footer-icon2"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="footer-icon4"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-separator"></div>
        <span className="footer-text17 BodySemibold">
          © 2022 EasyEquity, All Rights Reserved.
        </span>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: 184px;
            padding-right: 184px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .footer-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-logo {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-image {
            height: 2rem;
          }
          .footer-text {
            margin-top: var(--dl-space-space-oneandhalfunits);
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .footer-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-container1 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text03 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text08 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-text09 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text10 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text11 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text13 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-text14 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text16 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .footer-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .footer-icon4 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .footer-separator {
            width: 100%;
            height: 1px;
            max-width: 1200;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .footer-text17 {
            align-self: center;
          }

          .footer-root-class-name1 {
            left: 0px;
            bottom: 0px;
            position: static;
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name2 {
            left: 0px;
            bottom: 0px;
            position: static;
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name3 {
            left: 0px;
            bottom: 0px;
            position: static;
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name4 {
            left: 0px;
            bottom: 0px;
            position: static;
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name5 {
            left: 0px;
            bottom: 0px;
            position: static;
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name6 {
            left: 0px;
            bottom: 0px;
            position: static;
            margin-top: var(--dl-space-space-sixunits);
          }

          .footer-root-class-name8 {
            left: 0px;
            bottom: 0px;
            position: static;
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name9 {
            left: 0px;
            bottom: 0px;
            position: static;
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name10 {
            left: 0px;
            bottom: 0px;
            position: static;
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name11 {
            left: 0px;
            bottom: 0px;
            position: static;
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name12 {
            left: 0px;
            bottom: 0px;
            position: static;
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name13 {
            left: 0px;
            bottom: 0px;
            position: static;
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name14 {
            left: 0px;
            bottom: 0px;
            position: static;
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name15 {
            left: 0px;
            bottom: 0px;
            position: static;
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name16 {
            left: 0px;
            bottom: 0px;
            position: static;
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name17 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name18 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name19 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name20 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name21 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name22 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name23 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name24 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name25 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name26 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name27 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name28 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name29 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name30 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name31 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name32 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name33 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name34 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name35 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer-root-class-name36 {
            margin-top: var(--dl-space-space-sixunits);
          }
          @media (max-width: 1200px) {
            .footer-footer {
              padding-left: var(--dl-space-space-sixunits);
              padding-right: var(--dl-space-space-sixunits);
            }
          }
          @media (max-width: 991px) {
            .footer-footer {
              flex-direction: column;
            }
            .footer-container1 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .footer-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer-container {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-logo {
              align-items: center;
            }
            .footer-image {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .footer-container1 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .footer-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding: var(--dl-space-space-unit);
              margin-top: var(--dl-space-space-sixunits);
            }
            .footer-container {
              align-items: center;
              flex-direction: column;
            }
            .footer-image {
              margin-bottom: 0px;
            }
            .footer-text {
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .footer-links-container {
              align-items: center;
              flex-direction: column;
            }
            .footer-container1 {
              margin-right: 0px;
              justify-content: center;
            }
            .footer-container2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              margin-bottom: 0px;
            }
            .footer-contact {
              align-items: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-text17 {
              text-align: center;
            }
            .footer-root-class-name17 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name18 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name19 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name20 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name21 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name22 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name23 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name24 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name25 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name26 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name27 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name28 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name29 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name30 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name31 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name32 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name33 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name34 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name35 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
            .footer-root-class-name36 {
              left: 0px;
              bottom: 15px;
              position: static;
              margin-top: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  text9: 'Blog',
  text3: 'Tutorials',
  text13: 'Follow Us',
  rootClassName: '',
  text4: 'Releases',
  text7: 'Careers',
  image_src: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  text8: 'Contact',
  text5: 'Company',
  text10: 'Contact Us',
  text6: 'About',
  text12: '+123 (4567) 890',
  text: 'Product',
  text2: 'Pricing',
  image_alt: 'logo',
  text11: 'hello@easyequity.com.au',
  text1: 'Features',
}

Footer.propTypes = {
  text9: PropTypes.string,
  text3: PropTypes.string,
  text13: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text7: PropTypes.string,
  image_src: PropTypes.string,
  text8: PropTypes.string,
  text5: PropTypes.string,
  text10: PropTypes.string,
  text6: PropTypes.string,
  text12: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  image_alt: PropTypes.string,
  text11: PropTypes.string,
  text1: PropTypes.string,
}

export default Footer