import Button from "@/components/ui/Button";
import ProductCard from "./ProductCard";

const dummyProducts = [
  {
    id: 1,
    title: "Product 1",
    image: "/images/demo1.png",
    category: "Tablet",
    composition: "Amoxycillin / Paracetamol",
    packaging: "10x10 Tablets Stripe",
    price: "₹120",
  },
  {
    id: 2,
    title: "Product 2",
    image: "/images/demo2.png",
    category: "Capsule",
    composition: "Omeprazole",
    packaging: "20x10 Capsules",
    price: "₹180",
  },
  {
    id: 3,
    title: "Product 3",
    image: "/images/demo3.png",
    category: "Syrup",
    composition: "Vitamin C",
    packaging: "100ml Bottle",
    price: "₹95",
  },
  {
    id: 4,
    title: "Product 4",
    image: "/images/demo4.png",
    category: "Skincare",
    composition: "Aloe Vera Extract",
    packaging: "50ml Tube",
    price: "₹250",
  },
];

export default function ProductsGrid() {
  return (
    <div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Show More */}
      <div className="text-center mt-8">
        <Button
          type="button"
          text="Show More"
          className="px-4 lg:px-6 py-2 text-fontDesk lg:text-fontDeskLarge rounded-full text-white transition-all duration-300 bg-gradient-to-r from-primaryOrange to-secondaryYellow hover:opacity-90"
        />
      </div>
    </div>
  );
}
