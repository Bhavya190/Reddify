"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch by only rendering after mounting
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '0.5rem', fontSize: '1.2rem' }}>
        <span role="img" aria-label="loading">⏱️</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '0.5rem',
        fontSize: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        color: 'var(--foreground)',
        transition: 'background 0.2s'
      }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <span role="img" aria-label="Sun">☀️</span>
      ) : (
        <span role="img" aria-label="Moon">🌙</span>
      )}
    </button>
  );
}
