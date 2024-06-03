"use client";
import React from "react";
import { useRouter } from "next/navigation";
import HeaderFormRegister from "./HeaderFormRegister";
import FooterForm from "./FooterForm";
import ContentForm from "./ContentForm";
import Loading from "@/components/ui/Loading";
import { useStepsForm } from "@/hooks/useStepsForm";
import ModalConfirm from "@/components/ui/ModalConfirm";

/**
 * Componente principal que representa el formulario de registro.
 * Este componente gestiona el estado del formulario, incluyendo el manejo de la carga, la navegación entre pasos,
 * la visualización del contenido del formulario, y la presentación de un modal de confirmación cuando se envía el formulario.
 * @returns JSX.Element
 */
const FormRegister = () => {
  const router = useRouter();
  const { loading, openModal, dataSummary, updatedOpenModalAction } =
    useStepsForm();
  const messageModal = dataSummary?.message ?? "¡Error de conexión, por favor intente más tarde!";

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
      <div
        className="h-screen sm:h-auto relative flex flex-col items-center w-full sm:max-w-[600px] bg-white border border-gray-200 rounded-lg shadow"
        data-cy="container-steps-form-8877"
      >
        {loading && <Loading />}
        <HeaderFormRegister />
        <ContentForm />
        <FooterForm />
      </div>
    </>
  );
};

export default FormRegister;
