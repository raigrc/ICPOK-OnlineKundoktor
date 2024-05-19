import SearchFilter from "@/components/search-components/SearchFilter";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-screen-xl mx-auto font-bold gap-y-4 px-20">
      <p className="text-[80px]">Book Your Seats Now!</p>
      <SearchFilter />
    </div>
  );
};

export default Home;
