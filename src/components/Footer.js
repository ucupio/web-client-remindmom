import React from "react";
import {  Box, Paper, Typography } from "@mui/material";
import { pink } from '@mui/material/colors'

export default function Footer() {
    return (
        <Paper square sx={{position: 'fixed', bottom: 0, left: 0, right: 0, background: pink[500]}} >
            <Typography variant="body1" sx={{my:2, color:"white"}} component="div" >CopyRight © RemindMom | {new Date().getFullYear()}</Typography>
        </Paper>
    )
    
}