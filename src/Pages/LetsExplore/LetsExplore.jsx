// import { Helmet } from "react-helmet-async";
// // import GoogleLogin from "../../Shared/GoogleLogin";
// import { useForm } from "react-hook-form";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
// import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import Headline from "../../Shared/Headline";

// const LetsExplore = () => {
//     const { register, handleSubmit, reset, formState: { errors } } = useForm()
//     const { loggedInUser } = useContext(AuthContext)
//     const navigate = useNavigate();
//     const [passwordError, setPasswordError] = useState('');
    

//     const onSubmit = (data) => {
//         console.log(data)
//         // reset();
//         setPasswordError('');
//         loggedInUser(data.email, data.password)
//             .then(res => {
//                 console.log(res.user);
//                 toast.success('Register Successfully')
                
//                 navigate(location?.state ? location.state : '/');
//                 reset();
//             })
//             .catch(err => {
//                 console.log(err);
//                 setPasswordError(err.message)
//             })
//     }
//     return (
//         <div>
//             <Helmet>
//                 <title>MGI | Login</title>
//             </Helmet>
//             <div className="my-10">

//                 <Headline headline={'Login Here'}></Headline>
//                 <div data-aos="flip-left"
//                     data-aos-easing="ease-out-cubic"
//                     data-aos-duration="2000" className="max-w-lg mx-auto px-10 py-4 bg-[#FFE4DE] ">
//                     <form onSubmit={handleSubmit(onSubmit)} className="text-[#17007D] font-medium">

//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email" className="input input-bordered" />
//                             {errors.email && <span className="text-red-600">Email is required</span>}
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type="password" {...register("password", {
//                                 required: true,
//                                 minLength: 6,
//                                 pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
//                             })} placeholder=" Enter Correct password" className="input input-bordered" />
//                             {errors.password?.type === "required" &&
//                                 <p className="text-red-600">Password is required</p>}
//                             {errors.password?.type === "minLength" &&
//                                 <p className="text-red-600">Password minimum 6 characters</p>}
//                             {errors.password?.type === "pattern" &&
//                                 <p className="text-red-600">Password must have one uppercase case and one number and spacial characters</p>}
//                             {
//                                 passwordError && <p className="text-red-800 text-lg font-medium text-center">{passwordError}</p>
//                             }

//                         </div>
//                         <div className="inline-flex items-center">
//                             <label
//                                 className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
//                                 htmlFor="checkbox"
//                                 data-ripple-dark="true"
//                             >
//                                 <input
//                                     type="checkbox"
//                                     className="bg-red-600 behtmlFore:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all behtmlFore:absolute behtmlFore:top-2/4 behtmlFore:left-2/4 behtmlFore:block behtmlFore:h-12 behtmlFore:w-12 behtmlFore:-translate-y-2/4 behtmlFore:-translate-x-2/4 behtmlFore:rounded-full behtmlFore:bg-blue-gray-500 behtmlFore:opacity-0 behtmlFore:transition-opacity checked:border-green-500 checked:bg-green-500 checked:behtmlFore:bg-pink-500 hover:behtmlFore:opacity-10"
//                                     id="checkbox"
//                                 />
//                                 <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="h-3.5 w-3.5"
//                                         viewBox="0 0 20 20"
//                                         fill="currentColor"
//                                         stroke="currentColor"
//                                         strokeWidth="1"
//                                     >
//                                         <path
//                                             fillRule="evenodd"
//                                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                                             clipRule="evenodd"
//                                         ></path>
//                                     </svg>
//                                 </span>
//                             </label>
//                             <label
//                                 className="mt-px cursor-pointer select-none font-light text-gray-700"
//                                 htmlFor="checkbox"
//                             >
//                                 <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
//                                     I agree the
//                                     <a
//                                         className="font-medium transition-colors hover:text-[#2c6be0d7]"
//                                         href="#"
//                                     >
//                                         &nbsp;Terms and Conditions
//                                     </a>
//                                 </p>
//                             </label>
//                         </div>
//                         <div className="form-control mt-6">
//                             <button type="submit" className="bg-[#2c6be0ec] hover:bg-[#245dc7] text-xl font-semibold hover:scale-110 duration-600 transition-all py-2 rounded-lg text-white">Login</button>
//                         </div>
//                     </form>
//                     {/* <GoogleLogin></GoogleLogin> */}
//                     <p className="text-center my-6">Are You New Hare?Please <Link to={'/register'} className="hover:text-[#2c6be0d7] text-lg font-semibold">Register</Link></p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LetsExplore;