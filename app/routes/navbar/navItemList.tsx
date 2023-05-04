import { List } from "@mui/material";
import NavItem from "./navItem";

interface INavListItemProps {
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function navItemList({setMobileOpen}: INavListItemProps) {
    return (
        <List>
            <NavItem
                name="Tous les héros"
                path="/"
                setMobileOpen={setMobileOpen}
            />
            <NavItem
                name="Les héros Marvel"
                path="/marvel"
                setMobileOpen={setMobileOpen}
            />
            <NavItem
                name="Les héroïnes"
                path="/heroines"
                setMobileOpen={setMobileOpen}
            />
            <NavItem
                name="Les héros"
                path="/heroes"
                setMobileOpen={setMobileOpen}
            />
            <NavItem
                name="Les héros endurants"
                path="/stamina"
                setMobileOpen={setMobileOpen}
            />
        </List>
    )
}

