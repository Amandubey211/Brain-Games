import React, { useContext } from "react";
import "./Styles/Popular.css";
import Categories from "../../Data/CategoryData";
import { NavLink } from "react-router-dom";
import QuizSettingPage from "../../Pages/QuizSettingPage";
import { categoryContext } from "../../Context/CategoryContextProvider";

const Popular = () => {
const {category,Setcategory,SetcategoryValue} = useContext(categoryContext);

    return (
        <div>
            <h6 className="text-center"> Most Popular Categories</h6>
            <div className="homepopularcategories d-flex flex-wrap flex-row justify-content-center align-items-center   p-2 rounded-2 ">
                {Categories.slice(6, 10).map((item ,i) => {
                    return (
                        <div key={i}>
                            <NavLink

                                onClick={() => { Setcategory(item.category);SetcategoryValue(item.value) }}
                                to="/quizsetting"
                                style={{
                                
                                    
                                    background:
                                        "linear-gradient(90deg, rgba(255,193,7,1) 35%, rgba(123,115,90,1) 92%)",
                                }}
                                className="d-flex popularCard text-reset text-decoration-none rounded-2  justify-content-center align-items-center"
                            >
                                <span className="text-center popularText p-3">{item.category}</span>
                              
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Popular;
