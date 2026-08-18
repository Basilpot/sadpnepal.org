"use client";

import { useEffect } from "react";

export default function WebmailPage() {
  useEffect(() => {
    const url = "https://fishtail.mysecurecloudserver.com:2096/";
    window.location.href = url;
  }, []);

  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <p className="text-brand-on-surface-variant text-lg">
        Redirecting to webmail&hellip;
      </p>
    </section>
  );
}
