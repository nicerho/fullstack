import { Link, useParams } from "react-router-dom";
export default function WelcomeComponent() {
  const params = useParams();
  return (
    <div className="Welcome">
      <h1>하이여 {params.username}</h1>
      <div>
        your todos - <Link to="/todos">Go here</Link>
      </div>
    </div>
  );
}
