import { Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'

function Books() {
    return (
        <>
            <Navbar />
            <Typography variant='h3' align='center' mt={10}>
                หนังสือเตรียมสอบยังไม่เปิดให้ใช้งาน🙏
            </Typography>
        </>
    )
}

export default Books