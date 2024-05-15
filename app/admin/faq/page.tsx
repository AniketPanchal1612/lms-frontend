"use client";
import DashboardHero from "../../components/Admin/DashboardHero";
import AdminProtected from "../../hooks/adminProtected";
import Heading from "../../utils/Heading";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import EditFaq from "../../components/Admin/customization/EditFaq";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="Elearning - Admin"
          description="ELearning is a platform for students to learn and get help from teachers"
          keywords="Programming,MERN,Redux,Machine Learning"
        />
        <div className="flex min-h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <EditFaq />
            <br />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;