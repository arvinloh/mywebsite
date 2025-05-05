import React, { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

export default function Preloader({ onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Show loader for 1s, then fade out 0.3s, then call onFinish
    const t1 = setTimeout(() => setVisible(false), 1000);
    const t2 = setTimeout(() => onFinish && onFinish(), 1300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className={styles.overlay}>
      <img
        src="/img/transparent-arvin-profile.png"
        alt="Loading…"
        className={styles.avatar}
      />
    </div>
  );
}
