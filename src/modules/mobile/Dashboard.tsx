import type { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from './EmblaCarrousel';

const OPTIONS: EmblaOptionsType = {
   axis: 'y',
   align: 'start',
   dragFree: true,
   loop: true
}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const DashboardMobile = () => {
   return (
      <>
         <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </>
   )
}
