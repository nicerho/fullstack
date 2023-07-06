import { apiClient } from "./ApiClient";

export default function retrieveHelloWorldPathVariable(username, token) {
  return apiClient.get(`/hello-world/path-variable/${username}`, {});
}
