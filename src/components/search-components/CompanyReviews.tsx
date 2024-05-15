import React from "react";

const CompanyReviews: React.FC = () => {
  return (<div className="grid grid-cols-5 gap-4 border-2 black text-center">
    <DateFilter />
   </div>
 );
};

const DateFilter: React.FC = () => {
    const today = new Date();
    const dates = [];
    for (let i = -2; i <= 2; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
  
    const formattedDates = dates.map((date) => {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const day = days[date.getDay()];
      const month = months[date.getMonth()];
      const dayOfMonth = date.getDate();
      return `${day} | ${month} ${dayOfMonth}`;
    });
  
    return (
      <>
        {formattedDates.map((formattedDate, index) => (
          <div className='text-black hover:bg-zinc-950 hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-950 hover:cursor-pointer py-5 font-bold' key={index}>{formattedDate}</div>
        ))}
      </>
    );
};

export default CompanyReviews;
