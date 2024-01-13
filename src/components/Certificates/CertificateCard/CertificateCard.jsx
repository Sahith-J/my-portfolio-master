import React from "react";
import { CertificateList } from '../../../data/ProjectData';
import { FaCertificate } from "react-icons/fa";

import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./CertificateCardElements";
import ScrollAnimation from "react-animate-on-scroll";


function CertificateCard() {
  return (
    <>
      {CertificateList.map((certificate, index) => (
        <ScrollAnimation
          animateIn={index % 2 ? "fadeInLeft" : "fadeInRight"}
          key={index}
          animateOnce
        >
          <Card>
          <CardLeft>
                <img src={certificate.img} alt={certificate.name} />
              

              </CardLeft>
            <CardRight>
              <h4>{certificate.title}</h4>
              <p>{certificate.description}</p>
              <TechCardContainer>
                {certificate.tech_stack.map((tech, techIndex) => (
                  <TechCard key={techIndex}>{tech}</TechCard>
                ))}
              </TechCardContainer>
              <BtnGroup>
                {certificate.credential_url.length > 0 && (
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href={certificate.credential_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FaCertificate style={{ marginRight: "4px" }} />
                    <span>View Certificate</span>
                  </a>
                )}
              </BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default CertificateCard;
