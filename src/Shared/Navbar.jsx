import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navList = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " hover:bg-[#eb8d22ec] bg-[#eb8d22ec] border-0 border-b-4 hover:border-gray-600 border-gray-600 text-white font-semibold hover:scale-110 duration-400 transition-all py-2 px-5 rounded-md" : " hover:scale-110 transition-all font-bold text-[#eb8d22ec] mt-2 hover:bg-transparent hover:text-[#eb8d22ec] duration-400"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " hover:bg-[#eb8d22ec] bg-[#eb8d22ec] border-0 border-b-4 hover:border-gray-600 border-gray-600 text-white font-semibold hover:scale-110 duration-400 transition-all py-2 px-5 rounded-md" : " hover:scale-110 transition-all font-bold text-[#eb8d22ec] mt-2  hover:bg-transparent hover:text-[#eb8d22ec] duration-400"
            }
        >
            About
        </NavLink>
        { user ? <NavLink
            to="dashboard/taskDetails"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " hover:bg-[#eb8d22ec] bg-[#eb8d22ec] border-0 border-b-4 hover:border-gray-600 border-gray-600 text-white font-semibold hover:scale-110 duration-400 transition-all py-2 px-5 rounded-md" : " hover:scale-110 transition-all font-bold text-[#eb8d22ec] mt-2 hover:bg-transparent hover:text-[#eb8d22ec] duration-400"
            }
        >
            Task Dashboard
        </NavLink> 
        :
        ''
        }

    </>


    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Logged Out Successfully')
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="">
            <div className="navbar px-5 mx-auto fixed z-10 max-w-screen-2xl mb-10 top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <div className="flex items-center md:gap-96 lg:gap-36">
                        {/* Website Logo Here */}
                        <Link to={'/'}>
                            <img className="w-44" src="https://i.ibb.co/YPpX4Zw/1694337400-devtown-removebg-preview.png" alt="" />
                        </Link>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-12">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end hidden md:flex">
                    {
                        user?.email ? <div className="flex justify-center items-center gap-2 md:gap-10 lg:gap-5">
                            <h2 className="text-xl font-semibold text-[#eb8d22ec] hover:text-[#4f79c8] cursor-pointer">{user?.displayName}</h2>
                            <button onClick={handleLogout} className="hover:bg-[#b69e4aec] bg-[#edc843ec] border-0 border-b-4 hover:border-gray-600 border-gray-600 text-black font-semibold hover:scale-110 duration-400 transition-all py-2 px-5 rounded-md">Log Out</button>
                            <img className="w-16 h-16 rounded-full" src={user?.photoURL}></img>
                        </div>
                            :
                            <Link to={'/letsExplore'}>
                                <button className="hover:bg-[#b69e4aec] bg-[#edc843ec] border-0 border-b-4 hover:border-gray-600 border-gray-600 text-black font-semibold hover:scale-110 duration-400 transition-all py-2 px-5 rounded-md">Let’s Explore</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;