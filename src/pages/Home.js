import React from 'react'
import Navbar from '../components/Navbar'
import HomeBanner from '../components/Home-Components/HomeBanner'
import Footer from '../components/Home-Components/Footer'
import HomeCountDown from '../components/Home-Components/HomeCountDown'
import HomeBook from '../components/Home-Components/HomeBook'
import HomeKorporNews from '../components/Home-Components/HomeKorporNews'
import HomeWhatIsKorpor from '../components/Home-Components/HomeWhatIsKorpor'

function Home() {
    return (
        <>
            <Navbar />
            <HomeBanner />
            <HomeCountDown />
            <HomeBook />
            <HomeWhatIsKorpor />
            <HomeKorporNews />
            <Footer />
        </>
    )
}

export default Home