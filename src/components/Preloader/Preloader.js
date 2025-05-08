import React, { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

export default function Preloader({ onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Show loader for 2s, then fade out 0.8s, then call onFinish
    const t1 = setTimeout(() => setVisible(false), 2000);
    const t2 = setTimeout(() => onFinish && onFinish(), 2800);

    // Snow animation
    const canvas = document.getElementById("snow-canvas");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      let width = window.innerWidth;
      let height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Detect light/dark mode
      const isDark = document.body.classList.contains("dark");
      const snowColor = isDark
        ? "rgba(255,255,255,0.85)"
        : "rgba(180,180,200,0.85)";

      // Snowflake properties
      const snowflakes = Array.from({ length: 80 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 1,
        d: Math.random() * 1 + 0.5,
        drift: (Math.random() - 0.5) * 0.5,
      }));

      function drawSnow() {
        ctx.clearRect(0, 0, width, height);
        for (let flake of snowflakes) {
          ctx.beginPath();
          ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
          ctx.fillStyle = snowColor;
          ctx.shadowColor = snowColor;
          ctx.shadowBlur = 6;
          ctx.fill();
        }
      }

      function updateSnow() {
        for (let flake of snowflakes) {
          flake.y += flake.d;
          flake.x += flake.drift;
          if (flake.y > height) {
            flake.y = -flake.r;
            flake.x = Math.random() * width;
          }
          if (flake.x > width || flake.x < 0) {
            flake.x = Math.random() * width;
          }
        }
      }

      let animId;
      function animate() {
        drawSnow();
        updateSnow();
        animId = requestAnimationFrame(animate);
      }
      animate();

      // Resize handler
      function handleResize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
      }
      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", handleResize);
      };
    }
    // Cleanup for non-canvas case
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className={styles.overlay}>
      <canvas
        id="snow-canvas"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/img/transparent-arvin-profile.png"
          alt="Loading…"
          className={styles.avatar}
        />
        <div className={styles.loadingText}>
          Loading<span className={styles.loadingDots}></span>
        </div>
      </div>
    </div>
  );
}
