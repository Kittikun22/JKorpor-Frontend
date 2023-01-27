import React from 'react'
import { Typography, Box } from '@mui/material'

function HomeLandingPage() {
    return (
        <>
            <Box sx={{ height: '100vh', bgcolor: '#FFF6BD' }}>
                <Typography variant='h2'>CONTENT 1</Typography>
                <Typography>
                    โปรโมท ตัวอย่าง : 
                    สูตรสำเร็จในการสอบผ่าน
                    เรียนรู้
                    ประเมิน
                    ทบทวน
                    ปูพื้นฐานใหม่ทั้งหมด ทุกเนื้อหาที่ต้องรู้ก่อนสอบ
                    เน้นเรียนให้เข้าใจ ใช้สอบได้จริง
                    ตะลุยข้อสอบจริงแบบจับมือทํา กว่า 800 ข้อ
                    ทดสอบ ด้วยระบบจําลองการสอบจริง
                    เนื้อหาตามประกาศสำนักงาน ก.พ. ใช้สอบปีล่าสุด
                    คอร์สเดียวจบ เรียนครบสอบผ่านแน่นอน!
                    </Typography>
            </Box>
            <Box sx={{ height: '100vh', bgcolor: '#' }}>
                <Typography variant='h2'>CONTENT 2</Typography>
                <Typography>ขายคอร์ส/หนังสือ</Typography>

            </Box>
            <Box sx={{ height: '100vh', bgcolor: '#FFF6BD' }}>
                <Typography variant='h2'>CONTENT 3</Typography>
                <Typography>ข้อสอบ ก.พ. คืออะไร</Typography>
            </Box>
            <Box sx={{ height: '100vh', bgcolor: '#' }}>
                <Typography variant='h2'>CONTENT 4</Typography>
                <Typography>ข่าวสารและการรับสมัคร</Typography>

            </Box>
        </>
    )
}

export default HomeLandingPage