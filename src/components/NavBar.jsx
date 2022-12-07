import {
  AppBar,
  Avatar,
  Badge,
  CssBaseline,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const CustomToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 85px",
});

const Mydiv = styled("div")(({ theme }) => ({
  // border: "1px solid white",
  backgroundColor:"white",
  width: "40%",
  borderRadius: theme.shape.borderRadius,
  padding: "0 10px",
}));
const MyIcons = styled("div")(({ theme }) => ({
  padding: "0 10px",
  display: "none",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const MySmIcons = styled("div")(({ theme }) => ({
  padding: "0 10px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const NavBar = ({ dark }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <AppBar  p={4} position="sticky">
    <CssBaseline />
      <CustomToolBar>
        {/* ------------------------------------ */}
        <Typography
          variant="h5"
          sx={{
            display: { xs: "none", sm: "block" },
            fontStyle: "italic",
            fontFamily: "monospace",
          }}
        >
          Diamond
        </Typography>
        <Typography variant="h5" sx={{ display: { xs: "block", sm: "none" } }}>
          <DiamondIcon />
        </Typography>
        {/* ------------------------------------ */}
        <Mydiv>
          <InputBase
            placeholder="Search ..."
            sx={{
              "& ::-webKit-input-placeholder": {
                color: "black !important" 
              },
            }}
          />
        </Mydiv>
        {/* ------------------------------------ */}
        <MyIcons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="white" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon color="white" />
          </Badge>
          <Avatar
            onClick={() => setOpen((pre) => !pre)}
            alt="Remy Sharp"
            src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=338&ext=jpg&uid=R30548219&ga=GA1.2.520006764.1655365272"
          />
        </MyIcons>

        <MySmIcons onClick={() => setOpen((pre) => !pre)}>
          <Avatar
            alt="Remy Sharp"
            src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=338&ext=jpg&uid=R30548219&ga=GA1.2.520006764.1655365272"
          />
          <Typography variant="h6">Khaled</Typography>
        </MySmIcons>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={isOpen}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
        {/* ------------------------------------ */}
      </CustomToolBar>
    </AppBar>
  );
};
