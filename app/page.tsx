"use client";
import React from "react";
import Header from "@/components/Header";
import About from "@/components/About";

const Home: React.FC = ()=>{
  return (
    <div>
      <Header />
      <h1>This is Home Page *</h1>
      <About />
    </div>
  );
}
export default Home;