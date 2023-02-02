import React from 'react'
import { Typography, Box } from '@mui/material'
import HomeBook from './HomeBook'
import HomeWhatIsKorpor from './HomeWhatIsKorpor'
import HomeKorporNews from './HomeKorporNews'

function HomeLandingPage() {
    return (
        <Box >
            <HomeBook />
            <HomeWhatIsKorpor />
            <Box sx={{ height: '100vh', bgcolor: '#FFF6BD' }}>
                <HomeKorporNews />
            </Box>
            <Box sx={{ height: '100vh', bgcolor: '#' }}>
                <Typography variant='h2'>CONTENT 4</Typography>

            </Box>
        </Box>
    )
}

export default HomeLandingPage