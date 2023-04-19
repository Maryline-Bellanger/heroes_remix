import { json } from "@remix-run/node";
import type { V2_MetaFunction} from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import type { IHeroData } from "./hero/iHeroes";
import dbHeroes from "../db/dbHeroes.json"
import { useState } from "react";
import { Box, AppBar, Toolbar, TextField, Grid, InputAdornment } from "@mui/material";
import HeroCard from "./hero/heroCard";
import { Search } from "@mui/icons-material";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Heroes App" }];
};

export const loader = async () => {
    return json(dbHeroes.heroes)
}

const drawerWidth = 240;

export default function Index() {
    const data = useLoaderData<typeof loader>();

    const [inputText, setInputText] = useState("");
    let inputHandler = (e: { target: { value: string; }; }) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const filteredData = data.filter((el: { name: string; }) => {
        if (inputText === "") {
            return el;
        } else {
            return el.name.toLowerCase().includes(inputText)
        }
    })
    
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
                            color='secondary'
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

            <Box component="main" style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                paddingLeft: 240,
                paddingTop: 100,
            }}>
                <Grid
                    container
                    justifyContent="space-evenly"
                    padding={2}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {filteredData
                    .sort(function (a: { name: string; }, b: { name: any; }) {
                        return a.name.localeCompare(b.name);
                    })
                    .map((hero: IHeroData) => (
                        <Grid key={hero.id} paddingY={2}>
                            <HeroCard hero={hero} />
                        </Grid>))
                    }
                </Grid>
            </Box>
        </Box>
    );
}
