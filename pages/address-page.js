import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import SearchComponent from '../components/search-component'
import Footer from '../components/footer'

const AddressPage = (props) => {
  return (
    <>
      <div className="address-page-container">
        <Head>
          <title>AddressPage - International Monthly Locust</title>
          <meta
            property="og:title"
            content="AddressPage - International Monthly Locust"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <Navbar rootClassName="navbar-root-class-name2"></Navbar>
        <SearchComponent rootClassName="search-component-root-class-name"></SearchComponent>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .address-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default AddressPage
