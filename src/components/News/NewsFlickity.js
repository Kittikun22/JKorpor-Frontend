import React from 'react'
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Divider
} from '@mui/material'
import Flickity from 'react-flickity-component'
import './newsFlickity.css'



function NewsFlickity({ lastNews }) {

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
        <>
            <Box pt={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography mb={2} sx={{ display: 'inline', fontSize: '2rem', fontWeight: 600, borderBottom: '4px solid #ffba00' }}>
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
                    {lastNews?.map((val, key) => {
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

            </Box >
        </>
    )
}

export default NewsFlickity