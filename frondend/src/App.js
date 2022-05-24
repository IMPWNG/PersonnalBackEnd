import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Views from "./Views";

export default function App() {
  return (
    <Router>
      <Views />
    </Router>
  );
}
