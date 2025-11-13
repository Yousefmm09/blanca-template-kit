import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Newspaper, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const News = () => {
  const articles = [
    {
      category: "FIRST TEAM",
      title: "Squad Prepares for Crucial La Liga Clash",
      excerpt: "The team completed their final training session ahead of this weekend's important league fixture at the Santiago Bernabéu.",
      time: "2 hours ago",
      featured: true,
    },
    {
      category: "MATCH PREVIEW",
      title: "Everything You Need to Know About Saturday's Match",
      excerpt: "Complete preview of the upcoming fixture including team news, stats, and where to watch.",
      time: "3 hours ago",
      featured: false,
    },
    {
      category: "FIRST TEAM",
      title: "Player Focus: Rising Star Continues to Impress",
      excerpt: "Young midfielder has been exceptional in recent matches, earning praise from coaching staff.",
      time: "5 hours ago",
      featured: false,
    },
    {
      category: "CLUB NEWS",
      title: "Foundation Launches New Community Initiative",
      excerpt: "New program aims to support local youth through football and education.",
      time: "6 hours ago",
      featured: false,
    },
    {
      category: "CHAMPIONS LEAGUE",
      title: "European Campaign Updates and Analysis",
      excerpt: "Reviewing the team's progress in this season's Champions League competition.",
      time: "8 hours ago",
      featured: false,
    },
    {
      category: "WOMEN'S TEAM",
      title: "Women's Squad Celebrates Important Victory",
      excerpt: "Dominant performance secures three crucial points in league competition.",
      time: "10 hours ago",
      featured: false,
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Newspaper className="w-16 h-16 text-gold" />
            <div>
              <h1 className="text-5xl font-bold">Latest News</h1>
              <p className="text-xl text-white/90 mt-2">Stay updated with the latest from the club</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-secondary py-6 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            <Button variant="default" className="bg-gold text-navy hover:bg-gold-dark">
              All News
            </Button>
            <Button variant="outline">First Team</Button>
            <Button variant="outline">Matches</Button>
            <Button variant="outline">Women's Team</Button>
            <Button variant="outline">Academy</Button>
            <Button variant="outline">Club</Button>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer mb-12">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-[400px] bg-gradient-to-br from-navy via-navy-light to-navy"></div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="text-sm text-gold font-medium mb-3">{articles[0].category}</div>
                <h2 className="text-4xl font-bold mb-4">{articles[0].title}</h2>
                <p className="text-muted-foreground text-lg mb-6">{articles[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{articles[0].time}</span>
                  <Link to="/news/article">
                    <Button className="gap-2 bg-gold text-navy hover:bg-gold-dark">
                      Read Full Article <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-navy to-navy-light"></div>
                <div className="p-6">
                  <div className="text-sm text-gold font-medium mb-2">{article.category}</div>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{article.time}</span>
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

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
