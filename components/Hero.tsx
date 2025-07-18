import CenterImage from './CenterImage';
import ParalaxImages from './ParalaxImages';

const SECTION_HEIGH = 1200;

export default function Hero() {
  return (
    <div
      className='relative w-full'
      style={{ height: `calc(${SECTION_HEIGH}px + 100vh)` }}
    >
      <CenterImage />
      <ParalaxImages />

      <div className='absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950' />
    </div>
  );
}
