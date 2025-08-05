//--------------------CERTIFICATES TYPES-------------------------
export type CertificationsType = {
  title: string;
  description: string;
  certifications: { image: string }[];
};

//--------------------SPECIALITY TYPES-------------------------
export type SpecialityType = {
  title: string;
  subtitle: string;
  map_image: string;
  features: { icon: string; title: string; description: string }[];
};
