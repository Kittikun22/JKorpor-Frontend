import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Axios from 'axios'
import AnswerHeader from '../components/Answer-Components/AnswerHeader';
import AnswerList from '../components/Answer-Components/AnswerList';
import AlertDialogMessage from '../components/AlertDialogMessage';

function SubjectAnswer() {


    // KorporBooks/01_Local_Book/2566/P1/01_Math/01/

    const { book_type, book_name, year, edition, subject, topic } = useParams();

    const [loading, setLoading] = useState(false)

    const [answers, setAnswers] = useState()
    const [subjectInfo, setSubjectInfo] = useState()

    const [openDialog, setOpenDialog] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        Axios.post('https://japi.jkorpor.com/getTopicNoAnswer', {
            book_type: book_type,
            book_name: book_name,
            year: year,
            edition: edition,
            subject_id: subject,
            topic_no: parseInt(topic)
        }).then((res) => {
            if (res.data.length === 0) {
                setLoading(false)
                setMessage('ยังไม่ได้เพิ่มวิดีโอเฉลยของเนื้อหานี้')
                setOpenDialog(true)
            }
            else {
                setSubjectInfo(res.data[0])
                setAnswers(res.data)
                setLoading(true)
            }
        })

    }, [])

    return (
        <>
            <AlertDialogMessage openDialog={openDialog} setOpenDialog={setOpenDialog} message={message} />

            <Navbar />

            {loading === true ?
                <>
                    <AnswerHeader subjectInfo={subjectInfo} />
                    <AnswerList answers={answers} />
                </>
                : null}



        </>
    )
}

export default SubjectAnswer