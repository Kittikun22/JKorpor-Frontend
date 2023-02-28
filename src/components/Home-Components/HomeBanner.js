import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Flickity from 'react-flickity-component'
import './BannerFlickity.css'
import Axios from 'axios'


function HomeBanner() {

    const [banners, setBanners] = useState()

    const bannerXs = banners?.filter(val => val.banner_type === 'xs')
    const bannerMd = banners?.filter(val => val.banner_type === 'md')

    useEffect(() => {
        Axios.get('https://japi.jkorpor.com/getBanner').then((res) => {
            setBanners(res.data)
        })
    }, [])


    const flickityOptions = {
        autoPlay: 3000,
        initialIndex: 0,
        selectedAttraction: 0.01,
        friction: 0.15,
        contain: true,
        pageDots: false,
        wrapAround: true,
        prevNextButtons: false
    }

    return (
        <>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    reloadOnUpdate // default false
                    static // default false
                >
                    {bannerMd?.map((val, key) => {
                        return (
                            <Box
                                component="img"
                                key={key}
                                src={val.image_src}
                                alt={val.image_alt}
                                sx={{ width: '100%', minHeight: '90%' }}
                            />
                        )
                    })}
                </Flickity>

            </Box>

            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    reloadOnUpdate // default false
                    static // default false
                >
                    {bannerXs?.map((val, key) => {
                        return (
                            <Box
                                component="img"
                                key={key}
                                src={val.image_src}
                                alt={val.image_alt}
                                sx={{ width: '100%', minHeight: '80%' }}
                            />
                        )
                    })}
                </Flickity>

            </Box>
        </>
    )
}

export default HomeBanner