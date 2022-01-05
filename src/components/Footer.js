import React from "react";
import { Stack, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Stack position="static" sx={{ backgroundColor:"#EC4888", mt: 5}}>
            <Typography variant="h7" sx={{mb:5, mt:5, color:"white"}} component="div" >RemindMom | 2022</Typography>
        </Stack>
    )
    
}