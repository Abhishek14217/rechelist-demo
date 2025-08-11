import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex items-center my-[4rem] justify-center">
      <div className="max-w-[35rem] min-h-[20rem] w-full flex flex-col justify-center items-center border border-gray-200 shadow-xl rounded-2xl px-gap">
        <h1 className="text-3xl font-bold text-center mb-4">
          No data found regarding this type!
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
