
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Box, Divider, createTheme } from '@mui/material';





const SmallSite = () => {
    const [trend, setTrend] = useState([]);



    useEffect(() => {
        fetchTrendingArticles();
    }, []);

    const fetchTrendingArticles = async () => {
        try {
            const response = await axios.get('http://localhost:5000/trend');
            setTrend(response.data);
        } catch (error) {
            console.error('Error fetching trending articles:', error);
        }
    };


  const theme = createTheme({
    typography: {
        fontFamily: 'serif',
        fontWeightBold:'bolder'
    },
  });

    return (


        <div className='grid grid-rows-1 gap-4'>
            {
                trend.map(item => (
                    <Box key={item._id}>
                        <Card sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant='h5' marginBottom={2} theme={theme}>
                                        {item.title}
                                    </Typography>

                                    <Typography variant='body2' className='w-full text-gray-400'>
                                        {item.description.length > 100 ?
                                            item.description.slice(0, 100) + "..." :
                                            item.description
                                        }
                                    </Typography>

                                    <Divider variant="middle" />


                                    <Box className="flex justify-start items-center gap-3 bg-[#F3F3F3] p-2 rounded-md" marginTop={2}>

                                        <Avatar alt="avater" src={item.author_image} />
                                        <Box>
                                            <Typography variant='body2' className='w-full text-gray-400'>
                                                {item.author_name}
                                            </Typography>


                                            <Typography variant='body2' className='w-full text-gray-400'>
                                                {item.published_at}
                                            </Typography>

                                        </Box>
                                    </Box>
                                </CardContent>

                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image={item.image_url}
                                alt="image"
                            />
                        </Card>


                    </Box>
                ))
            }

        </div>







    );
};

export default SmallSite;