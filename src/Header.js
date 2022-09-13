import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import './App.css';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
export default function Header() {
  return (
    <div className="header">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          borderRadius: 1,
          alignItems: "center",

        }}
      >
        <Avatar>A</Avatar>
        <Typography variant="h5" sx={{paddingLeft: "1%"}}>Atul Sharma</Typography>
        <Typography variant="caption" sx={{paddingTop: "1%", paddingLeft: "2%", alignItems: "center"}}><AccountBoxIcon/>Software Development Engineer in Test III</Typography>
        <Typography variant="caption" sx={{paddingTop: "1%", paddingLeft: "2%"}}><AccountBoxIcon/>11+ years experience</Typography>
        <Typography variant="caption" sx={{paddingTop: "1%", paddingLeft: "2%"}}><EmailIcon/>atul762@gmail.com</Typography>
        <Typography variant="caption" sx={{paddingTop: "1%", paddingLeft: "2%"}}><CallIcon/>+91-893-XXX-XXX</Typography>
      </Box>


    </div>
  );
}
