import "./TodoApp.css";
import { useState } from "react";
export default function TodoApp() {
  return (
    <div className="TodoApp">
      <LoginComponent />
      {/* <WelcomeComponent /> */}
    </div>
  );
}
function LoginComponent() {
  const [username, setUsername] = useState("ho");
  const [userpassword, setUserPassword] = useState("1234");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handleUserpasswordChange(event) {
    setUserPassword(event.target.value);
  }
  function handelSubmit() {
    if (username === "ho" && userpassword === "1234") {
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
    } else {sdfsd
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
    }
  }
  function SuccessMessageComponent() {
    if (showSuccessMessage) {
      return <div className="successMessage">인증성공</div>;
    } else {
      return null;
    }
  }
  function ErrorMessageComponent() {
    if (showErrorMessage) {
      return <div className="errorMessage">인증실패</div>;
    } else {
      return null;
    }
  }
  return (
    <div className="Login">
      <SuccessMessageComponent />
      <ErrorMessageComponent />
      <div className="LoginForm">
        <div>
          <label>User Name : </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            name="password"
            value={userpassword}
            onChange={handleUserpasswordChange}
          />
          <div>
            <button type="button" name="login" onClick={handelSubmit}>
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent() {
  return <div className="Welcome">Welcome</div>;
}
