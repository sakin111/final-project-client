import axios from "axios";
import { useEffect, useState } from "react";


const First = () => {
    const [trend, setTrend] = useState([]);

    useEffect(() => {
        fetchTrendingArticles();
      }, []);
    
      const fetchTrendingArticles = async () => {
        try {
          const response = await axios.get('https://the-final-project-server-bt878edsc-maliksakin53gmailcom.vercel.app/first');
          setTrend(response.data);
        } catch (error) {
          console.error('Error fetching trending articles:', error);
        }
      };




    return (
        <div className="mb-4">
              {trend.map(item => (
          <div key={item._id}>
            <div className="card w-full bg-base-100 border-b-2 rounded-none">
              <figure className="px-10 pt-10">
                <img src={item.image_url} alt="Shoes" className="h-72 w-2/3 rounded-md" />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="text-2xl font-serif font-bold">{item.title}</h3>
                <p className="text-gray-400">{
                    item.description.length > 200? 
                    item.description.slice(0,200) + "..." :
                    item.description
                    }</p>
                <div className="card-actions">
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
    );
};

export default First;