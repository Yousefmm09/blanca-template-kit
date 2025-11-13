import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star } from "lucide-react";

const Shop = () => {
  const products = [
    { name: "Home Jersey 24/25", price: "€89.95", category: "Jerseys", rating: 4.8 },
    { name: "Away Jersey 24/25", price: "€89.95", category: "Jerseys", rating: 4.7 },
    { name: "Third Jersey 24/25", price: "€89.95", category: "Jerseys", rating: 4.9 },
    { name: "Training Jacket", price: "€79.95", category: "Training Wear", rating: 4.6 },
    { name: "Track Pants", price: "€59.95", category: "Training Wear", rating: 4.5 },
    { name: "Polo Shirt", price: "€54.95", category: "Casual Wear", rating: 4.7 },
    { name: "Team Scarf", price: "€24.95", category: "Accessories", rating: 4.8 },
    { name: "Cap", price: "€29.95", category: "Accessories", rating: 4.6 },
    { name: "Backpack", price: "€49.95", category: "Accessories", rating: 4.7 },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <ShoppingBag className="w-16 h-16 text-gold" />
            <div>
              <h1 className="text-5xl font-bold">Official Store</h1>
              <p className="text-xl text-white/90 mt-2">Premium merchandise for true fans</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-secondary py-6 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            <Button variant="default" className="bg-gold text-navy hover:bg-gold-dark">
              All Products
            </Button>
            <Button variant="outline">Jerseys</Button>
            <Button variant="outline">Training Wear</Button>
            <Button variant="outline">Casual Wear</Button>
            <Button variant="outline">Accessories</Button>
            <Button variant="outline">Kids</Button>
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden bg-gradient-to-r from-navy to-navy-light text-white p-8 md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">New Season Collection</h2>
              <p className="text-xl text-white/90 mb-6">
                Get your official 2024/25 jerseys and show your support
              </p>
              <Button size="lg" className="bg-gold text-navy hover:bg-gold-dark font-bold">
                Shop Jerseys
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl font-bold text-gray-300 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <div className="absolute top-2 right-2 bg-gold text-navy px-2 py-1 rounded text-xs font-bold">
                    NEW
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-gold font-medium mb-1">{product.category}</div>
                  <h3 className="font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <span className="text-sm text-muted-foreground">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">{product.price}</span>
                    <Button size="sm" className="bg-gold text-navy hover:bg-gold-dark">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-bold mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over €75</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-bold mb-2">Authentic Products</h3>
              <p className="text-sm text-muted-foreground">100% official merchandise</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-bold mb-2">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
