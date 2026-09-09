import MdxLayout from "@/app/(components)/mdx-layout";
import RedisClone from "@/app/markdown/redis-clone.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vadim Mitko | Real-time Fraud Detection",
};

export default function Project() {
  return (
    <MdxLayout>
      <RedisClone />
    </MdxLayout>
  );
}
