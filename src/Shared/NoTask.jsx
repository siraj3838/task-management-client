import { Link } from "react-router-dom";

const NoTask = () => {
    return (
        <div className="border-2 p-10 lg:absolute lg:top-40 lg:left-[800px] shadow-xl">
            <h2 className="text-center text-xl font-medium">No Task Here</h2>
            <h3 className="text-center text-2xl font-medium">Please Add Task</h3>
            <div className="flex justify-center mt-5">
                <Link to={'/dashboard/createTask'}>
                    <button className="hover:bg-[#b69e4aec] bg-[#edc843ec] border-0 border-b-4 hover:border-gray-600 border-gray-600 text-black font-semibold hover:scale-110 duration-400 transition-all py-1.5 px-5 rounded-md">Create Task</button>
                </Link>
            </div>
        </div>
    );
};

export default NoTask;