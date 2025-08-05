//---------------------------LOGO, FAVICON AND FOOTER DESCRIPTION----------------------
export const getLogoAndDesc = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/theme-options/logo`,
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
    const logoAndDesc = await response.json();
    return logoAndDesc;
  }
};

//---------------------------BANNER, BANNER DESCRIPTION AND HOME SEO----------------------
export const getBannerAndDesc = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/site-desc`,
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
    const bannerAndDesc = await response.json();
    return bannerAndDesc;
  }
};

//---------------------------CERTIFICATIONS----------------------
export const getCertificates = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/certifications`,
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
    const certificates = await response.json();
    return certificates;
  }
};

//---------------------------SPECIALITY----------------------
export const getSpeciality = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/why-us`,
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
    const speciality = await response.json();
    return speciality;
  }
};
