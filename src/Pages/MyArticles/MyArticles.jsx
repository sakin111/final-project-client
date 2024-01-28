import axios from "axios";
import { useEffect, useState } from "react";


const MyArticles = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        articleMy()
    }, [])

    const articleMy = async () => {
        const response = await axios.get('https://the-final-project-server-bt878edsc-maliksakin53gmailcom.vercel.app/add');
        setData(response.data)
    }



    return (
        <div>
            {
                data.map(item => <div key={item._id}>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p>{item.description}</p>
                            <p className="text-gray-400">{item.tags}</p>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default MyArticles;