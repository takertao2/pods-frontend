import 'odometer/themes/odometer-theme-minimal.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-hint/css/index.css'

import 'assets/styles/normalize-opentype.css'
import 'assets/styles/index.css'
import 'assets/styles/utils.css'
import 'assets/styles/animations.css'
import 'assets/styles/transitions.css'

import React from 'react'
import { Slide, ToastContainer } from 'react-toastify'

import { ConnectMetamask } from '../lib/components/ConnectMetamask'
import EthersWrapper from '../lib/components/EthersWrapper'
import { Meta } from '../lib/components/Meta'

// This page has no blocking data requirements
// it'll be rendered as static HTML at build time
function Layout({ Component, pageProps }) {
  return <>
    <Meta
      title='Pod Reference Implementation'
    />

    <ToastContainer
      className='pool-toast'
      position='top-center'
      autoClose={6000}
      transition={Slide}
    />
    
    <EthersWrapper>
      <ConnectMetamask />

      <Component {...pageProps} />
    </EthersWrapper>
  </>
}

export default Layout