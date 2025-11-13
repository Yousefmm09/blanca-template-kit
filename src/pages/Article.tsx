import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Share2, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Article = () => {
  return (
    <Layout>
      {/* Article Header */}
      <section className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="text-gold hover:underline mb-4 inline-block">
              ← Back to News
            </Link>
            <div className="text-sm text-gold font-medium mb-3">FIRST TEAM</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Squad Prepares for Crucial La Liga Clash
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>December 20, 2024</span>
              </div>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-navy via-navy-light to-navy rounded-lg mb-6"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Share Buttons */}
            <div className="flex gap-3 mb-8">
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                The first team completed their final training session at the Ciudad Real Madrid training complex ahead of this weekend's important La Liga fixture at the Santiago Bernabéu.
              </p>

              <p className="mb-6 leading-relaxed">
                All available players participated in the intensive session which focused on tactical preparations and set-piece scenarios. The coaching staff put the squad through their paces with a series of positional drills and practice match situations.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Team News</h2>
              
              <p className="mb-6 leading-relaxed">
                The medical department provided positive updates on several players who have been recovering from minor injuries. The coaching staff will assess their condition in the coming days before making final decisions on squad selection.
              </p>

              <p className="mb-6 leading-relaxed">
                Manager expressed confidence in the team's preparation, stating: "We've had an excellent week of training. The players are focused and understand the importance of this match. We're ready to give our best performance for our fans."
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>

              <p className="mb-6 leading-relaxed">
                This fixture represents a crucial opportunity to maintain momentum in the league competition. The team will be looking to build on their recent strong performances and secure three important points at home.
              </p>

              <p className="mb-6 leading-relaxed">
                The match kicks off at 21:00 CET on Saturday at the Santiago Bernabéu, with full coverage available through official club channels.
              </p>

              <div className="bg-secondary p-6 rounded-lg mt-8">
                <h3 className="font-bold text-lg mb-2">Match Information</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Competition:</strong> La Liga</li>
                  <li><strong>Date:</strong> Saturday, December 21, 2024</li>
                  <li><strong>Kick-off:</strong> 21:00 CET</li>
                  <li><strong>Venue:</strong> Santiago Bernabéu</li>
                </ul>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16 border-t pt-8">
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="w-32 h-32 bg-gradient-to-br from-navy to-navy-light rounded flex-shrink-0"></div>
                    <div>
                      <div className="text-xs text-gold font-medium mb-2">FIRST TEAM</div>
                      <h4 className="font-bold group-hover:text-gold transition-colors">
                        Another Important Article Title
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2">3 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Article;
