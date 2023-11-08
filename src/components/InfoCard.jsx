import React from "react";
import GitHub from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";

const InfoCard = () => {
  const LabelBar = {
    backgroundColor: "#959595",
    height: "23px",
    width: "100px",
    borderRadius: "3px",
    border: "1px solid grey",
  };

  const InfoBar = {
    backgroundColor: "#ffffff",
    height: "23px",
    width: "180px",
    borderRadius: "3px",
    color: "black",
    border: "1px solid grey",
  };

  const CSButton = {
    backgroundColor: "#1CA0D0",
    height: "70px",
    width: "85px",
    borderRadius: "10px",
    border: "5px double white",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  };

  const ResButton = {
    backgroundColor: "#1CA0D0",
    color: "white",
    width: "115px",
    height: "20px",
    borderRadius: "5px",
    fontSize: "15px",
    textAlign: "center",
  };

  const Flex = {
    display: "flex",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            width: "500px",
            height: "300px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            border: "2px solid white",
            color: "white",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "yellow",
              marginBottom: "10px",
              fontSize: "12px",
            }}
          >
            CHARACTER INFO
          </div>
          <div
            style={{
              backgroundColor: "#EEEEEE",
              width: "480px",
              height: "230px",
              borderRadius: "10px",
              border: "2px solid grey",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                width: "180px",
                height: "223px",
                borderRadius: "10px",
                marginTop: "3px",
                marginLeft: "3px",
                border: "2px solid grey",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div
                style={{
                  backgroundImage: 'url("/tracy.png")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "110px",
                  height: "133px",
                  marginTop: "37px",
                }}
              />
              <div
                style={{
                  backgroundColor: "#1CA0D0",
                  height: "30px",
                  width: "170px",
                  borderRadius: "10px",
                  border: "5px double white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                }}
              >
                <p>Tracy Qin</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginLeft: "5px",
              }}
            >
              <div style={{ display: "flex" }}>
                <div style={CSButton}>
                  <LinkedInIcon sx={{ fontSize: 40 }} />
                  LinkedIn
                </div>
                <div style={CSButton}>
                  <GitHub sx={{ fontSize: 40 }} /> GitHub
                </div>
                <div style={CSButton}>
                  <DescriptionIcon sx={{ fontSize: 40 }} /> Resume
                </div>
              </div>

              <div style={Flex}>
                <div style={LabelBar}>&nbsp;DEGREE</div>
                <div style={InfoBar}>&nbsp; B CompSci/Commerce</div>
              </div>
              <div style={Flex}>
                <div style={LabelBar}>&nbsp;UNIVERSITY</div>
                <div style={InfoBar}>&nbsp; UNSW</div>
              </div>
              <div style={Flex}>
                <div style={LabelBar}>&nbsp;MOBILE</div>
                <div style={InfoBar}>&nbsp; 0409 229 463</div>
              </div>
              <div style={Flex}>
                <div style={LabelBar}>&nbsp;EMAIL</div>
                <div style={InfoBar}>&nbsp; tracyjqin@gmail.com</div>
              </div>
              <div style={Flex}>
                <div style={LabelBar}>&nbsp;LATEST EXP.</div>
                <div style={InfoBar}>&nbsp; Deloitte Digital</div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "5px",
              gap: "7px",
            }}
          >
            <div
              style={{
                backgroundColor: "#A0DA01",
                color: "white",
                width: "115px",
                height: "20px",
                borderRadius: "5px",
                fontSize: "15px",
                textAlign: "center",
              }}
            >
              SKILLS
            </div>
            <div style={ResButton}>EXPERIENCE</div>
            <div style={ResButton}>VOLUNTEERING</div>
            <div style={ResButton}>INTERESTS</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
