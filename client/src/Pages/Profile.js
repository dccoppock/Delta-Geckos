import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import GamesPlayed from "../components/GamesPlayed";
import UserInfo from "../components/UserInfo";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Item className="user_info">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid sm={6}>
          <GamesPlayed />
        </Grid>
        <Grid sm={6}>
          <UserInfo />
        </Grid>
      </Grid>
    </Item>
  );
}
