import MovieList from "@/components/page";

const page = ({ searchParams }) => {
  const search = searchParams.query;

  return (
    <div>
      <MovieList search={search} />
    </div>
  );
};

export default page;
