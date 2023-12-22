import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Link } from "react-router-dom"

function ThumbnailPlugin(mainRef) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}


const HomeBanner = () => {
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )
    return (
        <div className=''>
            <div className="max-w-screen-2xl mx-auto">

                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide2">
                        <div className="hero h-[550px] relative" style={{ backgroundImage: 'url(https://i.ibb.co/G760QQ4/Importance-of-Project-Management-Automation-in-Life-Sciences-Industry-Banner.jpg)' }}>
                            <div className="hero-overlay bg-opacity-80"></div>

                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide3">
                        <div className="hero h-[550px] relative" style={{ backgroundImage: 'url(https://i.ibb.co/qd2w25w/Task-Management-Application.jpg)' }}>
                            <div className="hero-overlay bg-opacity-80"></div>

                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide1">
                        <div className="hero h-[550px] relative" style={{ backgroundImage: 'url(https://i.ibb.co/JtGD43c/task-management-1.webp)' }}>
                            <div className="hero-overlay bg-opacity-80"></div>

                        </div>
                    </div>

                    <div className="keen-slider__slide number-slide6">
                        <div className="hero h-[550px] relative" style={{ backgroundImage: 'url(https://i.ibb.co/BttWcM8/How-to-Stay-Popular-in-Project-Management-field.jpg)' }}>
                            <div className="hero-overlay bg-opacity-80"></div>

                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide4">
                        <div className="hero h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/5MBfg6M/News-Web-banner-21.png)' }}>
                            <div className="hero-overlay bg-opacity-80"></div>

                        </div>
                    </div>

                </div>

                <div className="flex justify-end">
                    <div className="max-w-sm px-5 mt-3">
                        <div ref={thumbnailRef} className="keen-slider thumbnail">
                            <div className="keen-slider__slide number-slide2">
                                <img className="h-16 w-20" src="https://i.ibb.co/G760QQ4/Importance-of-Project-Management-Automation-in-Life-Sciences-Industry-Banner.jpg" alt="" />
                            </div>
                            <div className="keen-slider__slide number-slide3">
                                <img className="h-16 w-20" src="https://i.ibb.co/qd2w25w/Task-Management-Application.jpg" alt="" />
                            </div>
                            <div className="keen-slider__slide number-slide1">
                                <img className="h-16 w-20" src="https://i.ibb.co/JtGD43c/task-management-1.webp" alt="" />
                            </div>

                            <div className="keen-slider__slide number-slide6">
                                <img className="h-16 w-20" src="https://i.ibb.co/BttWcM8/How-to-Stay-Popular-in-Project-Management-field.jpg" alt="" />
                            </div>
                            <div className="keen-slider__slide number-slide4">
                                <img className="h-16 w-20" src="https://i.ibb.co/5MBfg6M/News-Web-banner-21.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider py-4"></div>
            </div>
        </div>
    );
};

export default HomeBanner;