import React, { useState, useEffect } from 'react'
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Divider,
    Button
} from '@mui/material'
import Axios from 'axios'
import Flickity from 'react-flickity-component'
import './whatIsKorporFlickity.css'


function HomeKorporNews() {

    const [allNews, setAllNews] = useState()

    useEffect(() => {

        Axios.get('https://japi.jkorpor.com/getNews').then((res) => {
            setAllNews(res.data)
        })

    }, [])


    const flickityOptions = {
        initialIndex: 0,
        selectedAttraction: 0.01,
        friction: 0.15,
        contain: true,
        pageDots: true,
        prevNextButtons: false,
        // wrapAround: true
    }


    return (
        <Box pt={4} pb={10} sx={{ background: '#FFF6BD' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
                <Typography sx={{ display: 'inline', fontSize: { xs: '2.5rem', md: '3rem' }, fontWeight: 600, borderBottom: '4px solid #ffba00' }}>
                    ข่าวสาร ก.พ.
                </Typography>
            </Box>

            <Box mx={{ xs: 0, md: 10 }} sx={{ display: 'block' }}>
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    reloadOnUpdate // default false
                    static // default false
                >
                    {allNews?.map((val, key) => {
                        return (
                            <Box sx={{ mx: 2 }} key={key}>
                                <Card
                                    sx={{
                                        width: 300, height: 350, borderRadius: 3, boxShadow: 2,
                                        '&:hover': {
                                            textDecoration: 'underline',
                                            textDecorationColor: '#ffba00'
                                        }
                                    }}>
                                    <CardActionArea
                                        sx={{ height: '100%' }}
                                        href={`/news/${val.news_id}`}>
                                        <CardMedia
                                            component="img"
                                            height="200px"
                                            image={val.image_src}
                                            alt={val.news_topic}
                                        />
                                        <CardContent>
                                            <Divider />
                                            <Typography
                                                gutterBottom
                                                variant="body1"
                                                component="div"
                                                sx={{
                                                    mt: 1
                                                }}>
                                                {val.news_topic}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Box>
                        )
                    })}
                </Flickity>

            </Box>

        </Box>
    )
}

export default HomeKorporNews