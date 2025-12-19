import { notFound } from "next/navigation";
import { getProductBySlug, getNextProduct, products } from "../../data/products";
import ProductDetail from "../../components/ProductDetail";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const nextProduct = product ? getNextProduct(slug) : undefined;

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#fefcfc]">
      <TopBar />
      <NavBar />
      <ProductDetail product={product} nextProduct={nextProduct} />
      <Footer />
    </div>
  );
}

