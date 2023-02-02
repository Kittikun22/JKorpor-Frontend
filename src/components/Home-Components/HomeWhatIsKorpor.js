import React from 'react'
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    CardActionArea
} from '@mui/material'

import Flickity from 'react-flickity-component'
import './whatIsKorporFlickity.css'



const whatIsKorpor = ' ก.พ. ย่อมาจาก คณะกรรมการข้าราชการพลเรือน ซึ่งการสอบ ก.พ. เป็นรูปแบบในการสอบคัดเลือกบุคคลเพื่อเข้ามาทำงานให้กับหน่วยงานราชการของไทยอย่างมีประสิทธิภาพ ดังนั้น ผู้ที่สนใจอาชีพสายงานราชการจะต้องผ่านเกณฑ์การสอบระบบกลาง ภาค ก ของ ก.พ. ก่อนที่จะไปยื่นสมัครสอบคัดเลือกตามหน่วยงานต่างๆ เพื่อบรรจุเข้ารับราชการตามกฎเกณฑ์ที่กำหนดไว้ของแต่ละหน่วยงาน'
const whatIsKorporContent = [{
    id: 1,
    topic: "คุณสมบัติและวิธีสมัครสอบ ก.พ.",
    description: "คุณสมบัติและอายุของผู้เข้าสอบ ขั้นตอน และวิธีสมัครสอบ ก.พ.",
    pic: "/images/whatiskorpor/3.jpg"
}, {
    id: 2,
    topic: "ก.พ. สอบอะไรบ้าง",
    description: "การสอบคัดเลือกบุคคลเพื่อเข้ามาทำงานให้กับหน่วยงานราชการของไทยอย่างมีประสิทธิภาพ โดยจะต้องสอบวิชาต่อไปนี้",
    pic: "/images/whatiskorpor/2.jpg"
}, {
    id: 3,
    topic: "สอบ ก.พ. ทํางานอะไรได้บ้าง",
    description: "โดยทั่วไปการสอบ ก.พ. จะต้องสอบทั้งหมด 3 รอบคือ ภาค ก , ภาค ข, ภาค ค เมื่อสามารถสอบผ่านแล้ว ก็สามารถนำผลสอบไปใช้ในการสมัครงานในหน่วยงานราชการต่างๆ ได้หลากหลายตำแหน่ง ตัวอย่างเช่น",
    pic: "/images/whatiskorpor/1.jpg"
}]

function HomeWhatIsKorpor() {

    const flickityOptions = {
        initialIndex: 1,
        selectedAttraction: 0.01,
        friction: 0.15,
        contain: true,
        pageDots: false,
        // wrapAround: true
    }


    return (
        <Box pt={5} pb={10}>

            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Typography sx={{ display: 'inline', fontSize: { xs: '2.5rem', md: '3rem' }, fontWeight: 600, borderBottom: '4px solid #ffba00' }}>
                    สอบ ก.พ. คืออะไร?
                </Typography>
            </Box>

            <Box mx={{ xs: 5, md: 25 }}>
                <Typography sx={{ fontSize: '1.2rem' }}>
                    {whatIsKorpor}... <a href='/whatIsKorpor'>อ่านต่อ</a>
                </Typography>
            </Box>

            <Box mx={{ xs: 0, md: 10 }} sx={{ display: 'block' }}>
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    reloadOnUpdate // default false
                    static // default false
                >
                    {whatIsKorporContent?.map((val, key) => {
                        return (
                            <Box sx={{ mx: 2 }} key={key}>
                                <Card sx={{ width: 300, height: 400, borderRadius: 3, boxShadow: 2 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="200px"
                                            image={val.pic}
                                            alt={val.topic}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {val.topic}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {val.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Box>

                        )
                    })}

                </Flickity>
            </Box>
        </Box>
    )
}

export default HomeWhatIsKorpor