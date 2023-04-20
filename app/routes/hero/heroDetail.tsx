import { useState } from "react";
import type { IHeroData } from "./iHeroes";
import type { DialogProps } from "@mui/material";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Box,
    Dialog,
    DialogContent,
    LinearProgress,
} from "@mui/material";

interface IHeroDetailsProps {
    hero: IHeroData;
}

export default function HeroDetail({ hero }: IHeroDetailsProps) {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");

    const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Button
                size="small"
                onClick={handleClickOpen("paper")}
                color="primary"
            >
                Détail
            </Button>
            <Dialog open={open} onClose={handleClose} scroll={scroll}>
                <DialogContent dividers={scroll === "paper"}>
                    <Card
                        sx={{ maxWidth: 400 }}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center",
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="100%"
                            image={hero?.image}
                            alt={hero?.name}
                        />
                        <CardContent>
                            <Typography
                                textAlign="center"
                                textTransform="uppercase"
                                fontWeight="bold"
                            >
                                {hero?.name}
                            </Typography>
                            <Typography
                                textAlign="center"
                                color="text.primary"
                            >
                                Genre : {hero?.gender} - Race : {hero?.race}
                            </Typography>
                            <Typography
                                textAlign="center"
                                color="text.primary"
                            >
                                Taille : {hero?.height} - Poids : {hero?.weight}
                            </Typography>
                            <Typography textAlign="center" marginTop={2}>
                                Stats
                            </Typography>
                            <Typography
                                textAlign="start"
                                color="text.primary"
                            >
                                Vitesse :
                                <Typography
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <LinearProgress
                                        variant="determinate"
                                        value={hero?.speed}
                                        sx={{
                                            height: 10,
                                            width: "90%",
                                            borderRadius: 3,
                                            marginRight: 2,
                                        }}
                                        color="secondary"
                                    />
                                    {hero?.speed}
                                </Typography>
                            </Typography>
                            <Typography
                                textAlign="start"
                                color="text.primary"
                            >
                                Force :
                                <Typography
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <LinearProgress
                                        variant="determinate"
                                        value={hero?.power}
                                        sx={{
                                            height: 10,
                                            width: "90%",
                                            borderRadius: 3,
                                            marginRight: 2,
                                        }}
                                        color="secondary"
                                    />
                                    {hero?.power}
                                </Typography>
                            </Typography>
                            <Typography
                                textAlign="start"
                                color="text.primary"
                            >
                                Endurance :
                                <Typography
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <LinearProgress
                                        variant="determinate"
                                        value={hero?.stamina}
                                        sx={{
                                            height: 10,
                                            width: "90%",
                                            borderRadius: 3,
                                            marginRight: 2,
                                        }}
                                        color="secondary"
                                    />
                                    {hero?.stamina}
                                </Typography>
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: "center" }}>
                            <Button
                                size="small"
                                onClick={handleClose}
                                color="primary"
                            >
                                Retour
                            </Button>
                        </CardActions>
                    </Card>
                </DialogContent>
            </Dialog>
        </Box>
    );
}

