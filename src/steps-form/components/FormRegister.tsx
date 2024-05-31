"use client";
import React from "react";
import HeaderFormRegister from "./HeaderFormRegister";
import FooterForm from "./FooterForm";
import ContentForm from "./ContentForm";

const FormRegister = () => {
  return (
    <div className="flex flex-col items-center  w-[calc(100%-40px)] sm:max-w-[600px] bg-white border border-gray-200 rounded-lg shadow">
      <HeaderFormRegister />
      <ContentForm />
      <FooterForm />
    </div>
  );
};

export default FormRegister;
