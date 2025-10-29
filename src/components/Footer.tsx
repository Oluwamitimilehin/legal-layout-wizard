import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: "#2e3095" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">
              The Law Gates
            </h3>
            <p className="text-sm text-white/80 mb-4">
              We’re guided by three words that define who we are and how we work:
              <br />
              <span className="italic">Insight. Integrity. Impact.</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-white/80 hover:text-gray-200 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-white/80 hover:text-gray-200 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/TaxSupport"
                  className="text-sm text-white/80 hover:text-gray-200 transition-colors"
                >
                  Tax Support Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-white/80 hover:text-gray-200 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-white/80 hover:text-gray-200 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-200 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/80">
                  White House, 5 Ogunlesi Street off Bode Thomas Street
                  <br />
                  Awoyokun Ikorodu Road, Lagos.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-200 flex-shrink-0" />
                <span className="text-sm text-white/80">
                  +234 8150517588, +234 8030768965
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-200 flex-shrink-0" />
                <span className="text-sm text-white/80">
                  info@thelawgates.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} The Law Gates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
