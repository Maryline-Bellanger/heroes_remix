import { Search } from "@mui/icons-material";
import { AppBar, Toolbar, TextField, InputAdornment, Box } from "@mui/material";
import React from "react";

const drawerWidth = 240;

interface ISearchItem {
    setInputText: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({setInputText}: ISearchItem) {
    let inputHandler = (e: { target: { value: string; }; }) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
  return (
    <Box>
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                backgroundColor: "rgba(18,18,18,0.9)",
            }}>
                <Toolbar>
                    <TextField
                        id="outlined-basic"
                        onChange={inputHandler}
                        variant="outlined"
                        placeholder="Search"
                        size="small"
                        color="primary"
                        sx={{ backgroundColor: "rgba(255, 255, 255, 0.90)", borderRadius: 1 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            )
                        }}
                    />
                </Toolbar>
        </AppBar>
    </Box>
  )
}
