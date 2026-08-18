"use client";

import { useEffect } from "react";

export default function WpAdminPage() {
  useEffect(() => {
    const url = "https://blogs.sadpnepal.org/wp/wp-admin/";
    window.location.href = url;
  }, []);

  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <p className="text-brand-on-surface-variant text-lg">
        Redirecting to wp-admin&hellip;
      </p>
    </section>
  );
}
