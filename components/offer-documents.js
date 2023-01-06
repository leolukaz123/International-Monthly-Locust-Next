import React from 'react'

import PropTypes from 'prop-types'

const OfferDocuments = (props) => {
  return (
    <>
      <div
        className={`offer-documents-enteryouremailadress ${props.rootClassName} `}
      >
        <div className="offer-documents-frame1">
          <div className="offer-documents-container">
            <svg viewBox="0 0 1024 1024" className="offer-documents-icon">
              <path d="M917.806 357.076c-22.21-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-368c-44.114 0-80 35.888-80 80v736c0 44.112 35.886 80 80 80h608c44.112 0 80-35.888 80-80v-496c0-14.332-4.372-39.35-42.194-90.924zM785.374 302.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.982 17.78 50.678 41.878 81.374 72.572v0zM896 944c0 8.672-7.328 16-16 16h-608c-8.672 0-16-7.328-16-16v-736c0-8.672 7.328-16 16-16 0 0 367.956-0.002 368 0v224c0 17.672 14.324 32 32 32h224v496z"></path>
              <path d="M602.924 42.196c-51.574-37.822-76.592-42.196-90.924-42.196h-368c-44.112 0-80 35.888-80 80v736c0 38.632 27.528 70.958 64 78.39v-814.39c0-8.672 7.328-16 16-16h486.876c-9.646-7.92-19.028-15.26-27.952-21.804z"></path>
            </svg>
            <input
              type="text"
              placeholder={props.Name}
              className="offer-documents-textinput Input input"
            />
          </div>
        </div>
        <div className="offer-documents-frame11">
          <div className="offer-documents-container1">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="offer-documents-icon03"
            >
              <path d="M438.857 146.286c-201.714 0-365.714 164-365.714 365.714s164 365.714 365.714 365.714 365.714-164 365.714-365.714-164-365.714-365.714-365.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="offer-documents-text Input">{props.text}</span>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="offer-documents-icon05"
            >
              <path d="M438.857 146.286c-201.714 0-365.714 164-365.714 365.714s164 365.714 365.714 365.714 365.714-164 365.714-365.714-164-365.714-365.714-365.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="offer-documents-icon07">
              <path d="M896 472.747v39.253c-0.043 106.027-43.051 201.941-112.64 271.445s-165.547 112.384-271.573 112.299-201.984-43.051-271.445-112.64-112.384-165.504-112.341-271.573 43.051-201.941 112.64-271.445 165.547-112.384 271.573-112.341c56.747 0.043 110.336 12.331 155.691 33.067 21.419 9.813 46.763 0.341 56.533-21.077s0.341-46.763-21.077-56.533c-56.619-25.856-122.283-40.747-191.104-40.789-129.579-0.085-246.997 52.437-331.947 137.259s-137.557 202.24-137.643 331.819 52.437 246.997 137.259 331.947 202.197 137.6 331.776 137.643 246.997-52.437 331.947-137.259 137.6-202.197 137.685-331.819v-39.253c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM908.501 140.501l-396.501 396.885-97.835-97.792c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l128 128c16.683 16.683 43.691 16.64 60.373 0l426.667-427.093c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="offer-documents-icon09">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM708 324l60 60-342 342-212-214 60-60 152 152z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="offer-documents-icon11">
              <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="offer-documents-icon13">
              <path d="M810 170v86h-596v-86h148l44-42h212l44 42h148zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .offer-documents-enteryouremailadress {
            width: 100%;
            height: var(--dl-size-size-medium);
            display: flex;
            padding: 24px 0;
            position: relative;
            box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
            background-color: rgba(255, 255, 255, 1);
          }
          .offer-documents-frame1 {
            width: 50%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            margin-left: 0px;
            border-color: transparent;
            justify-content: space-between;
          }
          .offer-documents-container {
            flex: 0 0 auto;
            width: 782px;
            height: 47px;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .offer-documents-icon {
            width: 24px;
            height: 24px;
          }
          .offer-documents-textinput {
            width: 100%;
            transition: 0.3s;
            border-width: 0px;
            border-radius: 0px;
          }
          .offer-documents-textinput:focus {
            border-color: rgba(0, 0, 0, 0.17);
            border-bottom-width: 1px;
          }
          .offer-documents-frame11 {
            width: 10%;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 0px;
            justify-content: flex-end;
          }
          .offer-documents-container1 {
            top: 0px;
            flex: 0 0 auto;
            left: -138px;
            width: 308px;
            bottom: 0px;
            height: 47px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .offer-documents-icon03 {
            width: 26px;
            height: 26px;
          }
          .offer-documents-text {
            width: 100%;
            font-style: normal;
            text-align: left;
            margin-left: var(--dl-space-space-unit);
            font-stretch: normal;
          }
          .offer-documents-icon05 {
            width: 26px;
            height: 26px;
            display: none;
          }
          .offer-documents-icon07 {
            width: 27px;
            height: 24px;
            display: none;
          }
          .offer-documents-icon09 {
            width: 34px;
            height: 46px;
            display: none;
          }
          .offer-documents-icon11 {
            width: 24px;
            height: 24px;
            display: none;
          }
          .offer-documents-icon13 {
            width: 24px;
            height: 24px;
            display: none;
            margin-right: var(--dl-space-space-unit);
          }

          @media (max-width: 1200px) {
            .offer-documents-container {
              width: 574px;
            }
          }
          @media (max-width: 991px) {
            .offer-documents-container {
              width: 479px;
            }
          }
          @media (max-width: 767px) {
            .offer-documents-enteryouremailadress {
              width: 100%;
              flex-direction: row;
            }
            .offer-documents-frame1 {
              width: 581px;
            }
            .offer-documents-frame11 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .offer-documents-enteryouremailadress {
              width: 100%;
              height: auto;
              flex-direction: column;
            }
            .offer-documents-frame1 {
              width: 100%;
              align-self: center;
              flex-direction: column;
            }
            .offer-documents-container {
              width: 100%;
              height: 57px;
              align-self: center;
              margin-left: 0px;
              flex-direction: column;
            }
            .offer-documents-textinput {
              text-align: center;
            }
            .offer-documents-frame11 {
              width: 100%;
              height: 52px;
              align-self: center;
              flex-direction: column;
            }
            .offer-documents-container1 {
              left: 0px;
              right: 0px;
              width: 100%;
              margin: auto;
              flex-direction: column;
              justify-content: center;
            }
            .offer-documents-icon03 {
              margin-left: 0px;
            }
            .offer-documents-text {
              text-align: center;
            }
            .offer-documents-icon13 {
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

OfferDocuments.defaultProps = {
  rootClassName: '',
  Name: 'Loan',
  text: 'Status: Not Signed',
}

OfferDocuments.propTypes = {
  rootClassName: PropTypes.string,
  Name: PropTypes.string,
  text: PropTypes.string,
}

export default OfferDocuments
