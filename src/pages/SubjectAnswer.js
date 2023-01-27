import React from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Box } from '@mui/material';
import Navbar from '../components/Navbar';

function SubjectAnswer() {
    // /KorporBooks/:book_name/:year/:edition/:subject/:topic/
    // https://www.jkorpor.com/KorporBooks/01_Local_Book/2566/P1/01_Math/04/

    // http://localhost:3000/KorporBooks/01_Local_Book/2566/P1/01_Math/04

    const { book_type, book_name, year, edition, subject, topic } = useParams();

    const intTopic = parseInt(topic)
    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
                <Box>
                    <Typography>ประเภทหนังสือ : {book_type}</Typography>
                    <Typography>ชื่อหนังสือ : {book_name}</Typography>
                    <Typography>ปีที่พิมพ์ : {year}</Typography>
                    <Typography>ครั้งที่พิมพ์ : {edition}</Typography>
                    <Typography>วิชา : {subject}</Typography>
                    <Typography>หัวข้อ : {intTopic}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default SubjectAnswer