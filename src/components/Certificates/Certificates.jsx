import React from "react";
import CertificateCard from "./CertificateCard/CertificateCard";

function Certificates() {
  const style = {
    height: "10px",
    border: "0",
    boxShadow: "0 10px 10px -10px #8c8c8c inset",
  };

  return (
    <>
      <div className="CertificateWrapper" id="certificates">
        <div className="Container">
          <div className="SectionTitle">
            Certificates
            <hr style={style} />
          </div>

          {/* Assuming CertificateCard is a component for displaying individual certificates */}
          <CertificateCard />
          {/* Add more CertificateCard components as needed */}
        </div>
      </div>
    </>
  );
}

export default Certificates;
