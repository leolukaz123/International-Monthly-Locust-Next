import React from 'react'

import PropTypes from 'prop-types'

const Heading = (props) => {
  return (
    <>
      <div className={`heading-frame35 ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src1}
          className="heading-image"
        />
        <h1 className="heading-text">{props.heading}</h1>
        <span className="heading-text1 body1">{props.text}</span>
        <a href={props.link_icon1} className="heading-link">
          <svg viewBox="0 0 1024 1024" className="heading-icon">
            <path d="M896 470v84h-604l152 154-60 60-256-256 256-256 60 60-152 154h604z"></path>
          </svg>
        </a>
        <svg viewBox="0 0 1024 1024" className="heading-icon2">
          <path d="M512 256q70 0 120 50t50 120q0 54-64 111t-64 103h-84q0-46 20-79t44-48 44-37 20-50q0-34-26-59t-60-25-60 25-26 59h-84q0-70 50-120t120-50zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 768v-86h84v86h-84z"></path>
        </svg>
      </div>
      <style jsx>
        {`
          .heading-frame35 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .heading-image {
            width: 47px;
            height: auto;
            object-fit: cover;
          }
          .heading-text {
            font-size: 30px;
            font-style: normal;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: center;
            font-family: Lato;
            font-weight: 400;
            line-height: 1.15;
            font-stretch: normal;
            text-transform: none;
            text-decoration: none;
          }
          .heading-text1 {
            width: 100%;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
          }
          .heading-link {
            display: contents;
          }
          .heading-icon {
            top: 0px;
            left: 0px;
            width: 24px;
            cursor: pointer;
            height: 24px;
            position: absolute;
            text-decoration: none;
          }
          .heading-icon2 {
            top: 0px;
            fill: var(--dl-color-default-1aa7ec1);
            right: 0px;
            width: 24px;
            cursor: pointer;
            height: 24px;
            position: absolute;
            transition: 0.3s;
          }
          .heading-icon2:hover {
            opacity: 0.8;
          }
          .heading-root-class-name {
            top: var(--dl-space-space-threeunits);
            left: 0px;
            right: 0px;
            margin: auto;
            position: absolute;
          }

          @media (max-width: 767px) {
            .heading-frame35 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .heading-root-class-name11 {
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .heading-frame35 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .heading-root-class-name3 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Heading.defaultProps = {
  link_icon1: '/',
  link_icon: '/',
  text: 'Text',
  image_alt: 'image',
  heading: 'Heading',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src1: '/playground_assets/location.svg',
  rootClassName: '',
}

Heading.propTypes = {
  link_icon1: PropTypes.string,
  link_icon: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Heading
