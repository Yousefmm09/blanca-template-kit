import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

const Schedule = () => {
  const matches = [
    {
      date: "Dec 21, 2024",
      time: "21:00",
      competition: "La Liga",
      home: "Real Madrid",
      homeShort: "RM",
      away: "Sevilla FC",
      awayShort: "SEV",
      venue: "Santiago Bernabéu",
      status: "upcoming",
    },
    {
      date: "Dec 18, 2024",
      time: "20:00",
      competition: "Copa del Rey",
      home: "Real Madrid",
      homeShort: "RM",
      away: "Real Sociedad",
      awayShort: "RSO",
      venue: "Santiago Bernabéu",
      status: "upcoming",
    },
    {
      date: "Dec 14, 2024",
      time: "21:00",
      competition: "La Liga",
      home: "Rayo Vallecano",
      homeShort: "RAY",
      away: "Real Madrid",
      awayShort: "RM",
      venue: "Campo de Fútbol de Vallecas",
      status: "result",
      score: "0 - 2",
    },
    {
      date: "Dec 10, 2024",
      time: "21:00",
      competition: "Champions League",
      home: "Real Madrid",
      homeShort: "RM",
      away: "Atalanta",
      awayShort: "ATA",
      venue: "Santiago Bernabéu",
      status: "result",
      score: "3 - 2",
    },
    {
      date: "Dec 7, 2024",
      time: "16:15",
      competition: "La Liga",
      home: "Girona FC",
      homeShort: "GIR",
      away: "Real Madrid",
      awayShort: "RM",
      venue: "Montilivi",
      status: "result",
      score: "0 - 3",
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Calendar className="w-16 h-16 text-gold" />
            <div>
              <h1 className="text-5xl font-bold">Fixtures & Results</h1>
              <p className="text-xl text-white/90 mt-2">2024/25 Season Schedule</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-secondary py-6 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            <Button variant="default" className="bg-gold text-navy hover:bg-gold-dark">
              All Matches
            </Button>
            <Button variant="outline">La Liga</Button>
            <Button variant="outline">Champions League</Button>
            <Button variant="outline">Copa del Rey</Button>
            <Button variant="outline">Super Cup</Button>
          </div>
        </div>
      </section>

      {/* Matches List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {matches.map((match, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  {/* Match Info */}
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-2 text-sm text-gold font-medium mb-4">
                      <div className="px-3 py-1 bg-gold/10 rounded">{match.competition}</div>
                      {match.status === "result" && (
                        <div className="px-3 py-1 bg-secondary rounded text-muted-foreground">
                          Full Time
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between gap-8">
                      {/* Home Team */}
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm border">
                          {match.homeShort}
                        </div>
                        <div className="font-bold text-lg">{match.home}</div>
                      </div>

                      {/* Score or VS */}
                      <div className="text-center min-w-[80px]">
                        {match.status === "result" ? (
                          <div className="text-3xl font-bold">{match.score}</div>
                        ) : (
                          <div className="text-2xl font-bold text-muted-foreground">VS</div>
                        )}
                      </div>

                      {/* Away Team */}
                      <div className="flex items-center gap-3 flex-1 justify-end">
                        <div className="font-bold text-lg text-right">{match.away}</div>
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm border">
                          {match.awayShort}
                        </div>
                      </div>
                    </div>

                    {/* Match Details */}
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{match.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{match.time} CET</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{match.venue}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  {match.status === "upcoming" && (
                    <Button className="bg-gold text-navy hover:bg-gold-dark font-medium">
                      Buy Tickets
                    </Button>
                  )}
                  {match.status === "result" && (
                    <Button variant="outline">View Report</Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Schedule;
