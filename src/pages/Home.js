import React from 'react'
import Navbar from '../components/Navbar'
import HomeBanner from '../components/Home-Components/HomeBanner'
import HomeLandingPage from '../components/Home-Components/HomeLandingPage'
import Footer from '../components/Home-Components/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <HomeBanner />
            <HomeLandingPage />
            <Footer />
        </>
    )
}

export default Home