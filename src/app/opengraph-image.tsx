import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";

// Next wires this image into the OG + Twitter card meta tags automatically.
export const alt = "Arijit Mondal — Full-Stack & Web3 Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share card — name + role on the dark portfolio palette. */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#0b0e14",
        color: "#e5e7eb",
        fontFamily: "monospace",
      }}
    >
      <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -2 }}>
        {profile.name}
      </div>
      <div style={{ marginTop: 16, fontSize: 40, color: "#8b95a5" }}>
        Full-Stack &amp; Web3 Developer
      </div>
      <div
        style={{
          marginTop: 48,
          height: 6,
          width: 160,
          background: "#39d353",
          borderRadius: 9999,
        }}
      />
    </div>,
    { ...size }
  );
}
