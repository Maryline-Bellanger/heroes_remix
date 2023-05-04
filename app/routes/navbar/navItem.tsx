import { ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "@remix-run/react";

interface INavItemProps {
    name: string;
    path: string;
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavItem({name, path, setMobileOpen}: INavItemProps) {
    return (
        <NavLink
            to={path}
            style={({ isActive }) =>
                isActive
                    ? { textDecoration: "none", color: "#fff" }
                    : { textDecoration: "none", color: "#EF6C00" }
            }
            onClick={() => setMobileOpen(false)}
        >
            <ListItemButton>
                <ListItemText>{name}</ListItemText>
            </ListItemButton>
        </NavLink>
    )
}
