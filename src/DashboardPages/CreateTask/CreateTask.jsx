import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxios from "../../Hook/useAxios";



const CreateTask = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user } = useContext(AuthContext)
    const myAxios = useAxios();


    const onSubmit = async (data) => {
        const newTask = {
            fullName: data.fullName,
            email: data.email,
            priority: data.priority,
            title: data.title,
            deadlines: data.deadlines,
            descriptions: data.descriptions,
            ongoing: true
            
        }
        myAxios.post('/allTask', newTask)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    toast.success('Task Create Successfully')
                    myAxios.post('/haveTasks', newTask)
                    .then(res => {
                        console.log(res);
                    })
                }
            })
    }
    return (
        <div className="">
            <Helmet>
                <title>Dev Town || Create Task</title>
            </Helmet>

            <div className="flex">
                <div className="w-3/5 mx-auto text-gray-400">
                    <h3 className="text-accent text-center text-3xl font-bold my-5">New Task Create</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className=" font-medium p-6 border shadow-2xl">

                        <div className="grid lg:grid-cols-2 gap-4">
                            <div className="form-control hidden">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-lg">Full Name</span>
                                </label>
                                <input type="text" {...register("fullName")} defaultValue={user?.displayName} readOnly className="input input-bordered bg-transparent border-2 border-base-300" />
                            </div>
                            <div className="form-control hidden">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-lg">Email</span>
                                </label>
                                <input type="email" {...register("email")} defaultValue={user?.email} readOnly className="input input-bordered bg-transparent border-2 border-base-300" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-lg">Priority</span>
                                </label>
                                <select defaultValue={'default'} {...register('priority', { required: true })}
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
                                <input type="text" {...register("title", { required: true })} placeholder=" Type Your title" className="input input-bordered bg-transparent border-2 border-base-300" />
                                {errors.title?.type === "required" &&
                                    <p className="text-red-600">Title is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-lg">Deadlines</span>
                                </label>
                                <input type="date" {...register("deadlines", { required: true })} placeholder=" Type Your Available Time in a week" className="input input-bordered bg-transparent border-2 border-base-300" />
                                {errors.deadlines?.type === "required" &&
                                    <p className="text-red-600">Deadlines is required</p>}
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-500 text-lg">Descriptions</span>
                            </label>
                            <textarea {...register("descriptions", { required: true })} id="" cols="" rows="6" className="w-full border-2 p-5" placeholder="Type Task Description"></textarea>
                            {errors.descriptions?.type === "required" &&
                                <p className="text-red-600">Descriptions is required</p>}
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="bg-[#2c6be0ec] hover:bg-[#245dc7] text-xl font-semibold hover:scale-110 duration-600 transition-all py-2 rounded-lg text-white">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;