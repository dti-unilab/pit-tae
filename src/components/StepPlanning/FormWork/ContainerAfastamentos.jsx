import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Avatar, IconButton, ListItemAvatar, ListItemSecondaryAction } from "@mui/material";
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ContainerAfastamentos(props) {
  const { afastamentos, deleteItem } = props;

  return (
    <>

      <nav aria-label="main mailbox folders">
        <List>
          {afastamentos.map((afastamento, index) => (
            <ListItem button key={afastamento.id}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={afastamento.tipoAusencia.descricao}
                secondary={afastamento.especificar}
              />
              <ListItemSecondaryAction onClick={() => {deleteItem(afastamento.id)}}>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </nav>
      <Divider />
    </>
  );
}
