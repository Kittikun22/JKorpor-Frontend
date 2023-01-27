import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Footer() {
    return (

        <Box sx={{
            height: '10vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#2C3639',
        }}>
            <Typography sx={{ color: '#fff' }}>
                Copyright 2023 © J Knowledge Tutor 2023
            </Typography>
        </Box>
    )
}

export default Footer