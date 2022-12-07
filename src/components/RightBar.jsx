import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export const RightBar = () => {
  let info = {
    avatarSrc: [
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&uid=R30548219&ga=GA1.2.520006764.1655365272",
      "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?size=338&ext=jpg&uid=R30548219&ga=GA1.2.520006764.1655365272",
      "https://img.freepik.com/free-psd/young-businessman-3d-cartoon-avatar-portrait_627936-22.jpg?size=338&ext=jpg&uid=R30548219&ga=GA1.2.520006764.1655365272",
      "https://img.freepik.com/free-psd/young-businessman-3d-cartoon-avatar-portrait_627936-22.jpg?size=338&ext=jpg&uid=R30548219&ga=GA1.2.520006764.1655365272",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60",
      "https://img.freepik.com/free-psd/3d-illustration-person_23-2149436182.jpg?size=338&ext=jpg&uid=R30548219&ga=GA1.2.520006764.1655365272",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60",
    ],
    imageListItemSrc: [
      "https://images.unsplash.com/photo-1549388604-817d15aa0110",
      "https://cdn.pixabay.com/photo/2022/07/07/07/25/dog-7306691__340.jpg",
      "https://cdn.pixabay.com/photo/2021/12/22/10/08/cat-6887210__340.png",
      "https://images.freeimages.com/images/small-previews/5ae/summer-holiday-1188633.jpg",
      "https://images.freeimages.com/images/small-previews/e4e/circulate-abstract-1562332.jpg",
      "https://cdn.pixabay.com/photo/2022/06/27/02/22/woman-7286576_960_720.jpg",
    ],
    conversationInfo: [
      {
        src: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&uid=R30548219&ga=GA1.2.520006764.1655365272",
        userName: "khaled ayman",
        content:
          "Ali Connors — I'll be in your neighborhood doing errands this…",
      },
      {
        src: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        userName: "Baraa",
        content:
          "Ali Connors — I'll be in your neighborhood doing errands this…",
      },
      {
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        userName: "Hussen",
        content:
          "Ali Connors — I'll be in your neighborhood doing errands this…",
      },
    ],
  };

  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "none", md: "block" },
        position: "sticky",
        top: "6vh",
        maxHeight: "90vh",
      }}
    >
      {/* main container */}
      <Box sx={{ width: "95%", margin: "auto" }}>
        {/* online Friends */}
        <Typography variant="h6" my={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={7} sx={{ justifyContent: "flex-end" }}>
          {info.avatarSrc.map((e) => {
            return <Avatar src={e} />;
          })}
        </AvatarGroup>
        {/* latest photos  */}
        <Typography variant="h6" mb={2} mt={4}>
          Latest Photos
        </Typography>
        <ImageList
          cols={3}
          gap={2}
          mt={2}
          variant="woven"
          sx={{ width: "95%" }}
        >
          {info.imageListItemSrc.map((e) => {
            return (
              <ImageListItem>
                <img src={e} alt="img" />
              </ImageListItem>
            );
          })}
        </ImageList>
        {/*Latest Conversations*/}
        <Typography variant="h6" mb={1} mt={4}>
          Latest Conversations
        </Typography>
        <List>
          {info.conversationInfo.map((e) => {
            return (
              <ListItem>
                <ListItemIcon>
                  <Avatar src={e.src} />
                </ListItemIcon>
                <ListItemText
                  primary={e.userName}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {e.content}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};
