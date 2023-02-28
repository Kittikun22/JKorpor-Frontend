import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import NewsFlickity from '../components/News/NewsFlickity'
import NewsTable from '../components/News/NewsTable'
import Axios from 'axios'
import { Box } from '@mui/material'

function News() {

    const [lastNews, setLastNews] = useState()
    const [allNews, setAllNews] = useState()

    useEffect(() => {

        Axios.get('https://japi.jkorpor.com/getNews').then((res) => {
            setLastNews(res.data)
        })

        Axios.get('https://japi.jkorpor.com/getAllNews').then((res) => {
            setAllNews(res.data)
        })
    }, [])

    return (
        <>
            <Navbar />
            <Box sx={{ background: "#FFF6BD" }}>
                <NewsFlickity lastNews={lastNews} />
                <NewsTable allNews={allNews} lastNews={lastNews}/>
            </Box>
        </>
    )
}

export default News