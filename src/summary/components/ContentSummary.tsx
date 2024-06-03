"use client";
import { useStepsForm } from "@/hooks/useStepsForm";
import React from "react";
import ItemSummary from "./ItemSummary";
import { formattedKeys, formatValue } from "@/utils";
import { DataSend } from "@/steps-form/interfaces/steps-form";
import AlertNoData from "@/components/ui/AlertNoData";

const ContentSummary = () => {
  const { dataSummary } = useStepsForm();

  return (
    <div
      className="w-[calc(100%-40px)] sm:max-w-[1000px] mx-auto my-[50px]"
      data-cy="content-summary-4455"
    >
      {dataSummary ? (
        <div className="border border-gray-200 rounded-md mx-auto p-5 sm:p-10">
          <h3 className="mb-3 text-base font-semibold leading-7 text-gray-900">
            Resumen
          </h3>
          <div className="border-b border-gray-100" />
          {renderData(dataSummary.data as DataSend)}
        </div>
      ) : (
        <AlertNoData />
      )}
    </div>
  );
};

export default ContentSummary;

const renderData = (data: DataSend) => {
  return Object.keys(data).map((key) => {
    if (key === "password" || key === "confirm_password") return null;
    const value = data[key];
    if (value === null || value === undefined) return null;
    if (key === "personal_info" || key === "business_info") {
      return <div key={key}>{renderData(value as DataSend)}</div>;
    } else {
      return (
        <ItemSummary
          key={key}
          label={formattedKeys[key]}
          value={formatValue(data[key])}
        />
      );
    }
  });
};
