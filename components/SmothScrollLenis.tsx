'use client';

import Hero from './Hero';
import Nav from './Nav';

export default function SmothScrollLenis() {
  return (
    <div className='bg-zinc-950'>
      <Nav />
      <Hero />
      <div className='h-screen' />
    </div>
  );
}
