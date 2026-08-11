import "./globals.css";

export const metadata = {
  title: "Jeet Dash | Cloud Engineer",
  description:
    "Cloud Engineer portfolio for Jeet Dash, focused on Microsoft Azure, Microsoft 365, hybrid infrastructure, identity, and cloud operations.",
  openGraph: {
    title: "Jeet Dash | Cloud Engineer",
    description:
      "Azure, Microsoft 365, hybrid infrastructure, identity, and cloud operations.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
