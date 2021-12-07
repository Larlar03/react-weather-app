import React from "react";

import "./RepoLink.css";

export default function RepoLink() {
  return (
    <div className="repo-link">
      <a
        href="https://github.com/Larlar03/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      by Lana Gordon
    </div>
  );
}
