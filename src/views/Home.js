import React from "react";
import useHeadingsData from "../hooks/useHeadingsData";

export default function Home() {
  return (
    <div>
      <h2 id="initial-header">Initial header</h2>
      <p>This is the most recent post!</p>
      <h2 id="second-header">double header</h2>
      <p>Two games in one day!</p>
    </div>
  );
}
