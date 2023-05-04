import { json } from "@remix-run/node";
import type { V2_MetaFunction} from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import type { IHeroData } from "./hero/iHeroes";
import dbHeroes from "../db/dbHeroes.json";
import { Grid } from "@mui/material";
import HeroCard from "./hero/heroCard";
import { useState } from "react";
import SearchBar from "./searchbar/searchbar";

export const meta: V2_MetaFunction = () => {
    return [{ title: "Heroes App" }];
  };

export const loader = async () => {
    return json(dbHeroes.heroes);
  };

export default function Stamina() {
    const data = useLoaderData<typeof loader>();
    const [inputText, setInputText] = useState("");

    const filteredData = data.filter((el: { name: string; }) => {
        if (inputText === "") {
            return el;
        } else {
            return el.name.toLowerCase().includes(inputText)
        }
    })
    
    return (
    <>
        <SearchBar setInputText={setInputText} />
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
            .filter((hero: { stamina: number; }) => hero.stamina > 80)
            .map((hero: IHeroData) => (
                <Grid key={hero.id} paddingY={2}>
                    <HeroCard hero={hero} />
                </Grid>))
            }
        </Grid>
    </>
  )
}
