import { IoIosArrowRoundForward } from "react-icons/io";

const Breadcrumbs = () => {
    return (<>
      <div className="font-bold">Travel Plan</div>
      <div><IoIosArrowRoundForward size={25} /></div>
      <div>Passengers</div>
      <div><IoIosArrowRoundForward size={25} /></div>
      <div>Confirmation</div>
      <div><IoIosArrowRoundForward size={25} /></div>
      <div>Payment Method</div>
    </>
    );
  };
  
  export default Breadcrumbs;
