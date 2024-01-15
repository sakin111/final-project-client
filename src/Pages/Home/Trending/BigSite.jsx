

import { useEffect, useState } from "react";
import axios from 'axios';



const BigSite = () => {

    const [trend, setTrend] = useState([]);
  
  
    useEffect(() => {
      fetchTrendingArticles();
    }, []);
  
    const fetchTrendingArticles = async () => {
      try {
        const response = await axios.get('https://the-final-project-server-bt878edsc-maliksakin53gmailcom.vercel.app/trend');
        setTrend(response.data);
      } catch (error) {
        console.error('Error fetching trending articles:', error);
      }
    };
  


    return (
        <div className="grid grid-cols-2 gap-6">
        {trend.map(item => (
          <div key={item._id}>
            <div className="card w-full bg-base-100 border-b-2 rounded-none">
              <figure className="px-10 pt-10">
                <img src={item.image_url} alt="Shoes" className="h-52 w-full rounded-sm" />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="text-2xl font-serif font-bold my-2 mx-3 ">{item.title}</h3>
                <p className="text-gray-400 font-serif text-sm my-2 mx-3 ">{item.description.length > 200?
                   item.description.slice(0,200) + '...' :
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

export default BigSite;