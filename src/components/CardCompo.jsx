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

const CardCompo = (props) => {
  let [state, setState] = useState({
    isLiked: false,
    isSaved: false,
  });
  return (
    <Card
      sx={{
        maxWidth: { lg: "80%", xs: "90%" },
        margin: "20px auto",
      }}
    >
      <CardHeader
        sx={{ p: 2 }}
        avatar={<Avatar alt="Remy Sharp" src={props.avatarSrc} />}
        subheader={props.date}
        title={props.name}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia
        image={props.cardImage}
        height="20%"
        component="img"
        sx={{ borderRadius: "2px" }}
      />
      <CardContent sx={{ p: 2 }}>
        <Typography variant="5" sx={{ fontFamily: "sans-serif" }} paragraph>
          {props.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          onClick={() => {
            setState((pre) => ({
              ...pre,
              isLiked: !pre.isLiked,
            }));
          }}
        >
          {state.isLiked ? <FilledHart /> : <Hart />}
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
        <IconButton
          onClick={() => {
            setState((pre) => ({
              ...pre,
              isSaved: !pre.isSaved,
            }));
          }}
        >
          {state.isSaved ? <TurnedIn /> : <TurnedInNot />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardCompo;
