"use client";

import { useEffect } from "react";

export default function ClientSelectTour({ tourId }: { tourId: string }) {
  useEffect(() => {
    // Dispatch the custom select-tour event to let LeadCapture auto-select the package
    const event = new CustomEvent("select-tour", {
      detail: { tourId, mode: "confirm" },
    });
    window.dispatchEvent(event);
  }, [tourId]);

  return null;
}
