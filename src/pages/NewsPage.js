import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Axios from 'axios'
import NewsDetail from '../components/News/NewsDetail';


function NewsPage() {

  const { news_id } = useParams();

  const [news, setNews] = useState()
  const [loading, setLoading] = useState(true)
  const [lastNews, setLastNews] = useState()


  useEffect(() => {
    Axios.post("https://japi.jkorpor.com/getANews", {
      news_id: news_id
    }).then((res) => {
      setNews(res.data[0])
      setLoading(false)
    })

    Axios.get("https://japi.jkorpor.com/getNews").then((res) => {
      setLastNews(res.data)
    })

  }, [news_id])



  return (
    <>
      <Navbar />

      {loading === true ? null
        :
        <NewsDetail news={news} lastNews={lastNews} />
      }
    </>
  )
}

export default NewsPage