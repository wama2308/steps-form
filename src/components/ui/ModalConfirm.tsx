import React from "react";

interface Props {
  message: string;
  action: () => void;
}

const ModalConfirm = ({ message, action }: Props) => {
  return (
    <div
      className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
      style={{ background: "rgba(0,0,0,.7)" }}
      data-cy="modal-confirm-7744"
    >
      <div className="border border-blue-700 shadow-lg modal-container bg-white w-11/12 md:max-w-xs mx-auto rounded z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="my-5">
            <p>{message}</p>
          </div>

          <div className="flex justify-end pt-2">
            <button
              className="focus:outline-none px-4 bg-blue-700 hover:bg-blue-800 p-2 ml-3 rounded-lg text-white"
              onClick={() => action()}
              data-cy="button-accept-modal-confirm-4455"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
