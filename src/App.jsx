import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import GRN from "./components/GRN";

export default function App() {
  return (
    <div className="flex flex-col justify-center ">
      <Header />
      <Hero />
    </div>
  );
}
