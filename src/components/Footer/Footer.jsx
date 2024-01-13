import React from "react";
import { TechCard } from "../Projects/ProjectCard/ProjectCardElements";

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <TechCard
        style={{ fontWeight: "700", width: "300px", textAlign: "center" }}
      >
        Made with 🤍 by &nbsp;
        <a
          href="https://www.linkedin.com/in/sahith-jonnadula"
          target="_blank"
          rel="noreferrer"
        >
          Sahith
        </a>
      </TechCard>
    </footer>
  );
}

export default Footer;
