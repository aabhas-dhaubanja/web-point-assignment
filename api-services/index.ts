import { Hit } from "@/types/Hit";
import { Response } from "@/types/Response";
import { Sort } from "@/types/Sort";
import axios from "axios";

const baseInstance = axios.create({
  baseURL: "https://hn.algolia.com/api/v1/",
});

export const getPosts = (
  page?: number,
  query?: string,
  sort?: Sort
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

  return baseInstance.get(sort === "popular" ? "/search" : "/search_by_date", {
    params,
  });
};
