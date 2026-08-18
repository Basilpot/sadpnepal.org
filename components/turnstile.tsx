"use client";

import { useRef, useCallback, useEffect } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const SITEKEY = "0x4AAAAAAETetIHAskWpPJUc";

export function Turnstile({
  onVerify,
  onExpire,
}: {
  onVerify: (token: string) => void;
  onExpire?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string>("");

  const handleVerify = useCallback(
    (token: string) => {
      onVerify(token);
    },
    [onVerify]
  );

  useEffect(() => {
    if (!ref.current || !window.turnstile) return;

    widgetId.current = window.turnstile.render(ref.current, {
      sitekey: SITEKEY,
      callback: handleVerify,
      "expired-callback": onExpire,
      theme: "light",
    });

    return () => {
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
      }
    };
  }, [handleVerify, onExpire]);

  return <div ref={ref} className="cf-turnstile" />;
}
