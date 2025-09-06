"use client";
import { FloatingAboutMe } from "@/app/components/FloatingAboutMe";
import Grid from "@/app/components/Grid";
import Projects from "@/app/components/Projects";
import Welcome from "@/app/components/Welcome";
import Wrapper from "@/app/components/wrapper/Wrapper";
import React from "react";

export default function Home() {
  return (
    <>
      <Wrapper>
        <Grid>
          <Welcome />
          <Projects />
          <FloatingAboutMe />
        </Grid>
      </Wrapper>
    </>
  );
}

// https://katherine-le.com/
