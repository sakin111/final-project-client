import Swal from 'sweetalert2';
import { useState } from 'react';
import Select from 'react-select'
import axios from 'axios';










const AddArticles = () => {


    const [selectedOption, setSelectedOption] = useState('');
    const [selectedtag, setSelectedTag] = useState([])

    const handleTagChange = (selectOpt) => {
        setSelectedTag(selectOpt)
    }

   

    const handleAddBrand = async (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const image = form.image.files[0];
        const tags = selectedtag.map(tag => tag.value)
        const publisher = form.publisher.value;
        const description = form.description.value;
        const category = form.category.value
        const newBrand = { title, tags, publisher, description,category };
        console.log(newBrand);

        try {
            const formData = new FormData();
            formData.append('image', image);

            const imgBBResponse = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Img_BB_Key}`, formData);

            if (imgBBResponse.data && imgBBResponse.data.data && imgBBResponse.data.data.url) {
                const imageUrl = imgBBResponse.data.data.url;
                console.log('Image URL:', imageUrl);
                newBrand.image = imageUrl;

                const addResponse = await fetch('https://the-final-project-server-bt878edsc-maliksakin53gmailcom.vercel.app/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newBrand)
                });

                const data = await addResponse.json();
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'successfully published',
                        icon: 'success',
                        confirmButtonText: 'okay'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            form.reset();
                        }
                    });
                   
                }
            } else {
                alert('Failed to upload image.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while processing the form.');
        }
    };




    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    }





    const options = [
        { value: 'Politics', label: 'Politics' },
        { value: 'Government', label: 'Government' },
        { value: 'Policy', label: 'Policy' },
        { value: 'Political Analysis', label: 'Political Analysis' },
        { value: 'World Affairs', label: 'World Affairs' },
        { value: 'International Relations', label: 'International Relations' },
        { value: 'Global News', label: 'Global News' },
        { value: 'Geopolitics', label: 'Geopolitics' },
        { value: 'International Conflicts', label: 'International Conflicts' },
        { value: 'Business News', label: 'Business News' },
        { value: 'Finance', label: 'Finance' },
        { value: 'Economy', label: 'Economy' },
        { value: 'Market Analysis', label: 'Market Analysis' },
        { value: 'Entrepreneurship', label: 'Entrepreneurship' },
        { value: 'Technology', label: 'Technology' },
        { value: 'Tech News', label: 'Tech News' },
        { value: 'Innovation', label: 'Innovation' },
        { value: 'Gadgets', label: 'Gadgets' },
        { value: 'Artificial Intelligence', label: 'Artificial Intelligence' },
        { value: 'Science', label: 'Science' },
        { value: 'Research', label: 'Research' },
        { value: 'Discoveries', label: 'Discoveries' },
        { value: 'Space Exploration', label: 'Space Exploration' },
        { value: 'Health Science', label: 'Health Science' },
        { value: 'Health', label: 'Health' },
        { value: 'Wellness', label: 'Wellness' },
        { value: 'Medical Research', label: 'Medical Research' },
        { value: 'Healthcare', label: 'Healthcare' },
        { value: 'Public Health', label: 'Public Health' },
        { value: 'Entertainment', label: 'Entertainment' },
        { value: 'Celebrities', label: 'Celebrities' },
        { value: 'Movies', label: 'Movies' },
        { value: 'Music', label: 'Music' },
        { value: 'TV Shows', label: 'TV Shows' },
        { value: 'Sports', label: 'Sports' },
        { value: 'Athletics', label: 'Athletics' },
        { value: 'Team Sports', label: 'Team Sports' },
        { value: 'Individual Sports', label: 'Individual Sports' },
        { value: 'Sporting Events', label: 'Sporting Events' },
        { value: 'Environment', label: 'Environment' },
        { value: 'Climate Change', label: 'Climate Change' },
        { value: 'Sustainability', label: 'Sustainability' },
        { value: 'Nature', label: 'Nature' },
        { value: 'Environmental Policies', label: 'Environmental Policies' },
        { value: 'Education', label: 'Education' },
        { value: 'Learning', label: 'Learning' },
        { value: 'Schools', label: 'Schools' },
        { value: 'Higher Education', label: 'Higher Education' },
        { value: 'Educational Policy', label: 'Educational Policy' },
        { value: 'Agriculture', label: 'Agriculture' }

    ];


    const modifiedOptions = options.map(option => ({
        ...option,
        value: `#${option.value}`
      }));



    //   <div className="bg-gray-200 bg-opacity-10 backdrop-blur-lg h-full p-6 rounded-md px-20 absolute -translate-y-full translate-x-1/2 w-1/2" >


    return (
        <div>
        
                {/* <div className="w-full h-[800px] my-5 bg-slate-950 " /> */}
         
            <div className=" bg-slate-950  h-full p-6 rounded-md px-20 " >
                <h3 className="text-3xl font-bold text-center font-custom font-Noticia text-white ">Publish Your News</h3>
                <form onSubmit={handleAddBrand} className="mt-11">
                    <div className=" flex mb-8">

                        <div className="form-control md: w-1/2">
                            <label className="label">
                                <span className="label-text font-custom font-Noticia  font-bold text-white">title</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="title" placeholder="title" className="input input-bordered w-full font-custom  font-Noticia  " />
                            </label>
                        </div>


                        <div className="form-control md: w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text font-custom  font-Noticia font-bold text-white">upload image</span>
                            </label>
                            <label className="input-group">
                                <input type="file" className="file-input file-input-bordered w-full max-w-xs" placeholder='image' name='image' />
                            </label>
                        </div>
                    </div>







                    <div className=" flex justify-between items-center gap-4 mb-8">

                        <div className="form-control md: w-1/2">
                            <label className="label">
                                <span className="label-text font-custom  font-Noticia font-bold text-white">tags</span>
                            </label>
                            <label className="input-group" >
                                <Select name='tags'
                                    options={modifiedOptions}
                                    isMulti
                                    value={selectedtag}
                                    onChange={handleTagChange}

                                />
                            </label>
                        </div>





                        <div className="form-control md: w-1/2">
                            <label className="label">
                                <span className="label-text font-custom font-Noticia font-bold text-white">publisher</span>
                            </label>
                            <label className="input-group" >
                                <select
                                    id="dropdown"
                                    name="publisher"
                                    value={selectedOption}
                                    onChange={handleSelectChange}
                                    className="input input-bordered w-full font-custom  font-Noticia "
                                >

                                    <option value="Insight Press">Insight Press</option>
                                    <option value="Apex Chronicle">Apex Chronicle</option>
                                    <option value="Luminary Gazette">Luminary Gazette</option>
                                    <option value="Horizon Herald">Horizon Herald</option>
                                    <option value="Quantum News Network">Quantum News Network</option>
                                    <option value="Stellar Times">Stellar Times</option>
                                    <option value="Eminent Express">Eminent Express</option>
                                    <option value="Nexus Post">Nexus Post</option>
                                    <option value="Spectrum Sentinel">Spectrum Sentinel</option>
                                    <option value="Visionary Voice">Visionary Voice</option>
                                    <option value="Prime Pulse">Prime Pulse</option>
                                    <option value="Radiant Recorder">Radiant Recorder</option>
                                    <option value="Epoch Echo">Epoch Echo</option>
                                    <option value="Momentum Monitor">Momentum Monitor</option>
                                    <option value="Fusion Gazette">Fusion Gazette</option>
                                    <option value="Infinite Insight">Infinite Insight</option>
                                    <option value="Vanguard Viewpoint">Vanguard Viewpoint</option>
                                    <option value="Synergy Sentinel">Synergy Sentinel</option>
                                    <option value="Genesis Gazette">Genesis Gazette</option>
                                    <option value="Evolve Express">Evolve Express</option>


                                </select>
                            </label>
                        </div>
                    </div>





                    <div className="form-control md: w-full  mb-9">
                        <label className="label">
                            <span className="label-text font-custom text-white font-Noticia font-bold">category</span>
                        </label>
                        <label className="input-group">
                            <select name="category" id="category"  className='input input-bordered w-full font-custom  font-Noticia '>
                            <option value="trending">trending</option>
                            <option value="premium">premium</option>
                            <option value="breaking">breaking</option>
                            <option value="normal">normal</option>
                            </select>
                        </label>
                    </div>





                    <div className="form-control md: w-full  mb-9">
                        <label className="label">
                            <span className="label-text font-custom  font-Noticia font-bold text-white">description </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="description" className="input input-bordered w-full font-custom rancho" />
                        </label>
                    </div>





                    <input type="submit" value="Submit" className="btn btn-block btn-neutral font-custom  font-Noticia " />
                </form>
            </div>

        </div>
    );
};

export default AddArticles;