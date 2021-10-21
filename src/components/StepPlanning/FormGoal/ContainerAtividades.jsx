import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Avatar, IconButton, ListItemAvatar, ListItemSecondaryAction } from "@mui/material";
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ContainerAtividades(props) {
  const { atividades, deleteItem } = props;

  return (
    <>
      <nav aria-label="main mailbox folders">
        <List>
          {atividades.map((atividade, index) => (
            <ListItem button key={atividade.id}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={atividade.tipoAtividade.descricao}
                secondary={atividade.atividades}
              />
              <ListItemSecondaryAction onClick={() => {deleteItem(atividade.id)}}>
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
