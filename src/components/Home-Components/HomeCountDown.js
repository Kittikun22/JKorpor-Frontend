import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material';
import Axios from 'axios'

function HomeCountDown() {
    const [expiryTime, setExpiryTime] = useState(null);
    const [timerLabel, setTimerLabel] = useState(
        {
            timer_label: '',
            timer_label_end: ''
        }
    )
    const [timerDisplay, setTimerDisplay] = useState('')
    const [countdownTime, setCountdownTime] = useState(
        {
            countdownDays: '',
            countdownHours: '',
            countdownlMinutes: '',
            countdownSeconds: ''
        }
    );
    useEffect(() => {
        if (expiryTime === null) {
            Axios.get('https://japi.jkorpor.com/getTimer').then((res) => {
                setExpiryTime(res.data[0].timer_date)
                setTimerLabel({
                    timer_label: res.data[0].timer_label,
                    timer_label_end: res.data[0].timer_label_end
                })
                setTimerDisplay(res.data[0].timer_display)
            })
        } else {
            countdownTimer();
        }
    }, [expiryTime])

    const countdownTimer = () => {
        const timeInterval = setInterval(() => {
            const countdownDateTime = new Date(expiryTime).getTime();
            const currentTime = new Date().getTime();
            const remainingDayTime = countdownDateTime - currentTime;
            const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
            const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
            const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

            const runningCountdownTime = {
                countdownDays: totalDays,
                countdownHours: totalHours,
                countdownMinutes: totalMinutes,
                countdownSeconds: totalSeconds
            }

            setCountdownTime(runningCountdownTime);

            if (remainingDayTime < 0) {
                clearInterval(timeInterval);
                setExpiryTime(false);
            }

        }, 1000);
    }

    return (
        <Box mt={5} mb={10} sx={{ display: timerDisplay }}>
            <Typography variant='h4' sx={{ textAlign: 'center' }}>{timerLabel?.timer_label}</Typography>
            {expiryTime !== false ?
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <Box>
                        <Typography sx={{ p: 1, width: '50px', textAlign: 'center', fontSize: '2rem', background: '#000', color: '#fff', borderRadius: 3 }}>
                            {countdownTime?.countdownDays}
                        </Typography>
                        <Typography sx={{ textAlign: 'center' }}>วัน</Typography>
                    </Box>

                    <Box>
                        <Typography sx={{ p: 1, width: '50px', textAlign: 'center', fontSize: '2rem', background: '#000', color: '#fff', borderRadius: 3 }}>
                            {countdownTime?.countdownHours}
                        </Typography>
                        <Typography sx={{ textAlign: 'center' }}>ชั่วโมง</Typography>
                    </Box>

                    <Box>
                        <Typography sx={{ p: 1, width: '50px', textAlign: 'center', fontSize: '2rem', background: '#000', color: '#fff', borderRadius: 3 }}>
                            {countdownTime?.countdownMinutes}
                        </Typography>
                        <Typography sx={{ textAlign: 'center' }}>นาที</Typography>
                    </Box>

                    <Box>
                        <Typography sx={{ p: 1, width: '50px', textAlign: 'center', fontSize: '2rem', background: '#000', color: '#fff', borderRadius: 3 }}>
                            {countdownTime?.countdownSeconds}
                        </Typography>
                        <Typography sx={{ textAlign: 'center' }}>วินาที</Typography>
                    </Box>

                </Box>
                :
                <Box>
                    <Typography sx={{ p: 1, textAlign: 'center', fontSize: '2rem', background: '#2C3639', color: '#ffba00' }}>
                        🎉🔥{timerLabel?.timer_label_end}🔥🎉
                    </Typography>
                </Box>

            }

        </Box>
    )
}

export default HomeCountDown