import Footer from "@/components/common/layout/Footer";
import Navbar from "@/components/desktop/layout/Navbar";

export default async function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="primary-layout flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
