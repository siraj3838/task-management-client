import { useContext, useEffect, useState } from "react";
import useAxios from "../../Hook/useAxios";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaArrowRightLong } from "react-icons/fa6";

const TaskDetails = () => {
    const myAxios = useAxios();
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [ongoings, setOngoings] = useState([]);
    const [completes, setCompletes] = useState([]);
    useEffect(() => {
        myAxios.get('/allTask')
            .then(res => {
                const allTask = res?.data;
                const filterTask = allTask?.filter(task => task?.email == user?.email)
                setTasks(filterTask)
            })
    }, [myAxios, user?.email])
    // console.log(tasks);

    const goToOngoing = (item) => {
        const title = item?.title;
        const priority = item?.priority;
        const deadlines = item?.deadlines;
        const descriptions = item?.descriptions;
        const email = item?.email;
        const ongoingItem = { title, priority, deadlines, descriptions, email }
        myAxios.post('/ongoing', ongoingItem)
            .then(res => {
                if (res.data.insertedId) {
                    myAxios.delete(`/allTask/${item._id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                window.location.reload();
                            }
                        })

                }
            })
    }
    useEffect(() => {
        myAxios.get('/ongoing')
            .then(res => {
                const allTask = res?.data;
                const filterTask = allTask?.filter(task => task?.email == user?.email)
                setOngoings(filterTask);
            })
    }, [myAxios, user?.email])
    // console.log(ongoings);

    const goToComplete = (item) => {
        const title = item?.title;
        const priority = item?.priority;
        const deadlines = item?.deadlines;
        const descriptions = item?.descriptions;
        const email = item?.email;
        const ongoingItem = { title, priority, deadlines, descriptions, email }
        myAxios.post('/complete', ongoingItem)
            .then(res => {
                if (res.data.insertedId) {
                    myAxios.delete(`/ongoing/${item._id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                window.location.reload();
                            }
                        })

                }
            })
    }
    useEffect(() => {
        myAxios.get('/complete')
            .then(res => {
                const allTask = res?.data;
                const filterTask = allTask?.filter(task => task?.email == user?.email)
                setCompletes(filterTask);
            })
    }, [myAxios, user?.email])
    // console.log(ongoings);
    return (
        <div>
            {
                tasks.length ? <h1 className="text-5xl text-center font-semibold border-b-2 py-4">My All Task</h1>
                    :
                    <h1 className="text-5xl text-center font-semibold border-b-2 py-4">Please Add Some Task</h1>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="border-2 min-h-screen bg-slate-100">
                    <h3 className="text-2xl text-center font-semibold my-3">Task</h3>
                    <div className="my-5 px-5 grid gap-5">
                        {
                         tasks.length ?   tasks?.map(item => <div key={item._id} className="bg-base-300 p-4">
                                <div className="grid grid-cols-6 items-center my-3">
                                    <h2 className="text-lg text-center col-span-5 font-semibold my-1">{item?.title}</h2>
                                    <p onClick={() => goToOngoing(item)}><FaArrowRightLong></FaArrowRightLong></p>
                                </div>
                                <div className="flex justify-around">
                                    <h2 className="font-semibold my-1">{item?.priority}</h2>
                                    <h2 className="font-semibold my-1">{item?.deadlines}</h2>
                                </div>
                                <p>{item?.descriptions}</p>
                            </div>)
                            :
                            <h3 className="text-xl text-center font-semibold my-3">No Task</h3>
                        }
                    </div>
                </div>
                <div className="border-2 min-h-screen bg-amber-200">
                    <h3 className="text-2xl text-center font-semibold my-3">Ongoing</h3>
                    <div className="my-5 px-5 grid gap-5">
                        {
                          ongoings.length ?  ongoings?.map(item => <div key={item._id} className="bg-base-300 p-4">
                                <div className="grid grid-cols-6 items-center my-3">
                                    <h2 className="text-lg text-center col-span-5 font-semibold my-1">{item?.title}</h2>
                                    <p onClick={() => goToComplete(item)}><FaArrowRightLong></FaArrowRightLong></p>
                                </div>
                                <div className="flex justify-around">
                                    <h2 className="font-semibold my-1">{item?.priority}</h2>
                                    <h2 className="font-semibold my-1">{item?.deadlines}</h2>
                                </div>
                                <p>{item?.descriptions}</p>
                            </div>)
                            :
                            <h3 className="text-xl text-center font-semibold my-3">No Task</h3>
                        }
                    </div>
                </div>
                <div className="border-2 min-h-screen bg-green-300">
                    <h3 className="text-2xl text-center font-semibold my-3">Complete</h3>
                    <div className="my-5 px-5 grid gap-5">
                        {
                          completes.length ? completes?.map(item => <div key={item._id} className="bg-base-300 p-4">
                                <div className="flex justify-around items-center my-3 px-5">
                                    <h2 className="text-lg text-center font-semibold my-1">{item?.title}</h2>
                                    <p className="text-orange-600 font-semibold">Completed</p>
                                </div>
                                <div className="flex justify-around">
                                    <h2 className="font-semibold my-1">{item?.priority}</h2>
                                    <h2 className="font-semibold my-1">{item?.deadlines}</h2>
                                </div>
                                <p>{item?.descriptions}</p>
                            </div>)
                            :
                            <h3 className="text-xl text-center font-semibold my-3">No Task</h3>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;