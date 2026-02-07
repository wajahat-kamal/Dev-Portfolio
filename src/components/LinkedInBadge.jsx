import { useEffect } from "react";

const LinkedInBadge = () => {
  useEffect(() => {
    // remove old script if exists
    const oldScript = document.getElementById("linkedin-badge-script");
    if (oldScript) oldScript.remove();

    // create new script
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    script.id = "linkedin-badge-script";

    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="medium"
      data-theme="light"
      data-type="VERTICAL"
      data-vanity="wajahat-kamal-118b01372"
      data-version="v1"
      style={{ minHeight: "250px" }}
    ></div>
  );
};

export default LinkedInBadge;
