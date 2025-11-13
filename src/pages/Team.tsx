import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Team = () => {
  const players = [
    { name: "Player One", number: 1, position: "Goalkeeper" },
    { name: "Player Two", number: 2, position: "Defender" },
    { name: "Player Three", number: 3, position: "Defender" },
    { name: "Player Four", number: 4, position: "Defender" },
    { name: "Player Five", number: 5, position: "Defender" },
    { name: "Player Six", number: 6, position: "Midfielder" },
    { name: "Player Seven", number: 7, position: "Forward" },
    { name: "Player Eight", number: 8, position: "Midfielder" },
    { name: "Player Nine", number: 9, position: "Forward" },
    { name: "Player Ten", number: 10, position: "Midfielder" },
    { name: "Player Eleven", number: 11, position: "Forward" },
    { name: "Player Twelve", number: 12, position: "Midfielder" },
  ];

  const positions = ["All", "Goalkeeper", "Defender", "Midfielder", "Forward"];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-16 h-16 text-gold" />
            <div>
              <h1 className="text-5xl font-bold">First Team</h1>
              <p className="text-xl text-white/90 mt-2">2024/25 Season Squad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-secondary py-6 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {positions.map((position) => (
              <Button
                key={position}
                variant={position === "All" ? "default" : "outline"}
                className={position === "All" ? "bg-gold text-navy hover:bg-gold-dark" : ""}
              >
                {position}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {players.map((player) => (
              <Card
                key={player.number}
                className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="relative aspect-[3/4] bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-2 text-gold opacity-20 group-hover:opacity-40 transition-opacity">
                      {player.number}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="text-xs text-gold font-medium mb-1">{player.position}</div>
                    <div className="text-white font-bold">{player.name}</div>
                    <div className="text-white/80 text-sm">#{player.number}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Staff */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Coaching Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Head Coach", role: "Manager" },
              { name: "Assistant Coach", role: "Assistant" },
              { name: "Fitness Coach", role: "Physical Trainer" },
              { name: "Goalkeeping Coach", role: "GK Coach" },
            ].map((staff, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-navy to-navy-light"></div>
                <h3 className="font-bold text-lg mb-1">{staff.name}</h3>
                <p className="text-muted-foreground text-sm">{staff.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
