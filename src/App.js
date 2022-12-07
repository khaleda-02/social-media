import { Feed } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { RightBar } from "./components/RightBar";
import { SideBar } from "./components/SideBar";
import {
  Box,
  createTheme,
  CssBaseline,
  Grid,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Pages } from "./components/sideComponents/Pages";
import { Setting } from "./components/sideComponents/Setting";
import { AccountBox } from "./components/sideComponents/AccountBox";
import { Bookmarks } from "./components/sideComponents/Bookmarks";
import { Groups } from "./components/sideComponents/Groups";
import { People } from "./components/sideComponents/People";
function App() {
  const [dark, setDark] = useState(true);
  const DarkMode = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
  });
  function toggle() {
    setDark((pre) => !pre);
  }
  return (
    <ThemeProvider theme={DarkMode}>
      <Box>
        <CssBaseline />
        <NavBar dark={dark} />
        <Stack
          sx={{ maxWidth: { xs: "100%", lg: "80%" }, m: "auto" }}
          direction="row"
          justifyContent="space-evenly"
        >
          <SideBar handle={toggle} dark={dark} />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/people" element={<People />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/accountBox" element={<AccountBox />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
          <RightBar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
