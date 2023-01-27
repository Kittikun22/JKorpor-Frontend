import React from 'react'
import { Box, Typography } from '@mui/material'

function AnswerList({ answers }) {
    return (
        <Box mt={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {answers?.map((val, key) => {
                return (
                    <a key={key} href={val.answer_url}>
                        <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>{val.subject_name} {val.topic_name} ข้อ {val.answer_no}.</Typography>
                    </a>
                )
            })}
        </Box>
    )
}

export default AnswerList