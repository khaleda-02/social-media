import React from "react";
import {
  Box,
  CssBaseline,
  Card,
  CardContent,
  Avatar,
  Button,
  CardHeader,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import styled from "@emotion/styled";
import CardCompo from "../CardCompo";
import data from "../../data/CardData";
import pagesData from "../../data/PagesData";

let elements = data.reverse().map((e) => {
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

let pages = pagesData.map((e) => {
  return (
    <Card
      sx={{
        width: "47%",
        padding: "15px",
        display: "flex",
        gap: "15px",
        justifyContent: "cneter",
        alingItem: "center",
        bgcolor: "#1c1c1c",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "flex-start",
          alingItem: "center",
        }}
      >
        <Avatar
          sx={{ width: 56, height: 56 }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQHCBAj8nRJkEwjWg5TpNuSZZG9iscsf43V1mfx0LZHNDYW3S_&usqp=CAU"
        />
      </div>
      <div>
        <div>
          <h4>APEX Legends: Assemble!</h4>
          <h6>Created by siriwatknp</h6>
        </div>
        <Typography variant="caption" color="#908c8c">
          <span style={{ fontWeight: "800", color: "#a4a4a4" }}>
            Shining Alpaca
          </span>
          and 3 others are already members of this group.
        </Typography>
      </div>
    </Card>
  );
});

export const Groups = () => {
  const MyCardHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 30px",
  }));
  return (
    <Box flex={4} p={2} m={0}>
      <CssBaseline />
      <Card
        sx={{
          maxWidth: { lg: "80%", xs: "90%" },
          margin: "20px auto",
        }}
      >
        <MyCardHeader>
          <h3>Your Groups</h3>
        </MyCardHeader>
        <CardContent
          sx={{
            padding: "0 40px",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "flex-start",
            alingItem: "center",
          }}
        >
          {pages}
        </CardContent>
      </Card>
      <Box flex={4} m={0}>
        {elements}
      </Box>
    </Box>
  );
};
