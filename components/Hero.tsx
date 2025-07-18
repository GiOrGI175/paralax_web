import CenterImage from './CenterImage';
import ParalaxImages from './ParalaxImages';
import Schedule from './Schedule';

const SECTION_HEIGH = 1200;

export default function Hero() {
  return (
    <div
      className='relative w-full'
      style={{ height: `calc(${SECTION_HEIGH}px + 100vh)` }}
    >
      <CenterImage />
      <ParalaxImages />
      <Schedule />
    </div>
  );
}
