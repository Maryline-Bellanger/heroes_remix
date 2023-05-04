import { Search } from "@mui/icons-material";
import { TextField, InputAdornment } from "@mui/material";
import React from "react";

interface ISearchItem {
    setInputText: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({setInputText}: ISearchItem) {
    let inputHandler = (e: { target: { value: string; }; }) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    return (
        <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            placeholder="Search"
            size="small"
            sx={{ backgroundColor: "rgba(0, 0, 0, 0.10)", borderRadius: 1 }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                )
            }}
        />

    )
}
