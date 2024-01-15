import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from 'react-infinite-scroll-component';


const getArticle = async ({ pageParams = {limit: 10, offset:0}}) => {
 console.log(pageParams, 'this is page params')
    try {
      const res = await fetch(`https://the-final-project-server-bt878edsc-maliksakin53gmailcom.vercel.app/articles?limit=${pageParams.limit}&offset=${pageParams.offset}`);
      const data = await res.json();
      console.log('Received data:', data);
      return { ...data, prevOffset: pageParams };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  





const AllArticles = () => {

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({

    queryKey: ["articles"],
    queryFn: getArticle,
    
      getNextPageParam: (lastPage, pages) => {
        const { totalCount } = lastPage;
        const currentTotal = pages.reduce((acc, page) => acc + page.articles.length, 0);
        return currentTotal >= totalCount ? false : { limit: 10, offset: currentTotal };
      },
    }
  );

  const articles = data?.pages.flatMap((page) => page.articles) || [];






  return (
    <div>
      <h3 className="text-3xl ml-14 font-serif font-bold mt-6"> total articles: {articles.length}</h3>
        <InfiniteScroll
        dataLength={articles ? articles.length : 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<div>Loading....</div>}
      >
       <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-10">
          {articles &&
            articles.map((article, idx) => (
              <div className="border-2 rounded-md" key={idx}>
                {article.title && <p className="text-2xl font-bold my-5 mx-5 font-serif">{article.title}</p>}
                {article.description && <p className="text-gray-400 text-sm mx-5 my-5 font-serif">{article.description}</p>}
                
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default AllArticles;