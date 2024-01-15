// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import useAuth from "../../Hooks/useAuth";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useCategory from "../../Hooks/useCategory";



const PremiumArticles = () => {

const [news] = useCategory()

const cards = news.filter(item =>item.category === 'premium')

//      const  AxiosPublic = useAxiosPublic()
//     // const axiosSecure = useAxiosSecure()
//     const { user } = useAuth();
            
// const {data : premium, isLoading, isError} = useQuery({
//     queryKey:[user?.email,'premium'],
//     queryFn: async() =>{
//        try{
//         const response= await AxiosPublic.get('/add')
//         return response.data
//        }catch(error){
//         console.log(error,'fetching data')
//        }
//     }
// })



    return (
     

 <div className="sm:grid grid-cols-1 lg:grid-cols-3 mt-9 border-2 border-gray-500 rounded-lg">
            
 {cards.map((article, index) => (
 <div key={index} className="mt-6">

<div className="card w-96 bg-base-100 rounded-none mx-auto">
<figure><img src={article.image} alt="Shoes" className="rounded-md"/></figure>
<div className="card-body">
  <h2 className="card-title">
  {article.title && <p className="text-2xl font-bold my-2 mx-3 font-serif">{article.title}</p>}
  </h2>
 <p className="text-gray-400 text-sm mx-3 my-2 font-serif">
  {article.description.length > 200?
 article.description.slice(0,200) + '...': article.description}
 </p>
</div>
</div>
 </div>
   
 ))}
 </div>
    );
  };
   


export default PremiumArticles;










