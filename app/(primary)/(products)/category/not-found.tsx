import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex items-center my-[4rem] justify-center">
      <div className="max-w-[35rem] min-h-[20rem] w-full flex flex-col justify-center items-center border border-gray-200 shadow-xl rounded-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          No data found regarding this category!
        </h1>

        <Link
          className="text-fontDeskLarge bg-clip-text text-transparent bg-gradient-to-r from-primaryOrange to-secondaryYellow hover:underline"
          href="/"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
