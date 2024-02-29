// CookieCheck.js

import React, { useState, useEffect } from "react";

function CookieCheck({username}) {
  const [cookiesEnabled, setCookiesEnabled] = useState(null);
  const [testCookieValue, setTestCookieValue] = useState(null);

  useEffect(() => {
    // Function to check if cookies are enabled
    function areCookiesEnabled() {
      // Set a test cookie
      document.cookie = "testCookie={username}; path=/";

      // Check if the test cookie exists
      const cookieExists = document.cookie.indexOf("testCookie") !== -1;

      // If the test cookie exists, return true (cookies are enabled); otherwise, return false
      return cookieExists;
    }

    // Check if cookies are enabled when the component mounts
    setCookiesEnabled(areCookiesEnabled());

    // Extract and set the value of the test cookie
    const cookieArray = document.cookie.split(";").map((cookie) => cookie.trim().split("="));
    const testCookie = cookieArray.find(([name]) => name === "testCookie");
    if (testCookie) {
      setTestCookieValue(testCookie[1]);
    }
  }, []);

  return (
    <div>
      {cookiesEnabled === null ? (
        <p>Checking if cookies are enabled...</p>
      ) : cookiesEnabled ? (
        <div>
          <p>Cookies are enabled</p>
          {testCookieValue && <p>Test cookie value: {testCookieValue}</p>}
        </div>
      ) : (
        <p>Cookies are not enabled</p>
      )}
    </div>
  );
}

export default CookieCheck;
