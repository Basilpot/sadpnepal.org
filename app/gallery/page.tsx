import type { Metadata } from "next";
import GalleryClient from "./gallery-client";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore moments captured across SADP Nepal's programs — terraced fields, community gatherings, and sustainable agriculture in rural Nepal.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
