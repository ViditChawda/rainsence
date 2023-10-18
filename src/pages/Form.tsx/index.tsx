import React from 'react'
import { IMwater } from '../../assets/images'
import Header from '../../components/Header'
import { useForm, Controller } from 'react-hook-form';

interface FormData {
    date: string;
    minTemperature: number;
    maxTemperature: number;
    rainfall: number;
    evaporation: number;
    sunshine: number;
    windGustSpeed: number;
    windSpeed9am: number;
    windSpeed3pm: number;
    humidity9am: number;
    humidity3pm: number;
    pressure9am: number;
    pressure3pm: number;
    temperature9am: number;
    temperature9pm: number;
    cloud9am: number;
    cloud3pm: number;
    location: string;
    windDirection9am: string;
}
const directionOptions = ['N', 'S', 'NW', 'NE', 'W', 'E', 'SW', 'SE'];

function Form() {
    const { handleSubmit, errors, register } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };
    return (
        <div className=" flex items-center relative h-[100vh] overflow-hidden bg-gray-300">
            <div className="object-cover h-[100%] absolute">
                <img src={IMwater} alt="" />
            </div>
            <div className="absolute top-0 z-100">
                <Header />
            </div>
            <div className='absolute h-full border right-0 w-[1005px] overflow-y-auto'>
                <h1 className='text-4xl mt-11 mb-[60px] text-center font-bold text-[#0E5666]'>Predictor</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex">
                        <div className="w-1/2 px-4">
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Date</label>
                                <input type="date" className="w-full h-[40px] px-4 mt-3 rounded-sm" {...register("date")} />
                            </div>
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Minimum Temperature</label>
                                <input type="number" className="w-full h-[40px] px-4 mt-3 rounded-sm" {...register("minTemperature")} />
                            </div>
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Maximum Temperature</label>
                                <input type="number" className="w-full h-[40px] px-4 mt-3 rounded-sm" {...register("maxTemperature")} />
                            </div>
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Rainfall</label>
                                <input type="number" className="w-full h-[40px] px-4 mt-3 rounded-sm" {...register("rainfall")} />
                            </div>
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Evaporation</label>
                                <input type="number" className="w-full h-[40px] px-4 mt-3 rounded-sm" {...register("evaporation")} />
                            </div>
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Sunshine</label>
                                <input type="number" className="w-full h-[40px] px-4 mt-3 rounded-sm" {...register("sunshine")} />
                            </div>
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Wind Gust Speed</label>
                                <input type="number" className="w-full h-[40px] px-4 mt-3 rounded-sm" {...register("windGustSpeed")} />
                            </div>
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Wind Speed 9am</label>
                                <input type="number" className="w-full h-[40px] px-4 mt-3 rounded-sm" {...register("windSpeed9am")} />
                            </div>
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Wind Speed 3pm</label>
                                <input type="number" className="w-full h-[40px] px-4 mt-3 rounded-sm" {...register("windSpeed3pm")} />
                            </div>
                        </div>

                        <div className="w-1/2 px-4">
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Humidity 9am</label>
                                <input type="number" className="w-full h-[40px] px-4 mt-3 rounded-sm" {...register("humidity9am")} />
                            </div>
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Humidity 3pm</label>
                                <input type="number" className="w-full h-[40px] px-4 mt-3 rounded-sm" {...register("humidity3pm")} />
                            </div>
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Pressure 9am</label>
                                <input type="number" className="w-full h-[40px] px-4 mt-3 rounded-sm" {...register("pressure9am")} />
                            </div>
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Pressure 3pm</label>
                                <input type="number" className="w-full h-[40px] px-4 mt-3 rounded-sm" {...register("pressure3pm")} />
                            </div>
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Temperature 9am</label>
                                <input type="number" className="w-full h-[40px] px-4 mt-3 rounded-sm" {...register("temperature9am")} />
                            </div>
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Temperature 9pm</label>
                                <input type="number" className="w-full h-[40px] px-4 mt-3 rounded-sm" {...register("temperature9pm")} />
                            </div>
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Cloud 9am</label>
                                <input type="number" className="w-full h-[40px] px-4 mt-3 rounded-sm" {...register("cloud9am")} />
                            </div>
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Cloud 3pm</label>
                                <input type="number" className="w-full h-[40px] px-4 mt-3 rounded-sm" {...register("cloud3pm")} />
                            </div>
                            <div className="form-group w-[100%]">
                                <label className='text-xl text-[#0E5666] mt-9'>Location</label>
                                <input type="text" className='w-full className= px-4"w-full h-[40px] mt-3 rounded-sm' {...register("location")} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group w-[47%] items-center ml-4">
                        <label className='text-xl text-[#0E5666] mt-9'>Wind Direction at 9am</label>
                        <select className='w-full className= px-4"w-full h-[40px] mt-3 rounded-sm' {...register("windDirection9am")}>
                            {directionOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='w-full mt-11 mb-11 h-[70px] flex items-center justify-center'>
                        <button className='border hover:shadow-2xl border-[#0E5666] bg-[#0E5666] px-11 py-2 rounded-lg text-white'>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form