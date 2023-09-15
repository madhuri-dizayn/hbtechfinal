import React from "react";
import Section1 from "/components/Section1/Section1";
import CategoriesSectionBlog from "/components/CategoriesSectionBlog/CategoriesSectionBlog";
import MainSectionBlog from "/components/MainSectionBlog/MainSectionBlog";
import CardInfoBlog from "/components/CardInfoBlog/CardInfoBlog";

const page = () => {
  return (
    <div>
      <Section1 />
      <CategoriesSectionBlog />
      <MainSectionBlog />
      <CardInfoBlog/>
    </div>
  );
};

export default page;
