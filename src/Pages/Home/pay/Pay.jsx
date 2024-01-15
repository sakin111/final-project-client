import './Pay.css'

const Pay = () => {
  const plans = [
    {
      id: 1,
      name: 'Free Plan',
      price: '$0/month',
      features: ['Limited articles', 'No premium content'],
    },
    {
      id: 2,
      name: '1 Month Plan',
      price: '$9.99/month',
      features: ['Unlimited articles', 'Access to premium content'],
    },
    {
      id: 3,
      name: '1 Year Plan',
      price: '$99.99/year',
      features: ['Unlimited articles', 'Access to premium content', 'Save 20% annually'],
    },
  ];

  return (
    <div className="flex justify-center items-center my-14 animate-border-run rounded-md">
      {plans.map(plan => (
        <div key={plan.id} className="max-w-md mx-4 bg-white shadow-lg rounded-lg overflow-hidden my-8 animate-border-box">
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
            <p className="text-gray-700 text-base mb-4">{plan.price}</p>
            <ul className="text-gray-600">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.707 4.293a1 1 0 0 0-1.414 0L8 12.586 4.707 9.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-6 pb-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Subscribe
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pay;
