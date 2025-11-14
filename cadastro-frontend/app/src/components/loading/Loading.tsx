"use client";

import { CircularProgress } from "@mui/material";
import { Loading } from "./types";

export default function LoadingOverlay({ open }: Loading) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <CircularProgress size={60} />
    </div>
  );
}
