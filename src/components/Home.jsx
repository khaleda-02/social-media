import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  createTheme,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Hart from "@mui/icons-material/FavoriteBorder";
import FilledHart from "@mui/icons-material/Favorite";
import Share from "@mui/icons-material/Share";
import TurnedIn from "@mui/icons-material/TurnedIn";
import TurnedInNot from "@mui/icons-material/TurnedInNot";
import CardCompo from "./CardCompo";
import data from "../data/CardData";
let elements = data.map((e) => {
  return (
    <CardCompo
      cardImage={e.cardImage}
      avatarSrc={e.avatarSrc}
      content={e.content}
      name={e.name}
      date={e.date}
    />
  );
});

export const Feed = () => {
  return (
    <Box flex={4} p={2} m={0}>
      {elements}
    </Box>
  );
};
