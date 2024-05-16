import Breadcrumbs from "../components/travel-and-plans-components/Breadcrumbs";
import TravelDetails from "../components/travel-and-plans-components/TravelDetails";
import Receipt from "../components/travel-and-plans-components/Receipt";

const TravelPlans = () => {
  return (<>
         <div className="flex justify-start w-full p-8">
        <Breadcrumbs />    
      </div>
    <div className="grid grid-cols-2">
      <div className="flex justify-center">
       <TravelDetails />
      </div>
      <div className="flex justify-center">
       <Receipt />
      </div>
    </div>
    </>
  );
};

export default TravelPlans;
