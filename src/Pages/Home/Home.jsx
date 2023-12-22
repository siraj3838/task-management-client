import DevMarquee from "../../Shared/DevMarquee";
import HomeBanner from "../../Shared/HomeBanner";
import HomeBrand from "../../Shared/HomeBrand";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeBrand></HomeBrand>
            <DevMarquee></DevMarquee>
        </div>
    );
};

export default Home;