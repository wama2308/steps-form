"use client";
import { useStepsForm } from "@/hooks/useStepsForm";

export default function SummaryPage() {
  const { data } = useStepsForm();
  return (
    <div>
      <h1>Hello Page {data.step}</h1>
    </div>
  );
}
