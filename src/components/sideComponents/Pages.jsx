import React from "react";
import {
  Box,
  CssBaseline,
  Card,
  CardContent,
  Avatar,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import CardCompo from "../CardCompo";
import data from "../../data/CardData";
import pagesData from "../../data/PagesData";

let pages = pagesData.map((e) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "space-between",
        alingItem: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
          alingItem: "center",
        }}
      >
        <Avatar
          sx={{ width: 56, height: 56 }}
          src={e.avatar}
        />
        <div>
          <h3>{e.name}</h3>
          <h5>{e.followers} Followers</h5>
        </div>
      </div>
      <div>
        <Button
          variant="outlined"
          sx={{ borderColor: "white", color: "white" }}
        >
          Un Follow
        </Button>
      </div>
    </div>
  );
});

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
export const Pages = () => {
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
          <h3>Followed Pgaes </h3>
        </MyCardHeader>
        <CardContent
          sx={{
            padding: "0 40px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "space-between",
            alingItem: "center",
          }}
        >{pages}</CardContent>
      </Card>
      <Box flex={4} m={0}>
        {elements}
      </Box>
    </Box>
  );
};
