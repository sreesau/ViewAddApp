import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#2c3e50",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
    }}>
      <h2 style={{ margin: 0 }}>Item Portal</h2>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/add" style={{ color: "white", textDecoration: "none" }}>Add Item</Link>
        <Link to="/view" style={{ color: "white", textDecoration: "none" }}>View Items</Link>
      </div>
    </nav>
  );
}

export default Navbar;
