import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./routes/navbar/navbar";

export default function App() {
    const theme = createTheme({
        palette: {
            secondary: {
                main: "#EF6C00",
            },
            info: {
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
            <Outlet />
            <Scripts />
            <LiveReload />
        </ThemeProvider>
      </body>
    </html>
  );
}
