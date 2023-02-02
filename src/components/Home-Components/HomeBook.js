import React from 'react'
import { Typography, Box, Button, Stack } from '@mui/material'


const books = [{
    id: 1,
    book_name: "ก.พ. ภาค ก",
    book_description: "สรุปทุกวิชา เฉลยละเอียด อัปเดตข้อสอบจริง 5 ปีล่าสุด พิชิตคะแนน ผ่านทุกเกณฑ์ 4 วิชา เล่มเดียวจบ",
    pic: "images/books/korpor_1_2566.png",
    fullPrice: 1390,
    amount: 490,
},
{
    id: 2,
    book_name: "ท้องถิ่น ภาค ก",
    book_description: "สรุปทุกเนื้อหา ครบทุกเรื่อง พร้อมข้อสอบและเฉลยละเอียด อัปเดตข้อสอบจริง ปี 2564 2562 และ 2560",
    pic: "images/books/local_1_2566.png",
    fullPrice: 1390,
    amount: 390
}]

function HomeBook() {
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
                        src={books[0].pic}
                        sx={{
                            position: { xs: 'static', sm: 'absolute', md: 'absolute' },
                            width: { xs: '150px', sm: '175px', md: '300px', lg: '350px' },
                            top: { sm: '-25px', md: '-60px' },
                            left: '0'
                        }}
                    />
                    <Box
                        component="img"
                        src={books[1].pic}
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
                            <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', lg: '2rem' }, textAlign: 'center', fontWeight: 600 }}>
                                {books[0].book_name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: '1rem', md: '1.2rem' },
                                    height: { xs: '110px', sm: '150px', md: '200px', lg: '150px' }
                                }}
                            >
                                {books[0].book_description}
                            </Typography>
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
                                        textAlign: 'center'
                                    }}>
                                    ฿{books[0].amount}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '.8rem', sm: '1rem', md: '1.2rem' },
                                        color: '#DC0000',
                                        fontWeight: 600,
                                        textDecoration: 'line-through',

                                    }}>
                                    ฿{books[0].fullPrice}
                                </Typography>
                            </Box>

                            <Stack mt={2} mx={{ xs: 0, md: 2 }}>
                                <Button
                                    variant='contained'
                                    color='whiteButton'
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


                        <Box>
                            <Typography
                                sx={{
                                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.5rem', lg: '2rem' },
                                    textAlign: 'center',
                                    fontWeight: 600
                                }}
                            >
                                {books[1].book_name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: '1rem', md: '1.2rem' },
                                    height: { xs: '110px', sm: '150px', md: '200px', lg: '150px' }
                                }}
                            >
                                {books[1].book_description}
                            </Typography>
                            <Box mt={2} mx={{ xs: 0, md: 2 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: 1 }}>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '.8rem', sm: '1rem', md: '1.2rem' },
                                        fontWeight: 600,
                                        color: '#DC0000',
                                        textDecoration: 'line-through',

                                    }}>
                                    ฿{books[1].fullPrice}
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
                                    ฿{books[1].amount}
                                </Typography>
                            </Box>

                            <Stack mt={2} mx={{ xs: 0, md: 2 }}>
                                <Button
                                    variant='contained'
                                    color='whiteButton'
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
        </Box >
    )
}

export default HomeBook