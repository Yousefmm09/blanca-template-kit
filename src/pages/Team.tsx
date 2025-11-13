import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

// Import player images
import mbappeImg from "@/assets/players/mbappe.jpg";
import viniciusImg from "@/assets/players/vinicius.jpg";
import bellinghamImg from "@/assets/players/bellingham.jpg";
import modricImg from "@/assets/players/modric.jpg";
import rodrygoImg from "@/assets/players/rodrygo.jpg";
import courtoisImg from "@/assets/players/courtois.jpg";
import valverdeImg from "@/assets/players/valverde.jpg";
import camavingaImg from "@/assets/players/camavinga.jpg";

// Import coach images
import ancelottiImg from "@/assets/coaches/ancelotti.jpg";
import davideImg from "@/assets/coaches/davide.jpg";

const Team = () => {
  // Map player names to their images
  const playerImages: Record<string, string> = {
    "Kylian Mbappé": mbappeImg,
    "Vinícius Júnior": viniciusImg,
    "Jude Bellingham": bellinghamImg,
    "Luka Modrić": modricImg,
    "Rodrygo Goes": rodrygoImg,
    "Thibaut Courtois": courtoisImg,
    "Federico Valverde": valverdeImg,
    "Eduardo Camavinga": camavingaImg,
  };
  const players = [
    // Goalkeepers
    { name: "Thibaut Courtois", number: 1, position: "Goalkeeper" },
    { name: "Andriy Lunin", number: 13, position: "Goalkeeper" },
    { name: "Kepa Arrizabalaga", number: 25, position: "Goalkeeper" },
    
    // Defenders
    { name: "Dani Carvajal", number: 2, position: "Defender" },
    { name: "Éder Militão", number: 3, position: "Defender" },
    { name: "David Alaba", number: 4, position: "Defender" },
    { name: "Jesús Vallejo", number: 5, position: "Defender" },
    { name: "Nacho Fernández", number: 6, position: "Defender" },
    { name: "Antonio Rüdiger", number: 22, position: "Defender" },
    { name: "Ferland Mendy", number: 23, position: "Defender" },
    { name: "Fran García", number: 20, position: "Defender" },
    
    // Midfielders
    { name: "Luka Modrić", number: 10, position: "Midfielder" },
    { name: "Toni Kroos", number: 8, position: "Midfielder" },
    { name: "Federico Valverde", number: 15, position: "Midfielder" },
    { name: "Eduardo Camavinga", number: 12, position: "Midfielder" },
    { name: "Aurélien Tchouaméni", number: 18, position: "Midfielder" },
    { name: "Jude Bellingham", number: 5, position: "Midfielder" },
    { name: "Dani Ceballos", number: 19, position: "Midfielder" },
    { name: "Brahim Díaz", number: 21, position: "Midfielder" },
    { name: "Arda Güler", number: 24, position: "Midfielder" },
    
    // Forwards
    { name: "Vinícius Júnior", number: 7, position: "Forward" },
    { name: "Rodrygo Goes", number: 11, position: "Forward" },
    { name: "Joselu", number: 14, position: "Forward" },
    { name: "Kylian Mbappé", number: 9, position: "Forward" },
    { name: "Endrick", number: 16, position: "Forward" },
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
                <div className="relative aspect-[3/4] bg-gradient-to-br from-navy to-navy-light flex items-center justify-center overflow-hidden">
                  {playerImages[player.name] ? (
                    <img
                      src={playerImages[player.name]}
                      alt={player.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center text-white">
                      <div className="text-6xl font-bold mb-2 text-gold opacity-20 group-hover:opacity-40 transition-opacity">
                        {player.number}
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
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
              { name: "Carlo Ancelotti", role: "Manager", image: ancelottiImg },
              { name: "Davide Ancelotti", role: "Assistant Coach", image: davideImg },
              { name: "Antonio Pintus", role: "Physical Trainer", image: null },
              { name: "Luis Llopis", role: "GK Coach", image: null },
            ].map((staff, i) => (
              <Card key={i} className="p-6 text-center overflow-hidden">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-navy to-navy-light overflow-hidden">
                  {staff.image ? (
                    <img
                      src={staff.image}
                      alt={staff.name}
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                </div>
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
