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
            name="Les héros Marvel"
            path="/marvel"
        />
        <NavItem
            name="Les héroïnes"
            path="/heroines"
        />
        <NavItem
            name="Les héros"
            path="/heroes"
        />
        <NavItem
            name="Les héros endurants"
            path="/stamina"
        />
    </List>
  )
}

