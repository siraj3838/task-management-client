import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAxios from "../../Hook/useAxios";
import toast from "react-hot-toast";

const Edit = () => {
    const { user } = useContext(AuthContext)
    const myAxios = useAxios();
    const [currentTask, setCurrentTask] = useState({}); 
    const {id} = useParams();
    // console.log(id);
    useEffect(() => {
        myAxios.get('/haveTasks')
            .then(res => {
                const allTask = res?.data;
                const filterTask = allTask?.find(task => task?.email == user?.email && task._id == id)
                setCurrentTask(filterTask);
                
            })
    }, [myAxios, user?.email, id])
    // console.log(currentTask);

    const { register, handleSubmit, formState: { errors }} = useForm()
    const onSubmit = async (data) => {
        const editTask = {
            priority: data.priority,
            title: data.title,
            deadlines: data.deadlines,
            descriptions: data.descriptions,
            
        }
        // console.log(editTask);
        myAxios.put(`/haveTasks/${currentTask._id}`, editTask)
        .then(res => {
            if(res.data.modifiedCount > 0){
                toast.success('Task Edit Successfully')
            }
        })
    }
    return (
        <div className="">
            <Helmet>
                <title>Dev Town || Edit Task</title>
            </Helmet>

            <div className="flex">
                <div className="w-3/5 mx-auto text-gray-400" data-aos="flip-left" data-aos-duration="2400">
                    <h3 className="text-accent text-center text-3xl font-bold my-5">Edit You Task</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className=" font-medium p-6 border shadow-2xl">

                        <div className="grid lg:grid-cols-2 gap-4">
                            
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-lg">Priority</span>
                                </label>
                                <select defaultValue={'default'} {...register('priority')}
                                    className="select select-bordered w-full">
                                    <option disabled value={'default'}>Select a Priority</option>
                                    <option value="low">Low</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-lg">Title</span>
                                </label>
                                <input type="text" {...register("title", { required: true })} defaultValue={currentTask?.title} className="input input-bordered bg-transparent border-2 border-base-300" />
                                {errors.title?.type === "required" &&
                                    <p className="text-red-600">Title is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-lg">Deadlines</span>
                                </label>
                                <input type="date" {...register("deadlines", { required: true })} defaultValue={currentTask?.deadlines} className="input input-bordered bg-transparent border-2 border-base-300" />
                                {errors.deadlines?.type === "required" &&
                                    <p className="text-red-600">Deadlines is required</p>}
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-500 text-lg">Descriptions</span>
                            </label>
                            <textarea {...register("descriptions", { required: true })} id="" cols="" rows="6" className="w-full border-2 p-5" defaultValue={currentTask?.descriptions}></textarea>
                            {errors.descriptions?.type === "required" &&
                                <p className="text-red-600">Descriptions is required</p>}
                           
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="bg-[#2c6be0ec] hover:bg-[#245dc7] text-xl font-semibold hover:scale-110 duration-600 transition-all py-2 rounded-lg text-white">Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;