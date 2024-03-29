import React from 'react'
import { Box, Stack, Typography } from '@mui/material'


function WhatIsKorporContent() {
    return (
        <Box mt={2} mb={10} mx={{ xs: 2, sm: 15, md: 30 }}>
            <Stack spacing={2}>

                <Box>
                    <Typography mb={2} sx={{ display: 'inline', fontSize: '2rem', fontWeight: 600, borderBottom: '4px solid #ffba00' }}>
                        สอบ ก.พ. คืออะไร?
                    </Typography>

                    <Typography mt={2} sx={{ fontSize: '1.2rem', ml: 2 }}>
                        สอบ ก.พ. คือ การสอบความรู้ความสามารถเพื่อคัดเลือกบุคคล เข้ามาทำงานในหน่วยงานราชการ การสอบ ก.พ. จึงเปรียบเสมือนตัวกลาง ในการเชื่อมระหว่างคนที่สนใจทำงานในส่วนราชการกับหน่วยงานราชการหรือองค์กรภาครัฐ ก.พ. หรือ คณะกรรมการข้าราชการพลเรือน ซึ่งมีหน้าที่สำคัญคือ การดำเนินการจัดสอบคัดเลือกบุคคลเข้ามาบริหารงานในหน่วยงานราชการ ซึ่งเป็นการคัดเลือกบุคคลให้ได้มาซึ่งความรู้ความสามารถ
                        วัตถุประสงค์ของการสอบความรู้ความสามารถทั่วไป (ภาค ก) เป็นการสอบวัดความรู้ความสามารถทั่วไปเพื่อคัดเลือกบุคคล ถือเป็นการสอบที่ใช้ข้อสอบเป็นเครื่องมือวัดความรู้ความสามารถทั่วไปของผู้สอบ เนื้อหาที่ใช้ในการสอบ ประกอบด้วย วิชาความรู้ความสามารถทั่วไป วิชาภาษาไทย และวิชาภาษาอังกฤษ ในการสอบ ภาค ก. จะมีตัวชี้วัดผลการสอบคัดเลือก แบ่งได้ 3 ตัวชี้วัด คือ
                        <li>
                            วัดความสามารถทางด้านความมีเหตุผล (Reasoning Ability)
                        </li>
                        <li>
                            วัดความสามารถทางด้านตัวเลข (Numerical Ability)
                        </li>
                        <li>
                            วัดความสามารถทางด้านภาษา (Veerbal Ability)
                        </li>
                    </Typography>
                </Box>

                <Box>
                    <Typography sx={{ display: 'inline', fontSize: '2rem', fontWeight: 600, borderBottom: '4px solid #ffba00' }}>
                        สอบ ก.พ.ต้องมีคุณสมบัติยังไง?
                    </Typography>

                    <Typography mt={2} sx={{ fontSize: '1.2rem', ml: 2 }}>
                        <li>
                            ผู้สมัครสอบต้องมีคุณสมบัติทั่วไปและไม่มีลักษณะต้องห้าม (ตามมาตรา 36 แห่งพ.ร.บ.ระเบียบข้าราชการพลเรือน พ.ศ. 2551)
                        </li>
                        <li>
                            มีสัญชาติไทย
                        </li>
                        <li>
                            มีอายุไม่ต่ำกว่า 18 ปี (18 ปีขึ้นไป ไม่มีกำหนดอายุสูงสุด)
                        </li>
                    </Typography>
                </Box>

                <Box>
                    <Typography sx={{ display: 'inline', fontSize: '2rem', fontWeight: 600, borderBottom: '4px solid #ffba00' }}>
                        วุฒิที่ใช้ใรการสมัครสอบ ก.พ.?
                    </Typography>

                    <Typography mt={2} sx={{ fontSize: '1.2rem', ml: 2 }}>
                        <li>
                            ระดับวุฒิประกาศนียบัตรวิชาชีพ (ปวช.)
                        </li>
                        <li>
                            ระดับวุฒิประกาศนียบัตรวิชาชีพเทคนิค (ปวท.) อนุปริญญา หรือ ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)
                        </li>
                        <li>
                            ระดับวุฒิปริญญาตรี
                        </li>
                        <li>
                            ระดับวุฒิปริญญาโท
                        </li>
                    </Typography>
                </Box>

                <Box>
                    <Typography sx={{ display: 'inline', fontSize: '2rem', fontWeight: 600, borderBottom: '4px solid #ffba00' }}>
                        สอบ ก.พ. ระดับ 1 2 3 คืออะไร?
                    </Typography>

                    <Typography mt={2} sx={{ fontSize: '1.2rem', ml: 2 }}>
                        การสอบ ก.พ.จะแบ่งระดับตามวุฒิที่ใช้สมัคร โดยมีทั้งหมด 4 ระดับ
                        <li>
                            ระดับ 1 คือระดับประกาศนียบัตรวิชาชีพ(ปวช.)
                        </li>
                        <li>
                            ระดับ 2 คือระดับประกาศนียบัตรวิชาชีพเทคนิค(ปวท.) อนุปริญญา หรือ
                            ประกาศนียบัตรวิชาชีพชั้นสูง(ปวส.)
                        </li>
                        <li>
                            ระดับ 3 คือระดับปริญญาตรี
                        </li>
                        <li>
                            ระดับ 3 คือระดับปริญญาโท
                        </li>
                    </Typography>
                </Box>

                <Box>
                    <Typography sx={{ display: 'inline', fontSize: '2rem', fontWeight: 600, borderBottom: '4px solid #ffba00' }}>
                        สอบ ก.พ. สอบได้กี่ครั้ง? และมีอายุกี่ปี?
                    </Typography>

                    <Typography mt={2} sx={{ fontSize: '1.2rem', ml: 2 }}>
                        สอบได้ไม่จำกัดจำนวนครั้ง สามารถลงสมัครได้ทุกปี และการสอบก.พ.นั้นไม่มีวันหมดอายุดังนั้นถ้าผ่านแล้วไม่ต้องกลับมาสอบใหม่
                    </Typography>
                </Box>

                <Box>
                    <Typography sx={{ display: 'inline', fontSize: '2rem', fontWeight: 600, borderBottom: '4px solid #ffba00' }}>
                        การสอบ ก.พ. แบ่งออกเป็นกี่ภาค ?
                    </Typography>

                    <Typography mt={2} sx={{ fontSize: '1.2rem', ml: 2 }}>
                        การสอบ ก.พ. แบ่งออกเป็น 3 ภาค คือ
                        <li>
                            ภาค ก คือ การสอบภาคความรู้ ความสามารถทั่วไป เป็นประตูด่านแรกที่ต้องสอบให้ผ่าน ผู้เข้าสอบต้องสอบผ่านทั้ง 3 วิชา
                            <ol>
                                <li>
                                    ความรู้ความสามารถทั่วไปด้านการคิดและวิเคราะห์(คณิตและภาษาไทย)
                                </li>
                                <li>
                                    ภาษาอังกฤษ
                                </li>
                                <li>
                                    ความรู้และลักษณะการเป็นช้าราชการที่ดี(กฎหมาย กพ)
                                </li>
                            </ol>
                        </li>

                        <li>
                            ภาค ข คือ การสอบภาคความสามารถเฉพาะตำแหน่ง เป็นการสอบที่เน้นใช้ความรู้ความสามารถเฉพาะตำแหน่ง เช่น นักวิเคราะห์นโยบายและแผนปฏิบัติการ, นิติกร, เจ้าพนักงานสาธารณสุขปฏิบัติงาน เป็นต้น โดยข้อสอบจะเป็นการสอบแบบข้อเขียน (และผู้สอบต้องนำหนังสือรับรองมายืนยันว่าได้สอบผ่าน ภาค ก. แล้วจึงจะสมัครได้)

                            <ol>
                                <li>
                                    คุณสมบัติผู้สอบ : ต้องสอบผ่าน ภาค ก ก่อน
                                </li>
                                <li>
                                    ผู้จัดสอบ : หน่วยงานราชการที่เปิดรับสมัคร
                                </li>
                            </ol>



                        </li>

                        <li>
                            ภาค ค คือ การสอบสัมภาษณ์ ซึ่งเป็นขั้นตอนสุดท้ายของกระบวนการสอบคัดเลือกบุคคลเข้ารับราชการ เพื่อดูถึงความเหมาะสมกับตำแหน่ง  อาจมีการทดสอบอย่างอื่นเพิ่มก็ได้ เช่น ทดสอบร่างกาย หรือ ทดสอบจิตวิทยา เป็นต้น

                            <ol>
                                <li>
                                    คุณสมบัติผู้สอบ : ผู้เข้าสอบจำเป็นต้องผ่านการสอบ ภาค ก. และ ภาค ข. มาก่อน
                                </li>
                                <li>
                                    ผู้จัดสอบ : หน่วยงานราชการที่เปิดรับสมัคร
                                </li>
                            </ol>

                        </li>
                    </Typography>
                </Box>
            </Stack>

        </Box>
    )
}

export default WhatIsKorporContent