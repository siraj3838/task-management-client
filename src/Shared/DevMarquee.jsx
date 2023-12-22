import Marquee from "react-fast-marquee";

const DevMarquee = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-5 lg:px-0">
            <Marquee>
                <img className="w-80 h-40 ml-5 my-5" src="https://i.ibb.co/2WdYWcS/images-13.jpg" alt="" />
                <img className="w-80 h-40 ml-5 my-5" src="https://i.ibb.co/KFM2kfH/images-14.jpg" alt="" />
                <img className="w-80 h-40 ml-5 my-5" src="https://i.ibb.co/Qc4pwM7/images-9.png" alt="" />
                <img className="w-80 h-40 ml-5 my-5" src="https://i.ibb.co/n3rQD1z/images-15.jpg" alt="" />
                <img className="w-80 h-40 ml-5 my-5" src="https://i.ibb.co/rv8Z94Q/images-16.jpg" alt="" />
            </Marquee>
        </div>
    );
};

export default DevMarquee;