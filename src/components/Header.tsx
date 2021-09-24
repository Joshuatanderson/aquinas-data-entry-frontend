import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Aquinas Data Editor</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
