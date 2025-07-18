'use client';

import Hero from './Hero';
import Nav from './Nav';
import Schedule from './Schedule';

export default function SmothScrollLenis() {
  return (
    <div className='bg-zinc-950'>
      <Nav />
      <Hero />
      <Schedule />
    </div>
  );
}
