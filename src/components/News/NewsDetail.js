import React from 'react'
import { Box } from '@mui/system';
import HtmlParserNews from './HtmlParserNews';
import { Divider, Typography } from '@mui/material';

function NewsDetail({ news, lastNews }) {

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <>
            <Box mx={{ xs: 0, md: 5 }} my={4}>
                <Box align='center'>
                    <Typography variant='h4' mb={2} mx={{ xs: 2, md: 15 }}>{news?.news_topic}</Typography>

                    <Divider />

                    <Box
                        component="img"
                        src={news?.image_src}
                        alt={news?.image_alt}
                        width={{ xs: "100%", md: "700px" }}
                    />
                </Box>

                <Divider />

                <Box mx={{ xs: 2, sm: 5, lg: 15 }} sx={{ display: { xs: 'block', sm: 'flex' }, gap: 2 }}>

                    <Box flex={3}>
                        <Typography>
                            <HtmlParserNews news_content={news.news_content} />
                            <Typography my={5} mr={2} align='end'>อัปเดตเมื่อ {formatDate(news.news_timestamp)}</Typography>
                        </Typography>
                        <Divider sx={{ display: { xs: 'flex', sm: 'none' } }} />

                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box flex={1} mt={2}>
                        <Typography variant='h6' align='center'>ข่าวสาร</Typography>
                        {lastNews?.map((val, key) => {
                            return (
                                <>
                                    <Box my={2} key={key}>
                                        <a href={`/news/${val.news_id}`}>
                                            <Typography variant='body2' sx={{ borderLeft: '4px solid #ffba00', pl: 1 }}>
                                                {val.news_topic}
                                            </Typography>
                                        </a>
                                    </Box>
                                    <Divider />
                                </>
                            )
                        })}
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default NewsDetail