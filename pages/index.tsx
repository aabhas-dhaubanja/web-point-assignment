import { useState } from "react";
import { useQuery } from "react-query";
import { getPopularPosts } from "@/api-services";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);

  const { data: popularPosts, isLoading } = useQuery({
    queryKey: ["popularPostsQuery", page, searchQuery],
    queryFn: () => getPopularPosts(page, searchQuery),
    select: (data) => data?.data,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const pageCount = popularPosts?.nbPages || 1;

  const handlePageChange = (newPage: number) => {
    if (newPage <= parseInt(String(pageCount)) - 1 && newPage >= 0) {
      setPage(newPage);
    }
  };

  const handleSearchQuery = (newQuery: string) => {
    if (page !== 0) setPage(0);
    setSearchQuery(newQuery);
  };

  return (
    <div className="container mx-auto py-16 px-8">
      <h1 className="text-4xl md:text-6xl">Hacker News</h1>
      <div className="flex flex-col md:flex-row gap-4 my-8 md:justify-between md:items-center">
        <SearchBar handleSearchQuery={handleSearchQuery} />
        <div className="flex">
          <Pagination
            currentPage={page}
            pageCount={pageCount}
            handlePageChange={handlePageChange}
          />
        </div>
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
