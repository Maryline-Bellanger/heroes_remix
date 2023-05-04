import {
  Links,
  LiveReload,
  Meta,
  Scripts,
} from "@remix-run/react";

import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./routes/navbar/navbar";


export default function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#EF6C00",
            },
            secondary: {
                main: "#ED8C2D",
            }
        }
    })

    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <Meta />
            <Links />
        </head>
        <body>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Scripts />
                <LiveReload />
            </ThemeProvider>
        </body>
        </html>
    );
}
