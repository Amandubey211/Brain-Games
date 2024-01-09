import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa6";
import "../Modal/Styles/ProjectModal.css";

const ProjectModal = ({
  title,
  Description,
  link,
  image,
  i,
  Techstack,
  Features,
}) => {
  const [loading, Setloading] = useState(false);

  return (
    <div>
      <div className="d-flex p-1 justify-content-between  gap-3 align-items-start">
        <div className="d-flex flex-column  gap-4 align-items-center justify-content-start ">
          <div style={{ background: `${image ? "" : "yellow"}` }}>
            <img
              src={image}
              className="rounded-3 projectImage p-1"
              alt={title}
              style={{
                height: "120px",
                width: "180px",
              }}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center gap-1 flex-column ">
            <b>
              {" "}
              <b className="vibrant">T</b>ech stack
            </b>
            <div className="d-flex  justify-content-center flex-wrap align-items-center gap-1">
              {Techstack?.map((item,i) => {
                return (
                  <div
                  key={i}
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,193,7,1) 35%, rgba(123,115,90,1) 92%)",
                      boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                      fontSize: "11px",
                    }}
                    className="p-1 rounded-1"
                  >
                    <b> {item}</b>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center gap-1">
          <b>
              {" "}
              <b className="vibrant">L</b>ive Demo
            </b>
        

          <Link to={link} target="_blank">
            <button
              className="button-52"
              role="button"
              onClick={() => {
                Setloading(true);
                setTimeout(() => {
                  Setloading(false);
                }, 2000);
              }}
            >
              <div className="d-flex justify-content-center align-items-center gap-1">
                

                {loading ? (
                  <b>loading..</b>
                ) : (
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <span className="divider pe-2"> Visit </span>{" "}
                    <FaLink className="fs-4" />
                  </div>
                )}
              </div>
            </button>{" "}
          </Link>
          </div>
        </div>

        <div className="d-flex  p-2 flex-column gap-3 align-items-start justify-content-start projectDescription">
          <div className="d-flex justify-content-center align-items-start flex-column gap-1 ">
            <b>
              {" "}
              <b className="vibrant">F</b>eatures :
            </b>
            <div className="d-flex justify-content-start align-items-start gap-2 flex-wrap">
              {Features?.map((item,i) => {
                return (
                  <div
                 key={i}
                    className="p-2 rounded-1 hoverlink "
                  >
                    <b style={{ fontSize: "14px" }}>{item}</b>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start flex-column gap-1">
            <div>
              {" "}
              <b>
                <b className="vibrant">D</b>escription :
              </b>
            </div>
            <div>
              <b className="vibrant fs-3">{Description?.trim().charAt(0)}</b>
              <span>{Description?.trim().substring(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
