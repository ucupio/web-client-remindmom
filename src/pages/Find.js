import React, { useState } from 'react';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import {useHistory} from 'react-router-dom'
// material
import { styled } from '@mui/material/styles';
import { Paper, InputBase, Divider, IconButton, Stack, ToggleButton,ToggleButtonGroup, TextField, Typography, Button, Box } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Page from '../components/Page';
import { pink } from '@mui/material/colors';
import { width } from '@mui/system';

// ----------------------------------------------------------------------

export default function Find() {
    const [ data, setData ] = useState('Not Found');
    const [alignment, setAlignment] = useState('web');
    const [input, setInput] = useState("")

    console.log(input,"XXXXXXX");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  let history = useHistory();

  function search() {
    history.push('/childrens/'+input)
    // window.location.replace("https://kind-almeida-a90c21.netlify.app/childrens/"+input)
  }

    
    return (

        <>
            <Box sx={{ mt:5, mb:5}} >
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton  sx={{width:200}} value="QRCODE">Find By QRCODE</ToggleButton>
                    <ToggleButton sx={{width:200}} value="INPUT">Find By ID</ToggleButton>
                </ToggleButtonGroup>
            </Box>
                {
                    alignment == "QRCODE" ?

                    <BarcodeScannerComponent
                        width={400}
                        height={400}
                        onUpdate={(err, result) => {
                        if (result) setData(window.location.replace(result.text))
                        else setData('Not Found')
                        }}
                    />

                    :
                    
                    <Box
                        sx={{
                            width:"100%",
                            mx: "auto",
                            mb:25
                        }}
                    >
                        <Box
                            sx={{
                                alignContent: "center",
                                mx:"auto"
                            }}
                        >
                            <Paper
                                variant="outlined"
                                component="form"
                                sx={{ mx:"auto", display: 'flex', alignContent: 'center', width: 400 }}
                            >
                                <TextField
                                    onChange={(e) => {setInput(e.target.value)}}
                                    variant="outlined"
                                    sx={{ flex: 1 }}
                                    placeholder="Search By ID"
                                    label="Search By ID"
                                />
                                <Button onClick={search} sx={{ p: '10px' }} aria-label="search">
                                    <SearchOutlinedIcon />
                                </Button>
                            </Paper>
                        </Box>
                    </Box>
                }
        </>
    )
}