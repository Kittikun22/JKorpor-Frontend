import React from 'react'
import { Box, Typography, Divider, Button, Link } from '@mui/material'

function AnswerList({ answers }) {
    return (
        <>
            <Divider sx={{ m: 4 }} />
            <Box my={4} mx={2} sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                {answers?.map((val, key) => {
                    return (
                        <Link
                            target="_blank"
                            key={key}
                            href={val.answer_url}
                            underline="none"
                        >
                            <Button
                                variant='contained'
                                sx={{
                                    width: '70px',
                                    height: '90px',
                                    background: val.book_color_code
                                }}>
                                <Typography sx={{ fontSize: '1.3rem' }}>
                                    ข้อ {val.answer_no}
                                </Typography>
                            </Button>
                        </Link>
                    )
                })}
            </Box>
        </>
    )
}

export default AnswerList