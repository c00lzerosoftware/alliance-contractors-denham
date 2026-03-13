import { useState } from 'react';

/* ───────────────────────── DATA ───────────────────────── */

const services = [
  {
    title: 'Residential Remodeling',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    description: 'Transform your home with expert craftsmanship. From dream kitchens to spa-like bathrooms and stunning outdoor living spaces.',
    items: ['Kitchen Remodeling', 'Bathroom Renovations', 'Outdoor Living Spaces', 'Home Additions', 'Interior Renovations', 'Flooring Installation'],
  },
  {
    title: 'Commercial Contracting',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    description: 'Professional commercial build-outs and renovations. Restaurant conversions, office spaces, and specialty subcontracting.',
    items: ['Restaurant Conversions', 'Office Build-Outs', 'Retail Renovations', 'Specialty Subcontracting', 'Structural Upgrades', 'Commercial Kitchens'],
  },
  {
    title: 'Handyman & Repair',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
    description: 'No job too small. Reliable repair services for electrical, plumbing, drywall, carpentry, and emergency fixes.',
    items: ['Minor Repairs', 'Electrical & Wiring', 'Plumbing Repairs', 'Drywall & Finishing', 'Custom Carpentry', 'Emergency Services'],
  },
];

const projects = [
  { title: 'Modern Kitchen Transformation', category: 'Kitchens', location: 'Denham Springs', description: 'Complete gut renovation with custom cabinetry, quartz countertops, and chef-grade appliances.' },
  { title: 'Luxury Outdoor Kitchen', category: 'Outdoor Kitchens', location: 'Baton Rouge', description: 'Custom-built outdoor kitchen with granite island, built-in grill, and covered patio.' },
  { title: 'Spa Bathroom Retreat', category: 'Bathrooms', location: 'Zachary', description: 'Master bath renovation featuring walk-in shower, freestanding tub, and heated floors.' },
  { title: 'Restaurant Build-Out', category: 'Commercial', location: 'Baton Rouge', description: 'Full commercial conversion from retail space to a 120-seat restaurant with commercial kitchen.' },
  { title: 'Open Concept Living', category: 'Home Additions', location: 'Denham Springs', description: 'Removed load-bearing walls and expanded living area with vaulted ceilings and custom built-ins.' },
  { title: 'Farmhouse Kitchen Remodel', category: 'Kitchens', location: 'Walker', description: 'Classic farmhouse-style kitchen with shaker cabinets, butcher block island, and subway tile.' },
];

const testimonials = [
  { name: 'Sarah M.', location: 'Denham Springs', project: 'Kitchen Remodel', text: 'Alliance Contractors transformed our outdated kitchen into a chef\'s dream. Mark and his team were professional, clean, and delivered exactly as promised. The quality of craftsmanship is outstanding.' },
  { name: 'James & Linda R.', location: 'Baton Rouge', project: 'Outdoor Kitchen', text: 'Our outdoor kitchen is the envy of the neighborhood. From design to completion, the Alliance team exceeded every expectation. We\'ve already recommended them to three friends.' },
  { name: 'David T.', location: 'Zachary', project: 'Bathroom Renovation', text: 'Mark\'s attention to detail is incredible. Our master bathroom feels like a five-star spa. On time, on budget, and the communication throughout was excellent.' },
  { name: 'Patricia K.', location: 'Walker', project: 'Home Addition', text: 'We needed more space for our growing family. Alliance seamlessly added a beautiful new living area that perfectly matches our existing home. You can\'t tell where the old house ends and the new begins.' },
];

const faqs = [
  { q: 'Do you provide free estimates?', a: 'Yes! We offer free, detailed quotes for all projects. We can provide estimates based on a site visit or detailed photos of your space.' },
  { q: 'Are you licensed and insured?', a: 'Absolutely. Alliance Contractors is fully insured and background checked. We maintain all required credentials to protect our clients and their properties.' },
  { q: 'What areas do you serve?', a: 'We proudly serve Denham Springs, Baton Rouge, Zachary, Walker, Livingston, and the surrounding parishes in the Greater Baton Rouge area.' },
  { q: 'What is your typical project timeline?', a: 'Timelines vary by scope: Kitchen remodels typically take 2-4 weeks, bathrooms 1-2 weeks, and outdoor kitchens 1-3 weeks. We\'ll provide a detailed timeline with your quote.' },
  { q: 'Do you handle permits?', a: 'Yes. We obtain all necessary permits for your project so you don\'t have to worry about compliance or inspections.' },
  { q: 'What payment methods do you accept?', a: 'We accept cash, check, credit card, Square Cash App, Venmo, and Zelle for your convenience.' },
  { q: 'Do you provide warranties?', a: 'Yes. All workmanship is backed by our quality guarantee. Material warranties vary by manufacturer and are passed through to you.' },
  { q: 'Can you provide references?', a: 'Of course. We\'re happy to provide references from recent clients in your area so you can hear firsthand about their experience.' },
];

const categories = ['All', 'Kitchens', 'Bathrooms', 'Outdoor Kitchens', 'Commercial', 'Home Additions'];

/* ───────────────────────── COMPONENTS ───────────────────────── */

function Header() {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'Services', 'Portfolio', 'About', 'Testimonials', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded bg-gold flex items-center justify-center">
              <span className="text-navy font-heading font-extrabold text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-heading font-bold text-lg tracking-tight">Alliance</span>
              <span className="text-gold font-heading font-bold text-lg tracking-tight ml-1">Contractors</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-gold transition-colors">
                {l}
              </a>
            ))}
            <a href="tel:2255000608" className="ml-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors">
              (225) 500-0608
            </a>
            <a href="#contact" className="ml-3 px-5 py-2.5 bg-gold text-navy font-heading font-bold text-sm rounded hover:bg-gold-light transition-colors">
              Get a Free Quote
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a href="tel:2255000608" className="text-gold font-semibold text-sm">(225) 500-0608</a>
            <button onClick={() => setOpen(!open)} className="text-white p-2" aria-label="Toggle menu">
              {open ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden bg-navy-dark border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-gold transition-colors">
                {l}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block mt-2 px-5 py-2.5 bg-gold text-navy font-heading font-bold text-sm rounded text-center">
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-navy overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-90" />
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="text-gold text-sm font-medium">Veteran-Owned &middot; Serving Since 1992</span>
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight tracking-tight">
          32 Years of Excellence in{' '}
          <span className="text-gold">General Contracting</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Serving Denham Springs &amp; Greater Baton Rouge with pride, professionalism, and quality craftsmanship.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 bg-gold text-navy font-heading font-bold text-lg rounded-lg hover:bg-gold-light transition-all shadow-lg shadow-gold/25 hover:shadow-gold/40">
            View Our Work
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-heading font-bold text-lg rounded-lg hover:bg-white/10 transition-all">
            Get a Free Estimate
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { icon: '★', label: 'Veteran-Owned' },
            { icon: '🎓', label: 'LSU Graduate' },
            { icon: '✓', label: 'Background Checked' },
            { icon: '🛡', label: 'Fully Insured' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <span className="text-gold text-lg">{badge.icon}</span>
              <span className="text-white text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-heading font-bold text-sm tracking-widest uppercase">What We Do</span>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-800 tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            From residential remodels to commercial build-outs, Alliance Contractors delivers quality craftsmanship across every project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-gold transition-colors">
                {s.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-800 mb-3">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-5">{s.description}</p>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-slate-50 rounded-2xl p-8 lg:p-12">
          <p className="text-lg text-slate-600">Not sure which service you need?</p>
          <a href="#contact" className="inline-block mt-4 px-8 py-3 bg-navy text-white font-heading font-bold rounded-lg hover:bg-navy-light transition-colors">
            Contact Us for a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  // Generate a deterministic gradient for each project card
  const gradients = [
    'from-navy to-navy-light',
    'from-amber-700 to-amber-900',
    'from-slate-600 to-slate-800',
    'from-navy-dark to-navy',
    'from-stone-600 to-stone-800',
    'from-navy-light to-navy',
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold font-heading font-bold text-sm tracking-widest uppercase">Our Work</span>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-800 tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Browse our portfolio of residential and commercial projects throughout Greater Baton Rouge.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-navy text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-navy/5 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div key={p.title} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className={`aspect-[4/3] bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center`}>
                <div className="text-center p-6">
                  <svg className="w-12 h-12 text-white/30 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <span className="text-white/50 text-sm font-medium">Project Photo</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 bg-gold/10 text-gold-dark text-xs font-semibold rounded-full">{p.category}</span>
                  <span className="text-xs text-slate-400">{p.location}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-800 mb-2 group-hover:text-navy transition-colors">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const values = [
    { title: 'Integrity', desc: 'Honest quotes, transparent pricing, no hidden fees. We treat every project like it\'s our own home.' },
    { title: 'Quality', desc: '"Do it right the first time" \u2014 premium materials and skilled craftsmanship on every job.' },
    { title: 'Reliability', desc: 'On-time completion, clear communication, and total respect for your home and family.' },
  ];

  const reasons = [
    'Background Checked & Fully Insured',
    'Free, Detailed Estimates',
    '32 Years of Proven Experience',
    'Local & Trusted (Denham Springs)',
    'Attention to Detail',
    'Customer Satisfaction Guarantee',
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Story */}
          <div>
            <span className="text-gold font-heading font-bold text-sm tracking-widest uppercase">Our Story</span>
            <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-800 tracking-tight">
              Trusted for 32 Years
            </h2>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Founded in 1992 by Mark Perkins, an LSU graduate and proud U.S. Veteran, Alliance Contractors began as a one-man operation with a simple promise: deliver exceptional craftsmanship and stand behind every project.
              </p>
              <p>
                Over three decades, that promise has grown into a trusted 3-person team serving Denham Springs and the Greater Baton Rouge area. From kitchen remodels to commercial build-outs, we bring the same dedication, honesty, and attention to detail to every job.
              </p>
              <p>
                Our commitment to the community runs deep. As a veteran-owned business, integrity isn't just a value &mdash; it's the foundation of everything we do.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title}>
                  <h4 className="font-heading font-bold text-lg text-navy">{v.title}</h4>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image placeholder + credentials */}
          <div className="space-y-6">
            <div className="aspect-[4/3] bg-gradient-to-br from-navy to-navy-light rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-white/20 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span className="text-white/40 text-sm font-medium">Team Photo</span>
              </div>
            </div>

            {/* Credential badges */}
            <div className="grid grid-cols-3 gap-3">
              {['BBB Accredited', 'Background Checked', 'Fully Insured'].map((badge) => (
                <div key={badge} className="bg-slate-50 rounded-xl p-4 text-center">
                  <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-slate-700">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h3 className="text-center font-heading font-extrabold text-2xl sm:text-3xl text-slate-800 mb-12">
            Why Choose Alliance Contractors?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((r) => (
              <div key={r} className="flex items-center gap-3 bg-slate-50 rounded-xl px-6 py-4">
                <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium text-slate-700">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-heading font-bold text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Don't just take our word for it &mdash; hear from homeowners and businesses throughout Greater Baton Rouge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/90 leading-relaxed text-lg italic">"{t.text}"</p>

              {/* Attribution */}
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-gold font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.location} &middot; {t.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '', referral: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-heading font-bold text-sm tracking-widest uppercase">Contact Us</span>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-800 tracking-tight">
            Get Your Free Estimate
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Ready to start your project? Contact us today for a free, no-obligation consultation and detailed quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl text-slate-800 mb-2">Thank You!</h3>
                <p className="text-slate-600">We've received your request and will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors" placeholder="John Smith" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors" placeholder="(225) 555-0123" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">Service Interest</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors bg-white">
                      <option value="">Select a service...</option>
                      <option>Kitchen Remodeling</option>
                      <option>Bathroom Renovation</option>
                      <option>Outdoor Kitchen</option>
                      <option>Commercial Project</option>
                      <option>Handyman / Repair</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Project Details *</label>
                  <textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors resize-y" placeholder="Tell us about your project..." />
                </div>
                <div className="mt-5">
                  <label htmlFor="referral" className="block text-sm font-medium text-slate-700 mb-1.5">How did you hear about us?</label>
                  <select id="referral" name="referral" value={formData.referral} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors bg-white">
                    <option value="">Select...</option>
                    <option>Google Search</option>
                    <option>Thumbtack</option>
                    <option>Referral</option>
                    <option>Facebook</option>
                    <option>Other</option>
                  </select>
                </div>
                <button type="submit" className="mt-6 w-full px-8 py-4 bg-gold text-navy font-heading font-bold text-lg rounded-lg hover:bg-gold-light transition-colors shadow-lg shadow-gold/20">
                  Request Free Quote
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-heading font-bold text-xl text-slate-800 mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <a href="tel:2255000608" className="flex items-center gap-3 group">
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-colors">
                    <svg className="w-5 h-5 text-navy group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Call Us</p>
                    <p className="font-semibold text-slate-800">(225) 500-0608</p>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Office Hours</p>
                    <p className="font-semibold text-slate-800">Mon-Fri 8am-6pm, Sat by appt</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="font-semibold text-slate-800">Denham Springs, LA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy rounded-2xl p-6 text-center">
              <p className="text-gold font-heading font-bold text-lg mb-1">Response Guarantee</p>
              <p className="text-slate-300 text-sm">We respond to all inquiries within 24 hours</p>
            </div>

            {/* Service area */}
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-800 mb-3">Service Area</h3>
              <div className="flex flex-wrap gap-2">
                {['Denham Springs', 'Baton Rouge', 'Zachary', 'Walker', 'Livingston', 'Central'].map((city) => (
                  <span key={city} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-600">{city}</span>
                ))}
              </div>
              <p className="mt-3 text-sm text-slate-500">Not in our service area? Contact us &mdash; we may be able to accommodate your project.</p>
            </div>

            {/* Payment methods */}
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-800 mb-3">Payment Methods</h3>
              <div className="flex flex-wrap gap-2">
                {['Cash', 'Check', 'Credit Card', 'Square', 'Venmo', 'Zelle'].map((m) => (
                  <span key={m} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-600">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold font-heading font-bold text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl text-slate-800 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-medium text-slate-800 pr-4">{faq.q}</span>
                <svg className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openIdx === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-4">
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-gold flex items-center justify-center">
                <span className="text-navy font-heading font-extrabold text-sm">A</span>
              </div>
              <span className="font-heading font-bold text-lg">Alliance <span className="text-gold">Contractors</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              32 Years of Excellence in General Contracting. Proudly serving Denham Springs and Greater Baton Rouge since 1992.
            </p>
          </div>

          {/* Col 2: Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-slate-400 hover:text-white text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-gold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Kitchen Remodeling', 'Bathroom Renovations', 'Outdoor Kitchens', 'Commercial Projects', 'Handyman Services'].map((s) => (
                <li key={s}><a href="#services" className="text-slate-400 hover:text-white text-sm transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-gold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                Denham Springs, LA
              </li>
              <li>
                <a href="tel:2255000608" className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  (225) 500-0608
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
            <p>&copy; 2026 Alliance Contractors. All rights reserved.</p>
            <p>Proudly serving Denham Springs &amp; Greater Baton Rouge since 1992</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────── APP ───────────────────────── */

export default function App() {
  return (
    <div className="font-body">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}
