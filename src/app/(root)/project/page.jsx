import Grid from "@/app/components/Grid";
import AllProjects from "@/app/components/projects/AllProjects";
import Wrapper from "@/app/components/wrapper/Wrapper";
import React from "react";

export default function Project() {
  return (
    <Wrapper>
      <Grid>
        <AllProjects />
      </Grid>
    </Wrapper>
  );
}
