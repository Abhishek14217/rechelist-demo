type Props = {
  data: {
    title: string;
    description: string;
  };
};

export default function CareerIntro({ data }: Props) {
  return (
    <section className="text-center max-w-3xl mx-auto">
      <h1 className="text-2xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primaryOrange to-secondaryYellow">
        {data.title}
      </h1>
      <p className="mt-4 text-gray-600">{data.description}</p>
    </section>
  );
}
