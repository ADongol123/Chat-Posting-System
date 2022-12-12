import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import FileRoutes from "./routes/FileRoutes";
import ChatProvider from "./Context/ChatProvider";

function App() {
  return (
    <Router>
      <ChatProvider>
        <FileRoutes />
      </ChatProvider>
    </Router>
  );
}

export default App;
