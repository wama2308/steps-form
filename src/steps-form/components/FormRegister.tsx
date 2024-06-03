"use client";
import React from "react";
import { useRouter } from "next/navigation";
import HeaderFormRegister from "./HeaderFormRegister";
import FooterForm from "./FooterForm";
import ContentForm from "./ContentForm";
import Loading from "@/components/ui/Loading";
import { useStepsForm } from "@/hooks/useStepsForm";
import ModalConfirm from "@/components/ui/ModalConfirm";

const FormRegister = () => {
  const router = useRouter();
  const { loading, openModal, dataSummary, updatedOpenModalAction } =
    useStepsForm();
  const messageModal = dataSummary?.message;

  const actionModal = () => {
    if (dataSummary?.status === "success") {
      router.push("/summary");
      updatedOpenModalAction({ open: false });
    } else {
      updatedOpenModalAction({ open: false });
    }
  };
  return (
    <>
      {openModal && (
        <ModalConfirm message={messageModal!} action={actionModal} />
      )}
      <div className="relative flex flex-col items-center  w-[calc(100%-40px)] sm:max-w-[600px] bg-white border border-gray-200 rounded-lg shadow">
        {loading && <Loading />}
        <HeaderFormRegister />
        <ContentForm />
        <FooterForm />
      </div>
    </>
  );
};

export default FormRegister;
