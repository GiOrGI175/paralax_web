import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { SiSpacex } from 'react-icons/si';

export default function Nav() {
  return (
    <nav className=' fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py3 text-white'>
      <SiSpacex className='text-3xl' />
      <button
        onClick={() => {
          document
            .getElementById('launch-schedule')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
        className='flex items-center gap-1 text-xs text-zinc-400'
      >
        LAUNCH SCHEDULE <FiArrowRight />
      </button>
    </nav>
  );
}
