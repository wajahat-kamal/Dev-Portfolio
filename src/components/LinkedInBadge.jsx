import { useEffect } from "react";

const LinkedInBadge = () => {
  useEffect(() => {
    if (window.LI) {
      window.LI.ProfileBadge.init();
    }
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
    ></div>
  );
};

export default LinkedInBadge;
