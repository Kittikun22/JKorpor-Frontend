import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Axios from 'axios'
import AnswerHeader from '../components/Answer-Components/AnswerHeader';
import AnswerList from '../components/Answer-Components/AnswerList';


function SubjectAnswer() {


    // KorporBooks/01_Local_Book/2566/P1/01_Math/01/

    const { book_type, book_name, year, edition, subject, topic } = useParams();

    const [loading, setLoading] = useState(false)

    const [answers, setAnswers] = useState()
    const [subjectInfo, setSubjectInfo] = useState()

    useEffect(() => {
        Axios.post('http://localhost:8888/getTopicNoAnswer', {
            book_type: book_type,
            book_name: book_name,
            year: year,
            edition: edition,
            subject_id: subject,
            topic_no: parseInt(topic)
        }).then((res) => {
            if (res.data.length === 0) {
                setLoading(false)
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