import React from 'react'
import { Box, Typography } from '@mui/material'

function HomeBanner() {
    return (
        <Box sx={{ height: '95vh', bgcolor: '#' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h2'>BANNER !!!</Typography>

                <Typography sx={{ fontSize: '2.5rem', textAlign: 'center' }}>
                    เตรียมสอบและเฉลยละเอียด
                </Typography>
                <Typography sx={{ fontSize: '2.5rem', textAlign: 'center' }}>
                    เนื้อหา 5 ปีล่าสุด
                </Typography>
                <Typography sx={{ fontSize: '2.5rem', textAlign: 'center' }}>
                    จากประสบการณ์สอนและติดจริง
                </Typography>
                <Typography sx={{ fontSize: '1.5rem', textAlign: 'center' }}>
                    โดย สถาบันกวดวิชา J ก.พ. TUTOR
                </Typography>
            </Box>
        </Box>
    )
}

export default HomeBanner