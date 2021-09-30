import { Typography } from "@material-ui/core";
import { Copyright } from "@material-ui/icons";
import { Box } from "@material-ui/system";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        UNILAB - Universidade da Integração Internacional da Lusofonia Afro-Brasileira
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        DTI - Diretoria de Tecnologia da Informação
      </Typography>
    </Box>
  );
};
export default Footer;
