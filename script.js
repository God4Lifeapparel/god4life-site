(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById("customForm");
  const msg = document.getElementById("formMsg");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const name = (data.get("name") || "").toString().trim();
    const contact = (data.get("contact") || "").toString().trim();
    const details = (data.get("details") || "").toString().trim();

    const subject = encodeURIComponent("God4Life Custom Design Request");
    const body = encodeURIComponent(
      `Name: ${name}\nContact: ${contact}\n\nCustom Request:\n${details}\n\nSent from the God4Life website.`
    );

    const mailto = `mailto:god4lifeapparel7@gmail.com?subject=${subject}&body=${body}`;
    window.location = mailto;

    if (msg) msg.textContent = "Email draft opened. Send it and you’re good.";
  });
})();

