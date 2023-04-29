import { Hit } from "@/types/Hit";
import { Response } from "@/types/Response";
import axios from "axios";

const baseInstance = axios.create({
  baseURL: "https://hn.algolia.com/api/v1/",
});

export const getPopularPosts = (
  page?: number,
  query?: string
): Promise<Response<Hit>> => {
  const params: any = {
    tags: "front_page",
  };

  if (query) {
    params.query = query;
  }
  if (page) {
    params.page = page;
  }

  return baseInstance.get("/search", {
    params,
  });
};
