import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lothar AI — AI-Powered Ad Generation for Supplement Brands";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Crimson glow */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,26,43,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Rune mark SVG inline */}
        <svg
          width="80"
          height="100"
          viewBox="0 0 64 80"
          fill="none"
          stroke="#8B1A2B"
          strokeWidth="3"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <line x1="32" y1="4" x2="32" y2="76" />
          <line x1="32" y1="4" x2="16" y2="22" />
          <line x1="32" y1="4" x2="48" y2="22" />
          <line x1="32" y1="28" x2="12" y2="12" />
          <line x1="32" y1="28" x2="52" y2="12" />
          <line x1="32" y1="36" x2="18" y2="48" />
          <line x1="32" y1="36" x2="46" y2="48" />
          <line x1="32" y1="62" x2="18" y2="76" />
          <line x1="32" y1="62" x2="46" y2="76" />
        </svg>

        <div
          style={{
            marginTop: "32px",
            fontSize: "48px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "#F5F0E8",
            fontFamily: "system-ui",
          }}
        >
          LOTHAR AI
        </div>

        <div
          style={{
            marginTop: "16px",
            fontSize: "20px",
            color: "#A39E93",
            fontFamily: "system-ui",
            maxWidth: "600px",
            textAlign: "center",
          }}
        >
          AI-Powered Ad Generation for Supplement Brands
        </div>

        {/* Gold accent line */}
        <div
          style={{
            marginTop: "32px",
            width: "80px",
            height: "2px",
            background: "#C9A84C",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
