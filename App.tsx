import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { PORTFOLIO_DATA } from './constants';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const handleViewWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const heroItem = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Custom ease curve for "Playfair" elegance
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center px-6 pt-20 pb-10">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            variants={heroContainer}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={heroItem} className="text-lg md:text-xl mb-4 text-gray-500 italic">
              Hello, I am
            </motion.p>
            <motion.h1 variants={heroItem} className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              {PORTFOLIO_DATA.name}.
            </motion.h1>
            <motion.h2 variants={heroItem} className="text-2xl md:text-3xl font-light text-gray-800 mb-12 max-w-xl">
              {PORTFOLIO_DATA.title} based in {PORTFOLIO_DATA.location}.
            </motion.h2>
            <motion.div variants={heroItem} className="flex flex-wrap gap-8 items-center">
              <a 
                href="#projects" 
                onClick={handleViewWorkClick}
                className="border-b border-black pb-1 hover:text-gray-600 transition-colors text-sm uppercase tracking-widest"
              >
                View Work
              </a>
              <a 
                href={PORTFOLIO_DATA.socials.find(s => s.platform === 'LinkedIn')?.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-b border-transparent hover:border-black pb-1 transition-all text-sm uppercase tracking-widest text-gray-500 hover:text-black"
              >
                LinkedIn
              </a>
              <a 
                href={PORTFOLIO_DATA.socials.find(s => s.platform === 'GitHub')?.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-b border-transparent hover:border-black pb-1 transition-all text-sm uppercase tracking-widest text-gray-500 hover:text-black"
              >
                GitHub
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <div className="w-64 h-80 md:w-96 md:h-[500px] bg-white overflow-hidden flex items-center justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}assets/hritvikimage/ANMnL-UgGRAPhsgXK3EED.png`}
                alt="Hritvik Gupta" 
                className="object-contain w-full h-full grayscale"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" className="bg-gray-50">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-12 border-b border-gray-200 pb-4">About</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-lg leading-relaxed text-gray-700 whitespace-pre-line font-light">
            {PORTFOLIO_DATA.about}
            
            <div className="mt-8">
               <h4 className="text-xl italic mb-4">Education</h4>
               {PORTFOLIO_DATA.education.map((edu, i) => (
                 <div key={i} className="mb-2">
                   <p className="font-medium">{edu.degree}</p>
                   <p className="text-gray-600 font-light">{edu.institution}</p>
                   <p className="text-xs text-gray-400 mt-1">{edu.period}</p>
                 </div>
               ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl italic mb-6">Technical Arsenal</h4>
            <div className="space-y-6">
              {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{skillGroup.category}</h5>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map(skill => (
                      <span key={skill} className="px-3 py-1 border border-gray-200 text-sm hover:bg-black hover:text-white transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-12 border-b border-gray-200 pb-4">Experience</h3>
        <div className="space-y-16">
          {PORTFOLIO_DATA.experience.map((job) => (
            <div key={job.id} className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-1 text-sm text-gray-500 font-sans mt-1">
                {job.period}
              </div>
              <div className="md:col-span-3">
                <h4 className="text-2xl font-medium mb-1">{job.role}</h4>
                <div className="text-lg italic text-gray-600 mb-4">{job.company}</div>
                <ul className="list-disc list-outside ml-4 space-y-2 text-gray-700 font-light text-base leading-relaxed">
                  {job.description.map((desc, i) => {
                    // Check if description contains PLATLAS and render it as a link with image
                    if (desc.includes('PLATLAS')) {
                      const parts = desc.split('PLATLAS');
                      return (
                        <li key={i}>
                          {parts[0]}
                          <a 
                            href="https://platlas.cels.anl.gov/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-bold text-black hover:text-gray-700 inline-flex items-center gap-2 underline"
                          >
                            <img 
                              src={`${import.meta.env.BASE_URL}assets/plat.png`}
                              alt="PLATLAS" 
                              className="inline-block h-6 w-auto object-contain"
                            />
                            PLATLAS
                          </a>
                          {parts[1]}
                        </li>
                      );
                    }
                    return <li key={i}>{desc}</li>;
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-gray-50">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-12 border-b border-gray-200 pb-4">Selected Works</h3>
        <div className="grid grid-cols-1 gap-20">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div key={project.id} className="group block border-t border-transparent hover:border-gray-200 pt-4 transition-all">
              {/* Header: Title and Links */}
              <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-8">
                <h4 className="text-4xl font-medium group-hover:underline underline-offset-4 decoration-1">{project.title}</h4>
                <div className="flex gap-6 mt-3 md:mt-0">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest hover:text-gray-500 border-b border-transparent hover:border-gray-500 transition-colors">
                      GitHub
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest hover:text-gray-500 border-b border-transparent hover:border-gray-500 transition-colors">
                      Visit Site
                    </a>
                  )}
                </div>
              </div>

              {/* Media Showcase - Horizontal Scrollable */}
              {project.media && project.media.length > 0 && (
                <div className="mb-8 overflow-x-auto -mx-6 px-6">
                  <div className="flex gap-6 pb-4" style={{ scrollbarWidth: 'thin' }}>
                    {project.media.map((media, idx) => (
                      <div key={idx} className="flex-shrink-0 w-full md:w-[400px] aspect-video bg-gray-100 overflow-hidden relative border border-gray-100">
                        {media.type === 'video' ? (
                           <video 
                             src={`${import.meta.env.BASE_URL}${media.url.replace(/^\//, '')}`}
                             controls 
                             className="w-full h-full object-cover" 
                             poster={media.thumbnail ? `${import.meta.env.BASE_URL}${media.thumbnail.replace(/^\//, '')}` : undefined}
                           />
                        ) : (
                           <img 
                             src={`${import.meta.env.BASE_URL}${media.url.replace(/^\//, '')}`}
                             alt={`${project.title} screenshot ${idx + 1}`} 
                             className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out" 
                           />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Description & Tech */}
              <div className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-3">
                  <ul className="text-lg text-gray-700 font-light leading-relaxed mb-6 space-y-3">
                    {project.description.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-3 text-gray-400">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-1">
                   <div className="text-xs font-sans text-gray-400 uppercase tracking-wider leading-6">
                     {project.technologies.join(' · ')}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Research & Recognition Section */}
      <Section id="research">
         <h3 className="text-sm font-bold uppercase tracking-widest mb-12 border-b border-gray-200 pb-4">Research & Recognition</h3>
         
         <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h4 className="text-xl italic mb-6">Publications</h4>
              <ul className="space-y-4 font-light text-sm text-gray-700 leading-relaxed">
                {PORTFOLIO_DATA.publications.map((pub, i) => (
                  <li key={i}>
                    {pub.citation}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl italic mb-6">Awards</h4>
              <ul className="space-y-4 font-light text-sm text-gray-700 leading-relaxed">
                {PORTFOLIO_DATA.awards.map((award, i) => (
                  <li key={i}>
                    {award}
                  </li>
                ))}
              </ul>
            </div>
         </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="text-center py-20">
          <h2 className="text-4xl md:text-6xl font-medium mb-8">Let's connect.</h2>
          <p className="text-xl font-light text-gray-600 mb-12 max-w-xl mx-auto">
             Reach out for collaborations on scalable AI systems or innovative data solutions.
          </p>
          <a 
            href={`mailto:${PORTFOLIO_DATA.email}`}
            className="inline-block border border-black px-8 py-4 text-xs lowercase tracking-widest hover:bg-black hover:text-white transition-colors"
          >
            {PORTFOLIO_DATA.email}
          </a>
          
          <div className="mt-20 flex justify-center gap-8">
            {PORTFOLIO_DATA.socials.map(social => (
              <a 
                key={social.platform} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-widest hover:line-through decoration-1"
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </Section>

      <footer className="py-8 text-center text-xs text-gray-400 font-sans">
        &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.
      </footer>

    </div>
  );
};

export default App;