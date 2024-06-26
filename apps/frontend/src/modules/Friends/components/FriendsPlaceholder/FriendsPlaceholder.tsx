import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import chatSvg from "./../../../../assets/chat.svg";
import { CreateGroupDialog } from "./components";

export const FriendsPlaceholder = () => {
  const [open, setOpen] = useState(false);

  const handleOnGroupClick = () => {
    setOpen(true);
  };

  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
      p={6}
      gap={4}
    >
      <Stack direction={"row"} gap={2} alignItems={"center"}>
        <img src={chatSvg} height={200} width={200} />
        <Typography variant="h2" fontWeight={700} color={"primary"}>
          Chatter.
        </Typography>
      </Stack>
      <Typography
        variant="h5"
        fontWeight={700}
        color={"text.primary"}
        textAlign={"center"}
        width={"50%"}
      >
        Message someone and chat right now.
      </Typography>
      <Button
        variant="contained"
        sx={{ borderRadius: "32px" }}
        size="large"
        onClick={handleOnGroupClick}
      >
        Create group
      </Button>
      <CreateGroupDialog open={open} setOpen={setOpen} />
    </Stack>
  );
};
