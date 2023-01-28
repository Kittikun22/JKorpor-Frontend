import React from 'react'
import { Box, Typography, Divider, Button, Link, Grid } from '@mui/material'

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
                                    background: 'linear-gradient(0deg, rgba(246,187,61,1) 0%, rgba(255,158,0,1) 100%)'
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