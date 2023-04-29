import { useQuery } from "react-query";
import { getPopularPosts } from "@/api-services";
import Grid from "@/icons/Grid";
import List from "@/icons/List";
import Search from "@/icons/Search";
import { Hit } from "@/types/Hit";
import { Response } from "@/types/Response";
import Card from "@/components/Card";

const Home = () => {
  const { data: popularPosts } = useQuery({
    queryKey: ["popularPostsQuery"],
    queryFn: () => getPopularPosts(),
    select: (data: Response<Hit>) => data?.data.hits,
  });

  return (
    <div className="container mx-auto py-16 px-8">
      <h1 className="text-4xl md:text-6xl">Hacker News</h1>
      <div className="flex my-8 gap-8 align-middle">
        <div className="bg-slate-200 p-4 rounded-full">
          <Search height="16px" />
        </div>
        <div className="flex gap-4 items-center">
          <Grid height="24px" />
          <List height="27px" />
        </div>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
        {popularPosts?.map(
          (
            { title, author, created_at, num_comments, points, url, story_url },
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
