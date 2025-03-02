import "./src/styles/global.scss";

export const onRenderBody = ({ setHtmlAttributes }) => {
    const theme = typeof window !== "undefined" ? localStorage.getItem("theme") : "dark";
    setHtmlAttributes({ className: theme || "dark" });
  };