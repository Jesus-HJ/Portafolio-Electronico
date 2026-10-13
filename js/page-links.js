const pageLinks = {
  "#sobre-mi": "sobre-mi.html",
  "#proyectos": "proyectos.html",
  "#contacto": "sobre-mi.html#contacto",
};

if (location.pathname.endsWith("index.html") || location.pathname.endsWith("/")) {
  document.querySelectorAll("a[href]").forEach((link) => {
    const destination = pageLinks[link.getAttribute("href")];
    if (destination) link.setAttribute("href", destination);
  });
}

const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav a").forEach((link) => {
  const href = link.getAttribute("href") || "";
  const cleanHref = href.split("#")[0];
  const isHome = currentPage === "index.html" && (href === "#inicio" || cleanHref === "");
  const isCurrentPage = cleanHref === currentPage;

  if (isHome || isCurrentPage || link.hasAttribute("aria-current")) {
    link.classList.add("active");
  }
});
