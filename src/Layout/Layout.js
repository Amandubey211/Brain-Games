import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, auhor }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="auhor" content={auhor} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <Toaster />
      <main style={{  }} className=" ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Brain-Games",
  description: "Quiz App REACT-PROJECT",
  author: "amandubey8833Gmail.com",
  keywords:
    "#react,Quiz App ,UI,UX,interface, fun , games,best,free",
};

export default Layout;
