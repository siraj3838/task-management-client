import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import useAxios from "../Hook/useAxios";

const SocialLogin = () => {
    const { googleLoggedIn } = useContext(AuthContext);
    const myAxios = useAxios();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLoggedIn()
            .then(res => {
                // console.log(res.user);
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName
                }
                toast.success('Login Successfully')
                navigate('/')
                myAxios.post('/users', userInfo)
                    .then(res => {
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="mb-2">
                <div className="divider"></div>
                <button onClick={handleGoogleLogin} className="btn btn-accent w-full text-xl hover:scale-110 duration-600 transition-all">
                    <FcGoogle className="text-2xl"></FcGoogle> Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;