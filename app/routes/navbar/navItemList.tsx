import { List } from "@mui/material";
import NavItem from "./navItem";

export default function navItemList() {
  return (
    <List>
        <NavItem
            name="Tous les héros"
            path="/"
        />
        <NavItem
            name="Héros Marvel"
            path="/marvel"
        />
        <NavItem
            name="Héroïnes"
            path="/heroines"
        />
    </List>
  )
}

