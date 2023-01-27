import React from 'react'
import { Box, Typography } from '@mui/material'

function AnswerHeader({ subjectInfo }) {
    return (
        <Box mt={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '2rem', textAlign: 'center' }}>
                {subjectInfo?.subject_name}
            </Typography>
            <Typography sx={{ fontSize: '1.5rem', textAlign: 'center' }}>
                เรื่อง : {subjectInfo?.topic_name}
            </Typography>
        </Box>
    )
}

export default AnswerHeader