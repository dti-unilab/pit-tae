import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function ContainerAfastamentos(props) {
  const { afastamentos } = props;

  return (
    <>
      <nav aria-label="main mailbox folders">
        <List>
          {afastamentos.map((afastamento, index) => (
            <ListItem disablePadding key={afastamento.id}>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      <Divider />
    </>
  );
}
