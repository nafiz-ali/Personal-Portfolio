
import React, { useState } from 'react';
import Section from './Section';
import { SECTION_IDS } from '../constants';

const Contact: React.FC = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate form submission
    setTimeout(() => {
      setStatus('Message sent successfully!');
      // Reset form fields
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus(''), 3000);
    }, 2000);
  };

  return (
    <Section id={SECTION_IDS.contact} title="Get In Touch">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-400 mb-8">
          Have a project in mind or just want to say hello? My inbox is always open.
          I'll get back to you as soon as possible!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              className="w-full bg-gray-900/50 border border-purple-500/30 rounded-md p-3 text-white transition-all duration-300 input-glow"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              className="w-full bg-gray-900/50 border border-purple-500/30 rounded-md p-3 text-white transition-all duration-300 input-glow"
            />
          </div>
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows={6} 
            required
            className="w-full bg-gray-900/50 border border-purple-500/30 rounded-md p-3 text-white transition-all duration-300 input-glow"
          ></textarea>
          <button 
            type="submit"
            className="bg-cyan-600 text-white font-bold py-3 px-10 rounded-full text-lg transition-all duration-300 button-glow w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status === 'Sending...'}
          >
            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {status && status !== 'Sending...' && (
          <p className="mt-6 text-green-400 text-glow">{status}</p>
        )}
      </div>
    </Section>
  );
};

export default Contact;
