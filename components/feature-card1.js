import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard1 = (props) => {
  return (
    <>
      <div className={`feature-card1-feature-card ${props.rootClassName} `}>
        <h2 className="feature-card1-text heading1">{props.title}</h2>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="feature-card1-image"
        />
      </div>
      <style jsx>
        {`
          .feature-card1-feature-card {
            width: 100%;
            cursor: pointer;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            min-width: var(--dl-size-size-large);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            border-radius: 10px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card1-feature-card:hover {
            transform: scale(1.02);
          }
          .feature-card1-text {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .feature-card1-image {
            width: 100%;
            height: var(--dl-size-size-xlarge);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .feature-card1-root-class-name {
            min-width: 100%;
          }

          @media (max-width: 1200px) {
            .feature-card1-root-class-name {
              min-width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard1.defaultProps = {
  rootClassName: '',
  title: 'Lorem ipsum',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1500',
  image_alt: 'image',
}

FeatureCard1.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard1
