import React, { useContext, useState } from "react";
import "./Styles/Header.css";
import { IoSearch } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import Categories from "../../Data/CategoryData";
import { categoryContext } from "../../Context/CategoryContextProvider";
import { MdContactMail } from "react-icons/md";
const Header = () => {
  const [value, Setvalue] = useState("");
  const { SetcategoryValue, Setcategory } = useContext(categoryContext);
  const history = useNavigate();
  const OnChange = (e) => {
    Setvalue(e.target.value);
  };

  return (
    <div className="header d-flex  justify-content-between px-3 gap-1 align-items-center p-2 ">
      <div className="d-flex justify-content-center align-items-center   py-1 ">
        <NavLink to="/" className="text-reset text-decoration-none ">
        {/* <h4 className="desktopLogo"> */}

          <h4 className="desktopLogo mt-1">
            <b className="B">B</b>rain <b className="G">G</b>ames
          </h4>
        </NavLink>

        {/* <NavLink to="/" className="text-reset text-decoration-none ">
          <h6 className="mobileLogo">
            <b className="B">B</b><b className="">G</b>
          </h6>
        </NavLink> */}
      </div>
      {window.location.href.includes("contact") ||
      window.location.href.includes("progress") ? (
        <></>
      ) : (
        <>
          {" "}
          <div className="d-flex justify-content-center align-items-center">
            <form onSubmit={(e) => e.preventDefault()}>
              <fieldset className=" fieldset rounded-2 pe-1 d-flex align-items-center ">
                <input
                  className="searchInput p-2 rounded-1"
                  placeholder="search category"
                  value={value}
                  onChange={OnChange}
                  type="text"
                />
                <button>
                  <IoSearch style={{ color: "ffc107" }} className="fs-5" />
                </button>
              </fieldset>
              <div
                className="d-flex justify-content-start flex-column align-items-start gap-2 p-2 "
                style={{
                  zIndex: "45 ",
                  position: "absolute",
                  maxHeight: "300px",
                }}
              >
                {Categories.filter((item) => {
                  let searchedCategory = value.toLocaleLowerCase();
                  let currentCategory = item.category.toLocaleLowerCase();
                  return (
                    searchedCategory &&
                    currentCategory.startsWith(searchedCategory) &&
                    currentCategory !== searchedCategory
                  );
                }).map((item, i) => {
                  return (
                    <div
                      className="d-flex justify-content-center hoverlink p-3 rounded-1 "
                      key={i}
                      onClick={() => {
                        Setvalue(item?.category);
                        SetcategoryValue(item?.value);
                        Setcategory(item?.category);
                        history("/quizsetting");
                      }}
                    >
                      {" "}
                      <b>
                        <b className="vibrant">
                          {item.category.substring(0, value.length)}
                        </b>
                        {item.category.substring(value.length)}{" "}
                      </b>{" "}
                    </div>
                  );
                })}
              </div>
            </form>
          </div>
        </>
      )}

      <nav className="navbar gap-3  d-flex justify-content-center align-items-center">
        <div className="desktopContact">
          <NavLink className="nav-link   py-1 rounded-2 " to="/">
            <b className="">
              {" "}
              <b className="vibrant">H</b>ome
            </b>
          </NavLink>
        </div>
        {/* <div className="desktopContact">
          <NavLink className="nav-link   py-1 rounded-2 " to="/category">
            <b className="">
              {" "}
              <b className="vibrant">C</b>ategory
            </b>
          </NavLink>
        </div> */}
        <div className="desktopContact">
          <NavLink className="nav-link   py-1 rounded-2 " to="/contact">
            <b className="">
              {" "}
              <b className="vibrant">C</b>ontact.
            </b>
          </NavLink>
        </div>

        <div className="mobileContact">
          <NavLink className="nav-link   py-1 rounded-2 " to="/contact">
            <b className="">
              <MdContactMail
                className="hoverlink p-1 rounded-1"
                style={{ color: " #ffc107",fontSize:"35px" }}
              />
            </b>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
