// a salient button that links to the quickstart guide

import Link from "@docusaurus/Link";
import React from "react";

export default function Quickstart() {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/tutorial">
        <button
          style={{
            fontSize: "1rem",
            background: "none",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            backgroundColor: "var(--ifm-color-primary)",
            color: "white",
          }}
        >
          开始阅读
        </button>
      </Link>
    </div>
  );
}
