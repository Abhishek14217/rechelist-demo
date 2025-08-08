//---------------------UTILITY FUNCTION------------------------------
export const fetchFromAPI = async (endpoint: string) => {
  const res = await fetch(
    `${process.env.SERVER_API_URL}${endpoint}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.API_KEY as string,
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return res.json();
};

// ---------------- PRODUCT APIs ----------------
export const getCategories = () => fetchFromAPI("/product-categories");

export const getRange = () => fetchFromAPI("/product-types");

export const getFeaturedProducts = () => fetchFromAPI("/products/featured");

// ---------------- STATIC DATA APIs ----------------
export const getLogoAndDesc = () => fetchFromAPI("/theme-options/logo");

export const getBannerAndDesc = () => fetchFromAPI("/site-desc");

export const getCertificates = () => fetchFromAPI("/certifications");

export const getSpeciality = () => fetchFromAPI("/why-us");

export const getPcdOpportunity = () =>
  fetchFromAPI("/site-options/pcd-franchise");

export const getTestimonials = () => fetchFromAPI("/testimonials");

// ---------------- NAVIGATION ----------------
export const getNavItems = () => fetchFromAPI("/menus");

// ---------------- BLOGS ----------------
export const getBlogs = () => fetchFromAPI("/posts");

// ---------------- PAGES ----------------
export const getAboutUsData = () => fetchFromAPI("/pages/about-us");

//-----------------------------------EXTRA CODE------------------------------------
// export const getPcdOpportunity = async () => {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_API_URL}/site-options/pcd-franchise`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "X-API-KEY": process.env.API_KEY as string,
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Response was not OK!");
//   }

//   if (response.status === 200) {
//     const pcdOpportunity = await response.json();
//     return pcdOpportunity;
//   }
// };
