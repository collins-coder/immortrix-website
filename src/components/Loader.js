import React, { useEffect, useState } from "react";

function Loader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);

  }, []);

  if (!loading) return null;

  return (

    <div className="loader-wrapper">

      <div className="loader-content">

        <div className="loader-logo">
          I
        </div>

        <h2>IMMORTRIX</h2>

        <div className="loader-bar">

          <div className="loader-progress"></div>

        </div>

      </div>

    </div>
  );
}

export default Loader;