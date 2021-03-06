import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";
import styles from "./header.module.css"
import clsx from "clsx";

export default function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Link href="/" className={clsx(styles.headerMarginRight,"textColor")}>
            <Typography variant="h5">Dashboard</Typography>
          </Link>
          <Link href="/" className="textColor">
            <Typography variant="h5">User</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
