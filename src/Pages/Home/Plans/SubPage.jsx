import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AiOutlineCheck } from "react-icons/ai";





const SubPage = () => {

  const axiosPublic = useAxiosPublic()

  const [email, setEmail] = useState('')
  const [subscriptionPeriod, setSubscriptionPeriod] = useState('')
  const [sub, setSub] = useState([]);
  const handleSubscription = async () => {
    try {
      const response = await axios.post('https://the-final-project-server-bt878edsc-maliksakin53gmailcom.vercel.app/subscribe', {
        email,
        subscriptionPeriod,
      });
      console.log(response.data.data)
    } catch (error) {
      console.error('error subscription', error)
    }

  }


  useEffect(() => {
    // Assuming 'axios.get' fetches the data and sets it to 'sub'
    axiosPublic.get("/pre")
      .then(res => {
        console.log(res.data);
        setSub(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [axiosPublic]);


  return (
    <div>


      <div className="grid grid-cols-3 gap-5 mb-6">
        {sub.map((item, index) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={index}>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>${item.price}/{item.duration}</p>
              <ul>
                {item.info && item.info.features && item.info.features.length > 0 ? (
                  item.info.features.map((feature, idx) => (
             
                    <li key={idx} className="flex justify-start items-center gap-3 text-gray-400">  <AiOutlineCheck />{feature}</li>
                
                  ))
                ) : (
                  <li>No features available</li>
                )}
              </ul>
            </div>
          </div>

        ))}
      </div>

      <div className="mx-auto max-w-md p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Subscription Page</h1>

        <input
          type="email"
          placeholder="Enter username"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border-gray-300 mb-4 p-2"
        />
        <select
          value={subscriptionPeriod}
          onChange={(e) => setSubscriptionPeriod(e.target.value)}
          className="w-full rounded-md border-gray-300 mb-4 p-2"
        >
          <option value="">Select subscription period</option>
          <option value="1min">1 minute</option>
          <option value="5days">5 days</option>
          <option value="10days">10 days</option>
        </select>
        <button
          onClick={handleSubscription}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubPage;