// Premium dark theme. Single theme (no toggle) for a cohesive, recruiter-ready look.
export const darkTheme = {
  bg: "#0A0A0F",
  bgLight: "#12121C",
  // Brand accents
  primary: "#8B5CF6", // violet
  accent: "#22D3EE", // cyan
  gradient: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 45%, #22D3EE 100%)",
  gradientSoft:
    "linear-gradient(135deg, rgba(139,92,246,0.18) 0%, rgba(34,211,238,0.10) 100%)",
  // Text
  text_primary: "#F1F5F9",
  text_secondary: "#9AA3B2",
  // Surfaces
  card: "rgba(255, 255, 255, 0.035)",
  card_light: "rgba(255, 255, 255, 0.06)",
  border: "rgba(255, 255, 255, 0.08)",
  glass: "rgba(18, 18, 28, 0.55)",
  button: "#8B5CF6",
  white: "#FFFFFF",
  black: "#000000",
  shadow: "0 20px 50px -20px rgba(0, 0, 0, 0.7)",
};

// Kept for compatibility; the app renders a single premium dark theme.
export const lightTheme = darkTheme;
