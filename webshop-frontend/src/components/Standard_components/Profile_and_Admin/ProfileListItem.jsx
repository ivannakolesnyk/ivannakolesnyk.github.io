import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import React from "react";

/**
 * A custom ListItem component that takes in `icon`, `primary` and 'secondary' as props.
 * It's use is in the the Card which shows the personal informartion of a user.
 */
export const ProfileListItem = ({icon, primary, secondary}) => (
    <ListItem>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} secondary={secondary}/>
    </ListItem>
);