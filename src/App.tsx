/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Approach } from './components/Approach';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Navbar } from './components/Navbar';
import { Philosophy } from './components/Philosophy';
import { Work } from './components/Work';
import { Marquee } from './components/Marquee';

export default function App() {
  useEffect(() => {
    // Prevent browser from restoring previous scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Scroll to top immediately on load
    window.scrollTo(0, 0);
    
    // If there's a hash in the URL, remove it without triggering a reload
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <main className="min-h-screen bg-ink text-paper selection:bg-paper selection:text-ink">
      <Intro />
      <Navbar />
      <Hero />
      <Philosophy />
      <Work />
      <Marquee />
      <Approach />
      <Contact />
    </main>
  );
}
