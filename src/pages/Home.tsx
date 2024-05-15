import BookSeatsForm from "@/components/ui/BookSeatsForm";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-screen-xl mx-auto font-bold gap-y-4">
      <BookSeatsForm />
    </div>
  );
};

export default Home;
