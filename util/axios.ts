import axios from "axios";

const url =
  "https://hn.algolia.com/api/v1/search_by_date?tags=(story,author_pg)&page=";
// const url = "http://hn.algolia.com/api/v1/search_by_date?tags=(story)&page=";
// const url = "http://hn.algolia.com/api/v1/search?tags=front_page";
// const url = "http://hn.algolia.com/api/v1/search_by_date?tags=story";

export const getPosts = async (pageNumber: number) => {
  console.log("get axios");
  const { data } = await axios.get(`${url}${pageNumber}`);
  return data.hits;
};
