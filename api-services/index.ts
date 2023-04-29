import { Hit } from "@/types/Hit";
import { Response } from "@/types/Response";
import axios from "axios";

const baseInstance = axios.create({
  baseURL: "https://hn.algolia.com/api/v1/",
});

export const getPopularPosts = (): Promise<Response<Hit>> => {
  return baseInstance.get("/search", {
    params: {
      tags: "front_page",
    },
  });
};
