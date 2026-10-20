/* ==========================================================
   OdontoVita - Configuración de Tailwind (CDN)
   Debe cargarse DESPUÉS del script de Tailwind y ANTES del
   contenido de la página.
   ========================================================== */

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed": "#301400",
        "tertiary-container": "#743a00",
        "on-secondary": "#ffffff",
        "on-primary-fixed": "#001c38",
        "tertiary-fixed": "#ffdcc5",
        "tertiary-fixed-dim": "#ffb782",
        "outline": "#727781",
        "secondary-fixed": "#a4eeff",
        "surface-dim": "#c9dcf3",
        "on-tertiary-container": "#f9a666",
        "on-secondary-fixed": "#001f25",
        "inverse-primary": "#a2c9ff",
        "on-tertiary": "#ffffff",
        "on-primary": "#ffffff",
        "on-error-container": "#93000a",
        "secondary": "#006877",
        "on-surface-variant": "#424750",
        "inverse-on-surface": "#e8f2ff",
        "outline-variant": "#c2c6d1",
        "primary": "#003460",
        "surface-container-highest": "#d1e4fb",
        "surface": "#f7f9ff",
        "error": "#ba1a1a",
        "surface-bright": "#f7f9ff",
        "surface-container-low": "#edf4ff",
        "on-tertiary-fixed-variant": "#703800",
        "surface-container-lowest": "#ffffff",
        "error-container": "#ffdad6",
        "secondary-container": "#75e7fe",
        "surface-variant": "#d1e4fb",
        "on-error": "#ffffff",
        "secondary-fixed-dim": "#62d6ed",
        "on-surface": "#091d2e",
        "surface-container": "#e3efff",
        "primary-fixed-dim": "#a2c9ff",
        "background": "#f7f9ff",
        "on-background": "#091d2e",
        "on-secondary-fixed-variant": "#004e5a",
        "surface-container-high": "#d9eaff",
        "primary-fixed": "#d3e4ff",
        "surface-tint": "#2d6098",
        "primary-container": "#0e4b82",
        "on-primary-container": "#8dbcfa",
        "inverse-surface": "#203243",
        "tertiary": "#532700",
        "on-primary-fixed-variant": "#07487f",
        "on-secondary-container": "#006776"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "space-md": "1rem",
        "margin": "3rem",
        "space-sm": "0.5rem",
        "margin-tablet": "2rem",
        "space-lg": "1.5rem",
        "space-xs": "0.25rem",
        "space-xl": "2.5rem",
        "margin-mobile": "1.25rem",
        "gutter": "1.5rem",
        "gutter-mobile": "1rem"
      },
      fontFamily: {
        "label-sm": ["Plus Jakarta Sans"],
        "label-md": ["Plus Jakarta Sans"],
        "label-lg": ["Plus Jakarta Sans"],
        "headline-xl-mobile": ["Plus Jakarta Sans"],
        "display-lg": ["Plus Jakarta Sans"],
        "headline-md": ["Plus Jakarta Sans"],
        "headline-sm": ["Plus Jakarta Sans"],
        "body-md": ["Plus Jakarta Sans"],
        "body-sm": ["Plus Jakarta Sans"],
        "headline-xl": ["Plus Jakarta Sans"],
        "body-lg": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"],
        "display-lg-mobile": ["Plus Jakarta Sans"]
      },
      fontSize: {
        "label-sm": ["10px", { lineHeight: "14px", letterSpacing: "0.08em", fontWeight: "700" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "600" }],
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "600" }],
        "headline-xl-mobile": ["26px", { lineHeight: "34px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-md": ["22px", { lineHeight: "30px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-sm": ["18px", { lineHeight: "26px", fontWeight: "600" }],
        "body-md": ["14px", { lineHeight: "22px", fontWeight: "400" }],
        "body-sm": ["12px", { lineHeight: "18px", fontWeight: "400" }],
        "headline-xl": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "headline-lg": ["28px", { lineHeight: "36px", letterSpacing: "-0.015em", fontWeight: "700" }],
        "display-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "800" }]
      }
    }
  }
};
