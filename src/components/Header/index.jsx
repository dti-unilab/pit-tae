import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import Image from '../../assets/img/bg-topo.png';
import LogoUNILAB from '../../assets/img/logo-unilab.png';


const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`
  }
};


const Header = () => {
  return (
    <AppBar position="relative" style={styles.paperContainer}>
    <Toolbar>
      <img width="300" src={LogoUNILAB} alt="Logo UNILAB" />
    </Toolbar>
  </AppBar>
  );
};
export default Header;
