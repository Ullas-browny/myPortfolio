"use client";
import About from "@/app/components/about/About";
import Experiences from "@/app/components/about/Experiences";
import WhatIDo from "@/app/components/about/WhatIDo";
import Grid from "@/app/components/Grid";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Wrapper from "@/app/components/wrapper/Wrapper";

export default function about() {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);
  return (
    <Wrapper>
      <Grid>
        <About />
        <WhatIDo />
        <Experiences />
      </Grid>
    </Wrapper>
  );
}
