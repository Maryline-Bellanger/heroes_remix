import { ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "@remix-run/react";

interface INavItemProps {
    name: string;
    path: string;
}

export default function NavItem({name, path}: INavItemProps) {
  return (
    <NavLink
        to={path}
        style={({ isActive }) =>
                isActive
                    ? { textDecoration: "none", color: "#fff" }
                    : { textDecoration: "none", color: "#EF6C00" }
            }
    >
        <ListItemButton>
            <ListItemText>{name}</ListItemText>
        </ListItemButton>
    </NavLink>
  )
}
