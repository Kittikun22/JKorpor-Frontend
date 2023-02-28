import { Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'

function Faq() {
    return (
        <>
            <Navbar />
            <Typography variant='h3' align='center' mt={10}>
                คำถามที่พบบ่อยยังไม่เปิดให้ใช้งาน🙏
            </Typography>
        </>
    )
}

export default Faq