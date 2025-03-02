export const onRenderBody = ({ setHtmlAttributes }) => {
    const theme = typeof window !== "undefined" ? localStorage.getItem("theme") : "dark";
    setHtmlAttributes({ lang: "en", theme: theme || "dark"});
  };
  