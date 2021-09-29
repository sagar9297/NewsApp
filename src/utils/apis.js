import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://hacker-news.firebaseio.com/v0",
});

export default apiClient;
