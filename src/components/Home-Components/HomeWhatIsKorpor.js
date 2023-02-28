import React from 'react'
import {
    Box,
    Typography,
    Button
} from '@mui/material'

const whatIsKorpor = ' ก.พ. ย่อมาจาก คณะกรรมการข้าราชการพลเรือน ซึ่งการสอบ ก.พ. เป็นรูปแบบในการสอบคัดเลือกบุคคลเพื่อเข้ามาทำงานให้กับหน่วยงานราชการของไทยอย่างมีประสิทธิภาพ ดังนั้น ผู้ที่สนใจอาชีพสายงานราชการจะต้องผ่านเกณฑ์การสอบระบบกลาง ภาค ก ของ ก.พ. ก่อนที่จะไปยื่นสมัครสอบคัดเลือกตามหน่วยงานต่างๆ เพื่อบรรจุเข้ารับราชการตามกฎเกณฑ์ที่กำหนดไว้ของแต่ละหน่วยงาน'

function HomeWhatIsKorpor() {

    return (
        <Box pt={10} pb={15}>

            <Box sx={{ display: 'flex', justifyContent: 'center', pb: 5 }}>
                <Typography sx={{ display: 'inline', fontSize: { xs: '2.5rem', md: '3rem' }, fontWeight: 600, borderBottom: '4px solid #ffba00' }}>
                    สอบ ก.พ. คืออะไร?
                </Typography>
            </Box>

            <Box mx={{ xs: 5, md: 25 }} mb={3}>
                <Typography sx={{ fontSize: '1.2rem' }}>
                    {whatIsKorpor}
                </Typography>
            </Box>

            <Box align='center'>
                <Button
                    href='/whatIsKorpor'
                    color="mainColor"
                    size='large'
                    sx={{ border: '3px solid #ffba00', width: '150px', fontSize: '1.2rem' }}
                >
                    อ่านต่อ
                </Button>
            </Box>

        </Box>
    )
}

export default HomeWhatIsKorpor