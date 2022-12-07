import React from "react";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
  Typography,
} from "@mui/material";
import Groups from "@mui/icons-material/Groups";
import People from "@mui/icons-material/People";
import Settings from "@mui/icons-material/Settings";
import AccountBox from "@mui/icons-material/AccountBox";
import DarkMode from "@mui/icons-material/DarkMode";
import WbSunny from "@mui/icons-material/WbSunny";
import Pages from "@mui/icons-material/Feed";
import Bookmarks from "@mui/icons-material/Bookmarks";
import Divider from "@mui/material/Divider";
import Home from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
export const SideBar = (props) => {
  let info = {
    headerInfo: {
      avatarSrc:
        "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=338&ext=jpg&uid=R30548219&ga=GA1.2.520006764.1655365272",
      name: "khaled Ayman",
    },
  };
  let data = new Map([
    ["Home", <Home />],
    ["Pages", <Pages />],
    ["Groups", <Groups />],
    ["People", <People />],
    ["Settings", <Settings />],
    ["AccountBox", <AccountBox />],
    ["Bookmarks", <Bookmarks />],
  ]);
  let elements = [];
  for (const [name, tag] of data) {
    let to = name != "Home" ? "/" + name.toLowerCase() : "/";
    console.log(to);
    let x = (
      <ListItem disablePadding component={Link} to={to}>
        <ListItemButton>
          <ListItemIcon>{tag}</ListItemIcon>
          <ListItemText
            sx={{
              minWidth: "fit-content",
              color: "white",
            }}
            primary={name}
          />
        </ListItemButton>
      </ListItem>
    );
    elements.push(x);
  }

  return (
    <Box
      flex={1}
      sx={{
        display: { xs: "none", sm: "none", md: "block" },
        position: "sticky",
        top: "6vh",
        maxHeight: "90vh",
      }}
    >
      <List>
        {/* ----------- */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar alt="Remy Sharp" src={info.headerInfo.avatarSrc} />
            </ListItemIcon>
            <ListItemText
              primary={info.headerInfo.name}
              sx={{ minWidth: "fit-content" }}
            />
          </ListItemButton>
        </ListItem>
        {/* --------------------------------------------------------------- */}
        <Divider
          variant="middle"
          sx={{
            borderColor: props.dark
              ? "rgb(255 255 255 / 30%)"
              : "rgba(1, 0, 0, 0.30)",
            my: "8px",
          }}
        />
        {/* ----------- */}

        {/* ----------- */}
        {elements}
        {/* ----------- */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DarkMode />
            </ListItemIcon>
            <Switch onClick={props.handle} />
          </ListItemButton>
        </ListItem>
        {/* ----------- */}
      </List>
      {/* ----------- */}
      <Divider
        variant="middle"
        sx={{
          borderColor: props.dark
            ? "rgb(255 255 255 / 30%)"
            : "rgba(1, 0, 0, 0.30)",
          my: "4px",
        }}
      />
      {/* ----------- */}
    </Box>
  );
};
