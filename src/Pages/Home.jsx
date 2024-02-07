import Banner from "../Components/Banner";
import PackageCard from "../Components/Cards/PackageCard";
import QuickLink from "../Components/Cards/QuickLink";
import ServerCard from "../Components/Cards/ServerCard";
import ServiceCard from "../Components/Cards/ServiceCard";
import LastSection from "../Components/LastSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <ServiceCard />
      <ServerCard />
      <PackageCard />
      <QuickLink />
      <LastSection />
    </div>
  );
};

export default Home;
