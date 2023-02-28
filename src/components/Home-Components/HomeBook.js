import React, { useState, useEffect } from 'react'
import { Typography, Box, Button, Stack } from '@mui/material'
import Axios from 'axios'


function HomeBook() {

    const [bookLeft, setBookLeft] = useState()
    const [bookRight, setBookRight] = useState()

    useEffect(() => {

        Axios.get("https://japi.jkorpor.com/getPrepareBook").then((res) => {
            setBookLeft(res.data[0])
            setBookRight(res.data[1])
        })

    }, [])

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Typography sx={{ display: 'inline', color: '#ff9b00', fontSize: { xs: '2.5rem', md: '3rem' }, fontWeight: 600, borderBottom: '4px solid #ffba00' }}>
                    หนังสือเตรียมสอบ
                </Typography>
            </Box>


            <Box sx={{ background: '#ff9b00', position: 'relative', pb: 5, pt: 2 }}>

                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Box
                        component="img"
                        src={bookLeft?.image_src}
                        alt={bookLeft?.image_alt}
                        sx={{
                            position: { xs: 'static', sm: 'absolute', md: 'absolute' },
                            width: { xs: '150px', sm: '175px', md: '300px', lg: '350px' },
                            top: { sm: '-25px', md: '-60px' },
                            left: '0'
                        }}
                    />
                    <Box
                        component="img"
                        src={bookRight?.image_src}
                        alt={bookRight?.image_alt}
                        sx={{
                            position: { xs: 'static', sm: 'absolute', md: 'absolute' },
                            width: { xs: '150px', sm: '175px', md: '300px', lg: '350px' },
                            top: { sm: '-25px', md: '-60px' },
                            right: "0"
                        }}
                    />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', mx: { xs: 2, sm: 22, md: 35, lg: 45 } }}>
                    <Box mt={{ xs: 0, sm: 2 }} sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>

                        <Box>
                            <Typography
                                sx={{
                                    fontSize: { xs: '1.2rem', sm: '2rem', lg: '2.2rem' },
                                    textAlign: 'center',
                                    fontWeight: 600
                                }}>
                                {bookLeft?.preparebook_name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: '1rem', md: '1.2rem' },
                                    height: { xs: '110px', sm: '150px', md: '200px', lg: '150px' }
                                }}
                            >
                                {bookLeft?.preparebook_des}
                            </Typography>

                            <Box>
                                <Box mt={2} mx={{ xs: 0, md: 2 }} sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '1rem', md: '1.5rem', lg: '2rem' },
                                            fontWeight: 600,
                                            background: '#DC0000',
                                            color: '#fff',
                                            borderRadius: 3,
                                            px: 1,
                                            width: '80px',
                                            textAlign: 'center',
                                        }}>
                                        ฿{bookLeft?.preparebook_amount}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '.8rem', sm: '1rem', md: '1.2rem' },
                                            color: '#DC0000',
                                            fontWeight: 600,
                                            textDecoration: 'line-through',

                                        }}>
                                        ฿{bookLeft?.preparebook_fullprice}
                                    </Typography>
                                </Box>

                                <Stack mt={2} mx={{ xs: 0, md: 2 }}>
                                    <Button
                                        variant='contained'
                                        color='whiteButton'
                                        href={bookLeft?.preparebook_url}
                                        target="_blank"
                                        sx={{

                                            borderRadius: 3,
                                            fontSize: { xs: '1rem', md: '1.2rem', lg: '1.5rem' },
                                            fontWeight: 600,
                                            color: '#DC0000',

                                        }}
                                    >
                                        สั่งสินค้า
                                    </Button>
                                </Stack>
                            </Box>

                        </Box>


                        <Box>
                            <Typography
                                sx={{
                                    fontSize: { xs: '1.2rem', sm: '2rem', lg: '2.2rem' },
                                    textAlign: 'center',
                                    fontWeight: 600
                                }}
                            >
                                {bookRight?.preparebook_name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: '1rem', md: '1.2rem' },
                                    height: { xs: '110px', sm: '150px', md: '200px', lg: '150px' }
                                }}
                            >
                                {bookRight?.preparebook_des}
                            </Typography>

                            <Box>
                                <Box mt={2} mx={{ xs: 0, md: 2 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: 1 }}>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '.8rem', sm: '1rem', md: '1.2rem' },
                                            fontWeight: 600,
                                            color: '#DC0000',
                                            textDecoration: 'line-through',

                                        }}>
                                        ฿{bookRight?.preparebook_fullprice}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: { xs: '1rem', md: '1.5rem', lg: '2rem' },
                                            fontWeight: 600,
                                            background: '#DC0000',
                                            color: '#fff',
                                            borderRadius: 3,
                                            px: 1,
                                            width: '80px',
                                            textAlign: 'center'
                                        }}>
                                        ฿{bookRight?.preparebook_amount}
                                    </Typography>
                                </Box>

                                <Stack mt={2} mx={{ xs: 0, md: 2 }}>
                                    <Button
                                        variant='contained'
                                        color='whiteButton'
                                        href={bookRight?.preparebook_url}
                                        target="_blank"
                                        sx={{

                                            borderRadius: 3,
                                            fontSize: { xs: '1rem', md: '1.2rem', lg: '1.5rem' },
                                            fontWeight: 600,
                                            color: '#DC0000',

                                        }}
                                    >
                                        สั่งสินค้า
                                    </Button>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box >
    )
}

export default HomeBook