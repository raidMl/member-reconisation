import React, { useState } from "react";
import QRCode from "qrcode.react";

function SignIn() {
  const [register, setRegister] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    // Do login logic here...
    const username = event.target.username.value;
    setUserInfo(username);
    setRegister(true);
  }

  return (
    <div>
      {!register ? (
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
          <button type="submit">Sign in</button>
        </form>
      ) : (
        <div>
  
          <QRCode value={`https://example.com/users/${userInfo}`} />
        </div>
      )}
    </div>
  );
}

export default SignIn;