import React, { useContext, useEffect, useRef, useState } from "react";
import Layout from "../Layout/Layout";
import Categories from "../Data/CategoryData.js";
import { categoryContext } from "../Context/CategoryContextProvider.js";
import { NavLink } from "react-router-dom";
import "./Styles/Category.css";
const Category = () => {
  const { Setcategory, SetcategoryValue } = useContext(categoryContext);
  const categoryref = useRef(null);
  const [load, Setload] = useState(15);

  useEffect(() => {
    categoryref?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <Layout title="All Categories">
      <div className="row ">
        <div className="col-lg-9 col-md-12 col-sm-12">
          <div className="d-flex flex-wrap    rounded-3 leftSideCategory   justify-content-center ">
            <h4 className="pt-2 fw-bolder ">
              {" "}
              <b className="vibrant fs-2">P</b>ick{" "}
              <b className="vibrant fs-2">O</b>ne!
            </h4>

            <div
              className="categoryOverFlow mb-2 d-flex flex-wrap align-items-center gap-3 p-4  border  rounded-2  "
              style={{
                boxShadow:
                  "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
              }}
            >
              {Categories.slice(0, load).map((item, i) => {
                return (
                  <div className="CategoryBox" key={item.value}>
                    <NavLink
                      id={i}
                      onClick={() => {
                        Setcategory(item.category);
                        SetcategoryValue(item.value);
                      }}
                      to="/quizsetting"
                      className=" d-flex CategoryCard text-reset text-decoration-none rounded-2  justify-content-center align-items-center"
                    >
                      <span className="text-center allCategoryText p-2 ">
                        {item.category}
                      </span>
                    </NavLink>
                    <span ref={categoryref}></span>
                  </div>
                );
              })}
            </div>
            <div className="topbutton">
              {load < Categories.length ? (
                <button
                  onClick={() => {
                    Setload(load + 5);
                  }}
                  className=" mb-2 button-52"
                  role="button"
                >
                  Load More{" "}
                </button>
              ) : (
                <>
                  <p className=" py-2 rounded-2 px-4 fs-6">
                    Total:{Categories.length}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 rightCategorySection">
          <div className="home_right d-flex flex-column justify-content-center align-items-center mt-3 ">
            {/* <h4 className="p-2 fw-bolder ">
              {" "}
              <b className="vibrant fs-2">P</b>ick{" "}
              <b className="vibrant fs-2">O</b>ne!
            </h4> */}
            <h6>
              {" "}
              <b>
                <b className="vibrant fs-4">T</b>otal : {Categories.length}{" "}
              </b>
            </h6>
            <img
              src="/CategoryPage.svg"
              className="landingImage p-2"
              alt="landingImage"
            />

            <p className="">
              {" "}
              <b className="vibrant">G</b>ood <b className="vibrant">L</b>
              uck <b className="vibrant">N</b>injas
            </p>
            {load < Categories.length ? (
              <button
                onClick={() => {
                  Setload(load + 5);
                }}
                className=" mb-2 button-52"
                role="button"
              >
                Load More{" "}
              </button>
            ) : (
              <>
                <p className=" py-2 rounded-2 px-4 fs-6"></p>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;
