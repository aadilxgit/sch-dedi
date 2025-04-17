import React from 'react';

export default function Footer() {
  return (
    <>
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#656fe4] to-[#7964e4]">
        <div className="container mx-auto px-4">
          <div className="py-5 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-white">
              <h3 className="text-3xl font-medium">
                Questions? <span className="font-bold">Let&apos;s chat.</span>
              </h3>
              <p className="text-white/80 mt-2">Get in touch with our support team</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <a 
                href="mailto:contact@rackgeni.us" 
                className="bg-white w-[280px] px-6 py-4 rounded-xl font-medium text-[#141418] hover:bg-[#f8f9fa] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-3"
              >
                <div className="w-5 h-5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <path d="M22 6l-10 7L2 6"/>
                  </svg>
                </div>
                <span className="font-medium">Email Support</span>
              </a>
              <a 
                href="#" 
                className="bg-white w-[280px] px-6 py-4 rounded-xl font-medium text-[#141418] hover:bg-[#f8f9fa] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-3"
              >
                <div className="w-5 h-5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <span className="font-medium">Live Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Existing Footer Code */}
      <footer className="pt-16 pb-6 bg-zinc-950 border-t border-white/20 footer-section">
        <style>{`
          .footer-link {
            position: relative;
            color: #9ca3af;
            transition: color 0.3s;
            display: inline-block;
          }
          .footer-link:hover {
            background: linear-gradient(to right, #656fe4, #7964e4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .footer-link::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 0;
            height: 1px;
            background: linear-gradient(to right, #656fe4, #7964e4);
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
          .brand-text {
            background: linear-gradient(to right, #656fe4, #7964e4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Column 1 */}
            <div>
              <div className="text-2xl font-bold mb-4 brand-text">RACKGENIUS</div>
              <p className="text-zinc-400 mb-6">
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
            <p className="text-zinc-400 text-sm">&copy; 2024 RackGenius. All rights reserved</p>
            <div className="flex gap-6">
              <a href="#" className="footer-link text-sm">Terms &amp; Condition</a>
              <a href="#" className="footer-link text-sm">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}