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


const KorporNews = [{
    id: 1,
    topic: "สำนักงาน ก.พ. เปิดรับสมัครสอบ ก.พ. ประจำปี 2566  แล้ว!!!",
    description: "เปิดรับสมัครสอบ ก.พ. ประจำปี 2566  แล้ว!!! ตั้งแต่วันที่ 30 มกราคม - 17 กุมภาพันธ์ 2566",
    pic: "/images/whatiskorpor/4.jpg"
}, {
    id: 2,
    topic: "ด่วน! ประกาศล่าสุดจากส่วนท้องถิ่น รอบหน้าใช้ ก.พ. ภาค ก ยื่นแทนได้",
    description: "การสอบคัดเลือกบุคคลเพื่อเข้ามาทำงานให้กับหน่วยงานราชการของไทยอย่างมีประสิทธิภาพ โดยจะต้องสอบวิชาต่อไปนี้",
    pic: "/images/whatiskorpor/1.jpg"
}, {
    id: 3,
    topic: "สำนักงาน ก.พ. เปิดรับสมัครสอบ ก.พ. ประจำปี 2565  แล้ว!!!",
    description: "เปิดรับสมัครสอบ ก.พ. ประจำปี 2566  แล้ว!!! ตั้งแต่วันที่ 30 มกราคม - 17 กุมภาพันธ์ 2566",
    pic: "/images/whatiskorpor/4.jpg"
}]


function HomeKorporNews() {

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
                    ข่าวสาร ก.พ.
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
                    {KorporNews?.map((val, key) => {
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

export default HomeKorporNews