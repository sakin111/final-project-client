import { Grid } from "@mui/material";
import BigSite from "./Bigsite";
import SmallSite from "./SmallSite";
import First from "./First";


const Trending = () => {
  return (
    <Grid container spacing={2} className="justify-center items-center">
    <Grid item xs={8}>
      <First></First>
     <BigSite></BigSite>
    </Grid>
    <Grid item xs={4}>
      <SmallSite></SmallSite>
    </Grid>
  </Grid>
  );
};

export default Trending;