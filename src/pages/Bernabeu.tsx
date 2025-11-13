import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Clock, Users, Ticket, Camera, Info } from "lucide-react";

const Bernabeu = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="relative h-[500px] bg-gradient-to-r from-navy via-navy-light to-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-4 mb-6">
              <Building2 className="w-16 h-16 text-gold" />
              <h1 className="text-5xl md:text-6xl font-bold">Santiago Bernabéu</h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Experience the magic of one of the world's most iconic football stadiums
            </p>
            <Button size="lg" className="bg-gold text-navy hover:bg-gold-dark font-bold">
              Book Stadium Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="w-12 h-12 text-gold" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">81,044</div>
              <div className="text-sm text-muted-foreground">Capacity</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Building2 className="w-12 h-12 text-gold" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">1947</div>
              <div className="text-sm text-muted-foreground">Inaugurated</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Camera className="w-12 h-12 text-gold" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">Daily</div>
              <div className="text-sm text-muted-foreground">Tours Available</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Ticket className="w-12 h-12 text-gold" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">€25</div>
              <div className="text-sm text-muted-foreground">Adult Ticket</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Stadium Tour Experience</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Presidential Box</h3>
                  <p className="text-muted-foreground text-sm">
                    Experience the luxury of the Presidential Box with panoramic stadium views
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Trophy Room</h3>
                  <p className="text-muted-foreground text-sm">
                    Marvel at the incredible collection of trophies and achievements
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Players' Tunnel</h3>
                  <p className="text-muted-foreground text-sm">
                    Walk through the tunnel where legends have walked onto the pitch
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Info className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Press Room</h3>
                  <p className="text-muted-foreground text-sm">
                    Sit in the iconic press conference room
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Changing Rooms</h3>
                  <p className="text-muted-foreground text-sm">
                    Visit the actual changing rooms used by the first team
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Panoramic Views</h3>
                  <p className="text-muted-foreground text-sm">
                    Enjoy spectacular views of the entire stadium and pitch
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Tour Schedules & Prices</h2>
            
            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8 text-gold" />
                    <div>
                      <h3 className="font-bold">Standard Tour</h3>
                      <p className="text-sm text-muted-foreground">Daily 10:00 - 19:00</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">€25</div>
                    <p className="text-sm text-muted-foreground">Adults</p>
                  </div>
                  <Button className="bg-gold text-navy hover:bg-gold-dark">Book Now</Button>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8 text-gold" />
                    <div>
                      <h3 className="font-bold">VIP Experience</h3>
                      <p className="text-sm text-muted-foreground">Advance booking required</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">€85</div>
                    <p className="text-sm text-muted-foreground">Per person</p>
                  </div>
                  <Button className="bg-gold text-navy hover:bg-gold-dark">Book Now</Button>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <Users className="w-8 h-8 text-gold" />
                    <div>
                      <h3 className="font-bold">Group Tour</h3>
                      <p className="text-sm text-muted-foreground">Min. 15 people</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">€20</div>
                    <p className="text-sm text-muted-foreground">Per person</p>
                  </div>
                  <Button className="bg-gold text-navy hover:bg-gold-dark">Inquire</Button>
                </div>
              </Card>
            </div>

            <div className="bg-gold/10 border border-gold/20 rounded-lg p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-gold" />
                Important Information
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Tours may be cancelled or rescheduled on match days</li>
                <li>• Children under 5 years enter free</li>
                <li>• Audio guides available in 12 languages</li>
                <li>• Photography is allowed in most areas</li>
                <li>• Average tour duration: 90 minutes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bernabeu;
