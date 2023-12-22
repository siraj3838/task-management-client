import { useContext} from "react";
import useAxios from "../../Hook/useAxios";
import { AuthContext } from "../../Providers/AuthProvider";
import { IoClose } from "react-icons/io5";
import { HiPencilAlt } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const TaskManagement = () => {
    const myAxios = useAxios();
    const { user } = useContext(AuthContext);

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['haveTasks', user?.email],
        queryFn: async () => {
            const res = await myAxios.get('/haveTasks')
            const filterTask = res?.data?.filter(task => task?.email == user?.email)
            return filterTask;
        }
    })


    const deleteTask = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Delete this Task!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                myAxios.delete(`/haveTasks/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "This Task has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })

            }
        });
    }
    return (
        <div>
            <h3 className="text-2xl text-center font-semibold my-3">Task Manage</h3>
            <div className="my-5 px-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {
                    tasks?.map(item => <div key={item._id} className="bg-base-300 px-4 pb-4">
                        <div className="flex justify-between items-center my-3">
                            <h2 className="text-lg text-center font-semibold my-1">{item?.title}</h2>
                            <p onClick={()=>deleteTask(item._id)} className="text-2xl"><IoClose></IoClose></p>
                        </div>
                        <div className="flex justify-between">
                            <h2 className="font-semibold my-1">{item?.priority}</h2>
                            <h2 className="font-semibold my-1">{item?.deadlines}</h2>
                        </div>
                        <p>{item?.descriptions}</p>
                        <div className="flex justify-end">
                            <Link to={`/dashboard/edit/${item._id}`}>
                                <p className="text-xl"><HiPencilAlt></HiPencilAlt></p>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TaskManagement;