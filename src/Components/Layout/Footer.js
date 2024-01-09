import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { SiReplit } from "react-icons/si";
import "./Styles/Footer.css";
import { myproject } from "../../Data/Project";
import MyModal from "../Modal/Modal";
const Footer = () => {
  return (
    <div className="row px-2  ">
      <hr />

      <div className="col-lg-6 col-md-12 col-sm-12 col-xl-6 ">
        <div className="d-flex justify-content-center  ">
          <b className="py-3">
            {" "}
            <b className="vibrant">M</b>y Projects : <b> {myproject.length}</b>
          </b>
        </div>

        <div className="d-flex justify-content-center rounded-3  footerRight flex-wrap  gap-3  align-items-center border p-2">
          {" "}
          {myproject.map((data, i) => {
            return (
              <MyModal
                key={i}
                TooltipData={data.Tooltip}
                title={data.title}
                TimeTaken={data.timeTaken}
                i={i}
                link={data.link}
                Description={data.Description}
                image={data.image}
                Techstack={data.TeckStack}
                Features={data.Features}
              />
            );
          })}
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 col-xl-6  ">
        <div className="d-flex  justify-content-center  align-items-center">
          <b className="py-3">
            {" "}
            <b className="vibrant">D</b>etails
          </b>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12  leftFooterFirstSection ">
            {" "}
            <div className="d-flex flex-column gap-2 align-items-center justify-content-start ">
              <img
                className="rounded-3  footerImage  "
                src="Aman dubey.png "
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
                }}
              />
              <b>
                {" "}
                <b className="vibrant">A</b>man Dubey
              </b>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <div
              className="d-flex flex-column align-items-center  flex-wrap  gap-2 leftFooterSectionInfo border  rounded-2"
              style={{
                boxShadow:
                  "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
              }}
            >
              <div className="d-flex justify-content-start    gap-2">
                <span>Role : </span>
                <b>
                  <b className="vibrant">R</b>EACT/MERN DEV
                </b>
              </div>

              <div className="d-flex justify-content-start  align-items-center  gap-2">
                <span>Qulifications : </span>
                <b>
                  {" "}
                  <b className="vibrant"> M</b>CA
                </b>
              </div>

              <div className="d-flex justify-content-start  flex-wrap  align-items-center gap-2">
                <span>Address : </span>
                <b>
                  {" "}
                  <b className="vibrant">M</b>umbai{" "}
                </b>
              </div>

              <div className="d-flex justify-content-start  align-items-center  gap-2">
                <span>Open to Work : </span>
                <b>
                  {" "}
                  <b className="vibrant"> Y</b>ES
                </b>
              </div>
              <div className="d-flex justify-content-start align-items-center gap-2">
                <span>Mail : </span>
                <b style={{ fontSize: "13px" }}>amanreactdeveloper@</b>
              </div>
            </div>
          </div>

          <div className="col-2 leftFooterDeskstopSection ">
            <div className="d-flex  justify-content-start mb-2    leftFooterSection   ">
              <div className="d-flex justify-content-between align-items-center flex-column  gap-3 ">
                <NavLink
                  target="_blank"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,193,7,1) 35%, rgba(123,115,90,1) 92%)",
                  }}
                  className="text-decoration-none text-reset rounded-2   "
                  to="https://www.linkedin.com/in/aman-dubey-0bbaba236/"
                >
                  <BsLinkedin
                    role="button"
                    className="links rounded-2  hoverlink p-2 "
                  />{" "}
                </NavLink>

                <Link
                  target="_blank"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,193,7,1) 35%, rgba(123,115,90,1) 92%)",
                  }}
                  className="text-decoration-none text-reset rounded-2 "
                  to="https://www.instagram.com/aman_dubey_444/"
                >
                  <BsInstagram
                    role="button"
                    className="links rounded-2 hoverlink p-2 "
                  />
                </Link>
                <Link
                  target="_blank"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,193,7,1) 35%, rgba(123,115,90,1) 92%)",
                  }}
                  className="text-decoration-none text-reset rounded-2"
                  to="https://github.com/Amandubey211"
                >
                  {" "}
                  <BsGithub
                    role="button"
                    className="links rounded-2 hoverlink p-2 "
                  />{" "}
                </Link>
                <Link
                  target="_blank"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,193,7,1) 35%, rgba(123,115,90,1) 92%)",
                  }}
                  className="text-decoration-none text-reset rounded-2"
                  to="https://replit.com/@TYIT211-DUBEYAM"
                >
                  {" "}
                  <SiReplit
                    role="button"
                    className="links rounded-2 hoverlink p-2 "
                  />{" "}
                </Link>
              </div>
            </div>{" "}
          </div>

          <div className="col-12 leftFooterMobileSection">
            <div className="d-flex  justify-content-center my-2    leftFooterSection  ">
              <div className="d-flex justify-content-between align-items-center  gap-3 ">
                <NavLink
                  target="_blank"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,193,7,1) 35%, rgba(123,115,90,1) 92%)",
                  }}
                  className="text-decoration-none text-reset  rounded-2 "
                  to="https://www.linkedin.com/in/aman-dubey-0bbaba236/"
                >
                  <BsLinkedin
                    role="button"
                    className="links rounded-2  hoverlink p-2 "
                  />{" "}
                </NavLink>

                <Link
                  target="_blank"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,193,7,1) 35%, rgba(123,115,90,1) 92%)",
                  }}
                  className="text-decoration-none text-reset rounded-2"
                  to="https://www.instagram.com/aman_dubey_444/"
                >
                  <BsInstagram
                    role="button"
                    className="links rounded-2 hoverlink p-2 "
                  />
                </Link>
                <Link
                  target="_blank"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,193,7,1) 35%, rgba(123,115,90,1) 92%)",
                  }}
                  className="text-decoration-none text-reset rounded-2"
                  to="https://github.com/Amandubey211"
                >
                  {" "}
                  <BsGithub
                    role="button"
                    className="links rounded-2 hoverlink p-2 "
                  />{" "}
                </Link>
                <Link
                  target="_blank"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,193,7,1) 35%, rgba(123,115,90,1) 92%)",
                  }}
                  className="text-decoration-none text-reset rounded-2"
                  to="https://replit.com/@TYIT211-DUBEYAM"
                >
                  {" "}
                  <SiReplit
                    role="button"
                    className="links rounded-2 hoverlink p-2 "
                  />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
