"use client";
import { useStepsForm } from "@/hooks/useStepsForm";
import React from "react";

const ContentSummary = () => {
  const { dataSummary } = useStepsForm();

  return <div>{JSON.stringify(dataSummary)}</div>;
};

export default ContentSummary;
