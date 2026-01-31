import { NavLink } from 'react-router';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import Acurve from '../svgs/Acurve';
import { TextAnimate } from '../ui/text-animate';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '/service/custom-web-development' },
      { name: 'Cloud service', href: '/service/cloud-migration-hosting' },
      { name: 'Digital Marketing', href: '/services/digital-marketing' },
      { name: 'Graphic Design', href: '/service/graphic-design' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    // { icon: Github, href: 'https://github.com', label: 'Github' }
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <Acurve />
              <span className="text-white text-2xl font-bold">Acurve</span>
            </div>

            <p className="text-white/60 mb-8 leading-relaxed max-w-sm">
              Building resilient digital infrastructure that defines industry leaders.
              From strategy to execution.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:contact@acurve.in" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">contact@acurve.in</span>
              </a>

              <a href="tel:+1234567890" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+91 9173355608</span>
              </a>

              <div className="flex items-center gap-3 text-white/60">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Jamnagar, Gujarat, india</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm block"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          {/* <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm block"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Legal */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm block"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='w-full sm:p-6'>
          <h1 className='lg:text-[224px] flex md:text-[180px] sm:text-8xl text-7xl text-center font-bold '>
            <TextAnimate animation='slideUp' startOnView={true}  duration={0.7} by='character' className='w-full text-center'>

              ACURVE
            </TextAnimate>
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-white/40 text-sm">
            © {currentYear} Acurve. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}