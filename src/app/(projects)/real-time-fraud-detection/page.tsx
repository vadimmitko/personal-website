import MdxLayout from "@/app/(components)/mdx-layout";
import RealTimeFraudDetection from "@/app/markdown/real-time-fraud-detection.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vadim Mitko | Real-time Fraud Detection",
};

export default function Project() {
  return (
    <MdxLayout>
      <RealTimeFraudDetection />
    </MdxLayout>
  );
}
