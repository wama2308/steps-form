"use client";
import React from "react";
import HeaderFormRegister from "./HeaderFormRegister";
import FooterForm from "./FooterForm";
import ContentForm from "./ContentForm";
import Loading from "@/components/ui/Loading";
import { useStepsForm } from "@/hooks/useStepsForm";

const FormRegister = () => {
  const { loading } = useStepsForm();
  return (
    <div className="relative flex flex-col items-center  w-[calc(100%-40px)] sm:max-w-[600px] bg-white border border-gray-200 rounded-lg shadow">
      {loading && <Loading />}
      <HeaderFormRegister />
      <ContentForm />
      <FooterForm />
    </div>
  );
};

export default FormRegister;
