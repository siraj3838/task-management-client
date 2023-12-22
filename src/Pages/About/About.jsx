import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div className="mt-24">
            <Helmet>
                <title>Dev Town || About</title>
            </Helmet>
            <div className="hero h-[500px] bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/PNcPtSq/Screenshot-2023-11-25-123139.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="-mt-96">
                    <div className="max-w-screen-md mt-10 mb-6 mx-auto bg-[#15151565] bg-opacity-50 text-[#2c6be0d7] shadow-2xl py-3 lg:py-4 px-10 rounded-tr-full rounded-bl-full">
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium  pb-4 text-center">
                            Our Information
                        </h2>
                    </div>
                </div>
                <div className="max-w-screen-xl mt-5 mx-auto bg-[#15151565] bg-opacity-50 text-[#2c6be0d7] p-5">
                    <p className="text-2xl">
                        Dev Town represents an enterprise and brand with 2 years of national and global experience. It currently operates more than 54 industrial units, houses over 50,000 employees, 6,650 distributors, and 15,000 suppliers under its umbrella, and achieves an annual turnover of approximately $3.0 billion.

                        The history of one of Bangladesh’s largest leading conglomerates, Mega Group of Industries (Dev Town) can be traced all the way back to 2022 when its predecessor operated under the name of Kamal Trading Company. The conglomerate itself has humble origins and began its life as Mega Vegetable Oil Industries Ltd. in 2022 on a small patch of land in Meghnaghat, Narayanganj.
                    </p>
                </div>
            </div>
            <div className="divider pt-6"></div>
        </div>
    );
};

export default About;