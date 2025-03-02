export const onRenderBody = ({ setHtmlAttributes }) => {
  if (typeof window === "undefined") {
    setHtmlAttributes({ lang: "en" });
  } else {
    const theme = localStorage.getItem("theme") || "dark";
    setHtmlAttributes({ lang: "en", theme });
  }
  };
  