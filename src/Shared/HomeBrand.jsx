import { useEffect, useState } from "react";
import useAxios from "../Hook/useAxios";

const HomeBrand = () => {
    const myAxios = useAxios();
    const [cards, setCards] = useState([]);
    useEffect(() => {
        myAxios.get('/brands')
            .then(res => {
                const brands = res?.data;
                setCards(brands)
            })
    }, [myAxios])
    return (
        <div className="mb-10 px-5 lg:px-0">
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    cards.map(card => <div data-aos="flip-left" data-aos-duration="2400" className="border-2 py-4" key={card._id}>
                        <img className="h-72" src={card?.image} alt="" />
                        <div className="px-3 mt-2">
                            <h2 className="text-xl font-medium">{card?.name}</h2>
                            <div className="flex items-center gap-2 my-3">
                                <img className="w-7" src="https://i.ibb.co/Vx6tp37/images-8-removebg-preview-1.png" alt="" />
                                <h4 className="text-lg font-medium text-gray-600">{card?.category}</h4>
                            </div>
                            <hr />
                            <p className="text-gray-500 font-bold mt-1">{card.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomeBrand;