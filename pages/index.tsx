import { useState } from "react";
import { useQuery } from "react-query";
import { getPopularPosts } from "@/api-services";
import Grid from "@/icons/Grid";
import List from "@/icons/List";
import { Hit } from "@/types/Hit";
import { Response } from "@/types/Response";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);

  const { data: popularPosts, isLoading } = useQuery({
    queryKey: ["popularPostsQuery", page],
    queryFn: () => getPopularPosts(page),
    select: (data) => data?.data,
  });

  const pageCount = popularPosts?.nbPages || 1;

  const handlePageChange = (newPage: number) => {
    if (newPage <= parseInt(String(pageCount)) - 1 && newPage >= 0) {
      setPage(newPage);
    }
  };

  return (
    <div className="container mx-auto py-16 px-8">
      <h1 className="text-4xl md:text-6xl">Hacker News</h1>
      <div className="flex justify-between items-center">
        <div className="flex my-8 gap-4 items-center">
          <SearchBar />
          <Grid height="24px" />
          <List height="27px" />
        </div>
        <Pagination
          currentPage={page}
          pageCount={pageCount}
          handlePageChange={handlePageChange}
        />
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading
          ? new Array(8).fill(
              <div className="animate-pulse">
                <div className="bg-slate-200 h-[300px] w-full rounded" />
              </div>
            )
          : popularPosts?.hits?.map(
              (
                {
                  title,
                  author,
                  created_at,
                  num_comments,
                  points,
                  url,
                  story_url,
                },
                index
              ) => (
                <Card
                  key={index}
                  title={title}
                  author={author}
                  date={created_at}
                  likes={points}
                  comments={num_comments}
                  url={url || story_url}
                />
              )
            )}
      </div>
    </div>
  );
};

export default Home;
