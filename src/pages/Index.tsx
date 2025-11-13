import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock, ArrowRight, Trophy, Users, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-navy via-navy-light to-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600')] bg-cover bg-center opacity-30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to the <span className="text-gold">Greatest</span> Football Club
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Experience the passion, glory, and tradition of world-class football
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gold text-navy hover:bg-gold-dark font-bold">
                Watch Highlights
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                <Link to="/team">View Squad</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Trophy className="w-12 h-12 text-gold" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">35</div>
              <div className="text-muted-foreground">La Liga Titles</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Trophy className="w-12 h-12 text-gold" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">European Cups</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="w-12 h-12 text-gold" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">450M+</div>
              <div className="text-muted-foreground">Global Fans</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Building2 className="w-12 h-12 text-gold" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">81k</div>
              <div className="text-muted-foreground">Stadium Capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Match Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Next Match</h2>
          <Card className="max-w-4xl mx-auto p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center flex-1">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center font-bold text-2xl text-primary shadow-md">
                  RM
                </div>
                <h3 className="text-xl font-bold">Real Madrid</h3>
              </div>
              
              <div className="text-center">
                <div className="bg-secondary px-6 py-3 rounded-lg mb-4">
                  <div className="text-sm text-muted-foreground mb-1">La Liga</div>
                  <div className="text-2xl font-bold">VS</div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Saturday, Dec 21, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="w-4 h-4" />
                  <span>21:00 CET</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Santiago Bernabéu</span>
                </div>
              </div>

              <div className="text-center flex-1">
                <div className="w-24 h-24 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center font-bold text-2xl text-white shadow-md">
                  SEV
                </div>
                <h3 className="text-xl font-bold">Sevilla FC</h3>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button className="bg-gold text-navy hover:bg-gold-dark font-bold">
                Buy Tickets
              </Button>
              <Link to="/schedule">
                <Button variant="outline">View Full Schedule</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest News</h2>
            <Link to="/news">
              <Button variant="ghost" className="gap-2">
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-navy to-navy-light"></div>
                <div className="p-6">
                  <div className="text-sm text-gold font-medium mb-2">FIRST TEAM</div>
                  <h3 className="text-xl font-bold mb-3">Squad Prepares for Crucial La Liga Clash</h3>
                  <p className="text-muted-foreground mb-4">
                    The team completed their final training session ahead of this weekend's important league fixture.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">2 hours ago</span>
                    <Link to="/news/article">
                      <Button variant="ghost" size="sm" className="gap-1">
                        Read More <ArrowRight className="w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Promo */}
      <section className="py-16 bg-gradient-to-r from-navy to-navy-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Official Store</h2>
          <p className="text-xl mb-8 text-white/90">Get your official merchandise and show your support</p>
          <Link to="/shop">
            <Button size="lg" className="bg-gold text-navy hover:bg-gold-dark font-bold">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
