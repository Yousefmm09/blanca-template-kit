import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Globe, Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-navy-dark text-white/80 text-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              <Globe className="w-4 h-4" />
              <span>English</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/shop" className="hover:text-white transition-colors">Official Store</Link>
            <Link to="/bernabeu" className="hover:text-white transition-colors">Tour Bernabéu</Link>
            <button className="hover:text-white transition-colors">
              <User className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-primary shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-primary">
                RM
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">Real Madrid</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-white/90 hover:text-white transition-colors font-medium">
                Home
              </Link>
              <Link to="/team" className="text-white/90 hover:text-white transition-colors font-medium">
                First Team
              </Link>
              <Link to="/schedule" className="text-white/90 hover:text-white transition-colors font-medium">
                Schedule
              </Link>
              <Link to="/news" className="text-white/90 hover:text-white transition-colors font-medium">
                News
              </Link>
              <Link to="/shop" className="text-white/90 hover:text-white transition-colors font-medium">
                Shop
              </Link>
              <Link to="/bernabeu" className="text-white/90 hover:text-white transition-colors font-medium">
                Bernabéu
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="text-white/90 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link to="/shop" className="text-white/90 hover:text-white transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </Link>
              <button
                className="lg:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-white/10">
              <div className="flex flex-col gap-3">
                <Link
                  to="/"
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/team"
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  First Team
                </Link>
                <Link
                  to="/schedule"
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Schedule
                </Link>
                <Link
                  to="/news"
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  News
                </Link>
                <Link
                  to="/shop"
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop
                </Link>
                <Link
                  to="/bernabeu"
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bernabéu
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-navy text-white/80">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">The Club</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">History</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Stadium</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Foundation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Awards</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Football</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/team" className="hover:text-white transition-colors">First Team</Link></li>
                <li><Link to="/schedule" className="hover:text-white transition-colors">Schedule</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Academy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Women's Team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/shop" className="hover:text-white transition-colors">Official Store</Link></li>
                <li><Link to="/bernabeu" className="hover:text-white transition-colors">Tour Bernabéu</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Tickets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Membership</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Newsletter</h3>
              <p className="text-sm mb-4">Stay updated with the latest news and offers</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-sm focus:outline-none focus:border-gold"
                />
                <button className="px-4 py-2 bg-gold text-navy font-medium rounded hover:bg-gold-dark transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© {new Date().getFullYear()} Real Madrid Inspired Template. Educational purposes only.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
