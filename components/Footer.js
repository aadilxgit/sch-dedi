import React from 'react';

export default function Footer() {
  return (
    <footer className="pt-16 pb-6 bg-gray-900 border-t border-white/20 footer-section">
      {/* Inline custom CSS to replicate @apply styles */}
      <style>{`
        .footer-link {
          position: relative;
          color: #9ca3af; /* text-gray-400 */
          transition: color 0.3s;
          display: inline-block;
        }
        .footer-link:hover {
          color: #a78bfa; /* primary-light */
        }
        .footer-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background-color: #a78bfa; /* primary-light */
          transition: width 0.3s;
        }
        .footer-link:hover::after {
          width: 100%;
        }
        .footer-section {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 1s forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <div className="text-gray-400 text-2xl font-bold text-primary mb-4">SCHOST</div>
            <p className="text-gray-400 mb-6">
              Whether you run an e-commerce site or a web business, you want to attract as many visitors as possible.
              Our servers provide the performance you need.
            </p>
            <h6 className="text-white mb-4 font-semibold">Social Media</h6>
            <div className="flex gap-2">
              <a href="#" className="footer-link">
                <i className="lab la-twitter"></i>
              </a>
              <a href="#" className="footer-link">
                <i className="lab la-facebook-f"></i>
              </a>
              <a href="#" className="footer-link">
                <i className="lab la-dribbble"></i>
              </a>
              <a href="#" className="footer-link">
                <i className="lab la-behance"></i>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h6 className="text-white font-semibold mb-6">Product &amp; Solutions</h6>
            <ul className="space-y-3">
              <li>
                <a href="#" className="footer-link">Shared Hosting</a>
              </li>
              <li>
                <a href="#" className="footer-link">WordPress Hosting</a>
              </li>
              <li>
                <a href="#" className="footer-link">VPS Hosting</a>
              </li>
              <li>
                <a href="#" className="footer-link">Cloud Servers</a>
              </li>
              <li>
                <a href="#" className="footer-link">Dedicated Servers</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h6 className="text-white font-semibold mb-6">SCHOST Features</h6>
            <ul className="space-y-3">
              <li>
                <a href="#" className="footer-link">Data Center</a>
              </li>
              <li>
                <a href="#" className="footer-link">Control Panel</a>
              </li>
              <li>
                <a href="#" className="footer-link">Operating System</a>
              </li>
              <li>
                <a href="#" className="footer-link">Uptime Guarantee</a>
              </li>
              <li>
                <a href="#" className="footer-link">DDOS Protection</a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h6 className="text-white font-semibold mb-6">Company Info</h6>
            <ul className="space-y-3">
              <li>
                <a href="#" className="footer-link">About Us</a>
              </li>
              <li>
                <a href="#" className="footer-link">Partners</a>
              </li>
              <li>
                <a href="#" className="footer-link">Knowledgebase</a>
              </li>
              <li>
                <a href="#" className="footer-link">Contact Us</a>
              </li>
              <li>
                <a href="#" className="footer-link">News</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">&copy; 2024 SCHOST. All rights reserved</p>
          <div className="flex gap-6">
            <a href="#" className="footer-link text-sm">Terms &amp; Condition</a>
            <a href="#" className="footer-link text-sm">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}