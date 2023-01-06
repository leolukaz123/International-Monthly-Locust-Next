import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard = (props) => {
  return (
    <>
      <div className="feature-card-feature-card">
        <h2 className="feature-card-text">{props.heading}</h2>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="feature-card-image"
        />
        <svg viewBox="0 0 1024 1024" className="feature-card-icon">
          <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
        </svg>
      </div>
      <style jsx>
        {`
          .feature-card-feature-card {
            width: 320px;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: flex-start;
            border-radius: 10px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card-feature-card:hover {
            transform: scale(1.02);
          }
          .feature-card-text {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .feature-card-image {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .feature-card-icon {
            right: var(--dl-space-space-unit);
            width: 24px;
            bottom: var(--dl-space-space-unit);
            height: 24px;
            position: absolute;
          }
          @media (max-width: 1200px) {
            .feature-card-feature-card {
              width: var(--dl-size-size-xxlarge);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .feature-card-feature-card {
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard.defaultProps = {
  heading: 'Lorem ipsum',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=200',
  image_alt: 'image',
}

FeatureCard.propTypes = {
  heading: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard
