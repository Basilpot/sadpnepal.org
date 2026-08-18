import type { Metadata } from "next";
import DonateClient from "./donate-client";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support SADP Nepal — your contribution helps equip Nepali farmers with knowledge and resources for organic farming and sustainable livelihoods.",
};

export default function DonatePage() {
  return <DonateClient />;
}
