import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material'


export default function BasicTable({ allNews }) {

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <Box py={10}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TableContainer component={Paper} sx={{ width: { xs: '100%', md: '90%' } }}>
                    <Table >
                        <TableHead>
                            <TableRow sx={{ background: '#2C3639' }}>
                                <TableCell sx={{ color: '#ffba00', fontSize: '1.2rem' }}>หัวข้อ</TableCell>
                                <TableCell sx={{ color: '#ffba00', fontSize: '1.2rem' }} align="right">เวลา</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allNews?.map((row, key) => (
                                <TableRow
                                    key={key}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <a href={`/news/${row.news_id}`}>
                                            <Typography
                                                sx={{
                                                    fontSize: '1.2rem',
                                                    '&:hover': {
                                                        borderLeft: '4px solid #ffba00',
                                                        pl: 1
                                                    }
                                                }}>
                                                {row.news_topic}
                                            </Typography>
                                        </a>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography sx={{ fontSize: '1.2rem' }}>
                                            {formatDate(row.news_timestamp)}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}