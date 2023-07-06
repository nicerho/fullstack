import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function LoginComponent() {
  const [username, setUsername] = useState("ho");
  const [userpassword, setUserPassword] = useState("1234");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handleUserpasswordChange(event) {
    setUserPassword(event.target.value);
  }
  async function handleSubmit() {
    if(await authContext.login(username, userpassword)){
        navigate(`/welcome/${username}`)
    } else {
        setShowErrorMessage(true)
    }
}


    return (
      <div className="Login">
        {showErrorMessage && <div className="errorMessage">인증실패</div>}
        <div className="LoginForm">
          <div>
            <h1>로그인하세요</h1>
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
              <button type="button" name="login" onClick={handleSubmit}>
                login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

