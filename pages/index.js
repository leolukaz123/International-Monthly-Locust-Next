import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import BasicButton from '../components/basic-button'
import FeatureCard1 from '../components/feature-card1'
import TestimonialCard1 from '../components/testimonial-card1'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>International Monthly Locust</title>
          <meta property="og:title" content="International Monthly Locust" />
        </Head>
        <Navbar></Navbar>
        <div className="home-hero">
          <span className="home-text">Easy Equity</span>
          <h1 className="home-text01">
            Easily unlock your housing equity again cats
          </h1>
          <Link href="/pre-qualification-confirm-address">
            <a className="home-link">
              <BasicButton
                rootClassName="basic-button-root-class-name2"
                className="home-component01"
              ></BasicButton>
            </a>
          </Link>
        </div>
        <div className="home-social-bar">
          <svg viewBox="0 0 950.8571428571428 1024" className="home-icon">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="home-icon02">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" className="home-icon04">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
            <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="home-icon08">
            <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
          </svg>
        </div>
        <div className="home-banner">
          <h1 className="home-text02 heading1">Our Mission</h1>
          <span className="home-text03 body1">
            Our mission is to help people to access their equity faster and
            easier than ever. Property is one of the most valuable asset classes
            in the world, there are trillions of dollars of locked value sitting
            on every single street corner. For most people the only way to
            access the equity they have earned is through selling their house or
            taking on more debt. We believe there is a better way to unlock
            equity whilst retaining ownership. Our mission is to empower every
            owner to use their equity to create value in the world.
          </span>
          <Link href="/pre-qualification-confirm-address">
            <a className="home-link1">
              <BasicButton
                button="Read More"
                rootClassName="basic-button-root-class-name3"
                className="home-component02"
              ></BasicButton>
            </a>
          </Link>
        </div>
        <div className="home-stats">
          <div className="home-stat">
            <h1 className="home-text04">$0</h1>
            <span className="home-text05">Average monthly repayment</span>
            <span className="home-text06">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </span>
          </div>
          <div className="home-stat1">
            <h1 className="home-text07">$3.5b</h1>
            <span className="home-text08">Value of properties</span>
            <span className="home-text09">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </span>
          </div>
          <div className="home-stat2">
            <h1 className="home-text10">$2.6m</h1>
            <span className="home-text11">In monthly repayments saved</span>
            <span className="home-text12">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </span>
          </div>
          <div className="home-stat3">
            <h1 className="home-text13">
              <span>24/7</span>
            </h1>
            <span className="home-text15">Support</span>
            <span className="home-text16">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </span>
          </div>
        </div>
        <video
          src="https://contentimages.o-prod.unison.com/images/unison-3.0/Homepage_Video_Preview.mp4"
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          autoPlay
          controls
          className="home-video"
        ></video>
        <div className="home-features">
          <h1 className="home-text17 heading1">
            How will you use your equity?
          </h1>
          <div className="home-container01">
            <FeatureCard1
              title="Do Renovations"
              image_src="https://images.unsplash.com/photo-1597476817120-9b82cef5ce82?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxyZW5vdmF0aW9uc3xlbnwwfHx8fDE2NzI4MTEyMjA&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName"
            ></FeatureCard1>
            <FeatureCard1
              title="Eliminate Debt"
              image_src="https://images.unsplash.com/photo-1539141086657-b9cc8d93ad3c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI4fHxkZWJ0fGVufDB8fHx8MTY3MjgxMTIwMw&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName1"
            ></FeatureCard1>
            <FeatureCard1
              title="Start a business"
              image_src="https://images.unsplash.com/photo-1664575599736-c5197c684128?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxidXNpbmVzc3xlbnwwfHx8fDE2NzI4MTA4NDE&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName2"
            ></FeatureCard1>
            <FeatureCard1
              title="Purchase a Gift"
              image_src="https://images.unsplash.com/photo-1592903297149-37fb25202dfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGdpZnR8ZW58MHx8fHwxNjcyODEwODUy&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName3"
            ></FeatureCard1>
          </div>
        </div>
        <div className="home-pricing">
          <div className="home-container02">
            <div className="home-container03">
              <h1 className="heading1">How we compare</h1>
              <span className="home-text19 body1">
                When compared to other mortgage providers Easy Equity has many
                benefits. Zero repayments enables you to save money and put it
                to work. 
              </span>
              <span className="home-text20 body1">
                Here is an example of a property worth $1.5m AUD comparing the
                amount paid vs the amount saved.
              </span>
            </div>
            <div className="home-container04">
              <div className="home-container05">
                <span className="home-text21">Easy Equity</span>
                <span className="home-text22">$0</span>
                <span className="home-text23">PER MONTH</span>
                <span className="home-text24">
                  <span className="home-text25">30</span>
                  <span> Years</span>
                </span>
                <span className="home-text27">
                  <span className="home-text28">0%</span>
                  <span> Interest rate</span>
                </span>
                <span className="home-text30">Live in your house</span>
                <span className="home-text31">No Monthly Repayments</span>
                <Link href="/pre-qualification-confirm-address">
                  <a className="home-link2">
                    <BasicButton
                      rootClassName="basic-button-root-class-name1"
                      className="home-component07"
                    ></BasicButton>
                  </a>
                </Link>
              </div>
              <div className="home-container06">
                <span className="home-text32">Other Lender</span>
                <span className="home-text33">$1200</span>
                <span className="home-text34">PER MONTH</span>
                <span className="home-text35">
                  <span className="home-text36">30</span>
                  <span> Years</span>
                </span>
                <span className="home-text38">
                  <span className="home-text39">4-7%</span>
                  <span> Interest Rate</span>
                </span>
                <span className="home-text41">
                  If you default will lose house
                </span>
                <span className="home-text42">
                  Increasing Monthly Repayments
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-testimonial">
          <div className="home-container07">
            <h1 className="home-text43 heading1">
              <span>What they’re saying</span>
              <br></br>
            </h1>
            <span className="home-text46 body1">
              Our customers love what we do and we always want to share our
              stories of success. 
            </span>
            <div className="home-container08">
              <TestimonialCard1
                picture_src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName2"
              ></TestimonialCard1>
              <TestimonialCard1 rootClassName="rootClassName"></TestimonialCard1>
              <TestimonialCard1
                picture_src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName1"
              ></TestimonialCard1>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name7"></Footer>
        <div className="home-hero1">
          <div className="home-container09">
            <h1 className="home-text47">
              Access Equity Fast with $0 monthly repayments
            </h1>
            <span className="home-text48">
              We make it very easy for you to unlock equity from your home. Just
              fill out our 5 min estimate to see how much equity you could
              access today!
            </span>
            <div className="home-btn-group">
              <Link href="/pre-qualification-confirm-address">
                <a className="home-link3">
                  <BasicButton
                    rootClassName="basic-button-root-class-name"
                    className="home-component12"
                  ></BasicButton>
                </a>
              </Link>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/guy-1400w.png"
            className="home-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxsZWF2ZXN8ZW58MHx8fHwxNjcyODEzMjE3&ixlib=rb-4.0.3&w=1500');
            background-position: center;
          }
          .home-text {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .home-text01 {
            color: var(--dl-color-gray-white);
            width: 529px;
            font-size: 50px;
            max-width: 450px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Lato;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-link {
            display: contents;
          }
          .home-component01 {
            text-decoration: none;
          }
          .home-social-bar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            justify-content: center;
            background-color: var(--dl-color-default-1aa7ec1);
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text02 {
            text-align: center;
          }
          .home-text03 {
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-link1 {
            display: contents;
          }
          .home-component02 {
            text-decoration: none;
          }
          .home-stats {
            width: 100%;
            height: 345px;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-stat {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text04 {
            color: var(--dl-color-default-1aa7ec1);
            font-size: 3rem;
          }
          .home-text05 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text06 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-stat1 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text07 {
            color: var(--dl-color-default-1aa7ec1);
            font-size: 3rem;
          }
          .home-text08 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text09 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-stat2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text10 {
            color: var(--dl-color-default-1aa7ec1);
            font-size: 3rem;
          }
          .home-text11 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text12 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-stat3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text13 {
            color: var(--dl-color-default-1aa7ec1);
            font-size: 3rem;
          }
          .home-text15 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text16 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-video {
            width: 812px;
            height: 455px;
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text17 {
            align-self: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            align-items: flex-start;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-pricing {
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: var(--dl-color-default-style2);
          }
          .home-container02 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            justify-content: center;
          }
          .home-container03 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text19 {
            color: var(--dl-color-gray-500);
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text20 {
            color: var(--dl-color-gray-500);
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-container04 {
            flex: 2;
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .home-container05 {
            flex: 1;
            height: 450px;
            display: flex;
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 10px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-white);
          }
          .home-container05:hover {
            transform: scale(1.02);
          }
          .home-text21 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .home-text22 {
            margin: var(--dl-space-space-twounits);
            font-size: 4rem;
            font-family: Raleway;
            font-weight: 200;
          }
          .home-text23 {
            font-weight: bold;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text24 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text25 {
            font-weight: 700;
          }
          .home-text27 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text28 {
            font-weight: 700;
          }
          .home-text30 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text31 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-link2 {
            display: contents;
          }
          .home-component07 {
            text-decoration: none;
          }
          .home-container06 {
            flex: 1;
            color: var(--dl-color-gray-white);
            height: 450px;
            display: flex;
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 10px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-default-1aa7ec1);
          }
          .home-container06:hover {
            transform: scale(1.02);
          }
          .home-text32 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .home-text33 {
            margin: var(--dl-space-space-twounits);
            font-size: 4rem;
            font-family: Raleway;
            font-weight: 200;
          }
          .home-text34 {
            font-weight: bold;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text35 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text36 {
            font-weight: 700;
          }
          .home-text38 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text39 {
            font-weight: 700;
          }
          .home-text41 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text42 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-testimonial {
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: var(--dl-color-default-1aa7ec1);
          }
          .home-container07 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text43 {
            color: var(--dl-color-gray-white);
          }
          .home-text46 {
            color: var(--dl-color-gray-white);
            max-width: 600px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-container08 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-hero1 {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 120px;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container09 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text47 {
            font-size: 3rem;
            max-width: 450px;
          }
          .home-text48 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link3 {
            display: contents;
          }
          .home-component12 {
            text-decoration: none;
          }
          .home-image {
            width: 553px;
            height: auto;
            object-fit: contain;
          }
          @media (max-width: 1200px) {
            .home-text04 {
              color: var(--dl-color-default-1aa7ec1);
            }
            .home-text07 {
              color: var(--dl-color-default-1aa7ec1);
            }
            .home-text10 {
              color: var(--dl-color-default-1aa7ec1);
            }
            .home-text13 {
              color: var(--dl-color-default-1aa7ec1);
            }
            .home-container01 {
              height: 487px;
              align-self: stretch;
            }
            .home-testimonial {
              background-color: var(--dl-color-default-1aa7ec1);
            }
          }
          @media (max-width: 991px) {
            .home-text03 {
              max-width: 100%;
            }
            .home-text04 {
              text-align: center;
            }
            .home-text07 {
              text-align: center;
            }
            .home-text10 {
              text-align: center;
            }
            .home-text13 {
              text-align: center;
            }
            .home-text17 {
              align-self: center;
            }
            .home-container01 {
              grid-template-columns: 1fr 1fr;
            }
            .home-container02 {
              align-items: center;
              flex-direction: column;
            }
            .home-container03 {
              align-items: center;
            }
            .home-text19 {
              text-align: center;
            }
            .home-text20 {
              text-align: center;
            }
            .home-container04 {
              width: 100%;
            }
            .home-text43 {
              text-align: center;
            }
            .home-text46 {
              text-align: center;
            }
            .home-container08 {
              grid-template-columns: 1fr;
            }
            .home-hero1 {
              flex-direction: column;
            }
            .home-container09 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-text47 {
              text-align: center;
            }
            .home-text48 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-social-bar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text03 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-stats {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              grid-template-columns: 1fr 1fr;
            }
            .home-text05 {
              text-align: center;
            }
            .home-text08 {
              text-align: center;
            }
            .home-text11 {
              text-align: center;
            }
            .home-text15 {
              text-align: center;
            }
            .home-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container02 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container04 {
              flex-direction: column;
            }
            .home-container05 {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-container06 {
              width: 100%;
            }
            .home-container07 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text48 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-image {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-social-bar {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-stats {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
            .home-video {
              width: 100%;
              height: 294px;
              margin-top: 242px;
            }
            .home-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container01 {
              grid-gap: var(--dl-space-space-halfunit);
            }
            .home-container02 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container07 {
              margin-top: var(--dl-space-space-sixunits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-hero1 {
              margin-top: var(--dl-space-space-sixunits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container09 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text47 {
              font-size: 3rem;
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-image {
              width: 100%;
              height: 479px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
