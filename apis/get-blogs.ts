//----------------------ALL BLOGS--------------------------
export const getBlogs = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/posts`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.API_KEY as string,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Response was not OK!");
  }

  if (response.status === 200) {
    const blogs = await response.json();
    return blogs;
  }
};
