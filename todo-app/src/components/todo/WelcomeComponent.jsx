import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import  retrieveHelloWorldPathVariable  from "./api/HelloWorldApiService";
import { useAuth } from "./security/AuthContext";

export default function WelcomeComponent() {
  const [message, setMessage] = useState(null);
  const params = useParams();
  const authContext = useAuth()
  function callHelloWorldApi() {
    console.log("called");

    // axios
    //   .get("http://localhost:8080/hello-world")
    //   .then((response) => successfulResponse(response))
    //   .catch((error) => errorResponse(error))
    //   .finally(() => console.log("cleanup"));
    retrieveHelloWorldPathVariable('ho',authContext.token)
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("cleanup"));
  }
  function successfulResponse(response) {
    console.log(response);
    setMessage(response.data.message);
  }
  function errorResponse(error) {
    console.log(error);
  }
  return (
    <div className="Welcome">
      <h1>하이여 {params.username}</h1>
      <div>
        your todos - <Link to="/todos">Go here</Link>
      </div>
      <div>
        <button className="btn btn-success m-5" onClick={callHelloWorldApi}>
          Call Hello World
        </button>
      </div>
      <div className="text-info">{message}</div>
    </div>
  );
}
