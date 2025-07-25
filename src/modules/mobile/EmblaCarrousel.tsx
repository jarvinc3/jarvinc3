import type { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useEffect, useRef } from 'react';
import { DotButton, useDotButton } from './EmblaCarrouselDotButton';

type PropType = {
   slides: number[]
   options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
   const { slides, options } = props
   const [emblaRef, emblaApi] = useEmblaCarousel(options)
   const viewportRef = useRef<HTMLDivElement>(null)

   const { selectedIndex, scrollSnaps, onDotButtonClick } =
      useDotButton(emblaApi)

   useEffect(() => {
      if (!emblaApi || !viewportRef.current) return

      let isScrollingAllowed = true
      let timeoutId: number | null = null

      const handleWheel = (event: WheelEvent) => {
         if (!isScrollingAllowed || Math.abs(event.deltaY) < 10) return

         if (event.deltaY > 0) {
            emblaApi.scrollNext()
         } else {
            emblaApi.scrollPrev()
         }

         isScrollingAllowed = false
         timeoutId = window.setTimeout(() => {
            isScrollingAllowed = true
         }, 600)
      }

      const viewport = viewportRef.current
      viewport.addEventListener('wheel', handleWheel)

      return () => {
         viewport.removeEventListener('wheel', handleWheel)
         if (timeoutId) clearTimeout(timeoutId)
      }
   }, [emblaApi])

   return (
      <section className="embla">
         <div
            className="embla__viewport"
            ref={(el) => {
               emblaRef(el)
               viewportRef.current = el
            }}
         >
            <div className="embla__container">
               {slides.map((index) => (
                  <div className="embla__slide" key={index}>
                     <div className="embla__slide__number">{index + 1}</div>
                  </div>
               ))}
            </div>
         </div>

         <div className="embla__controls">
            <div className="embla__dots">
               {scrollSnaps.map((_, index) => (
                  <div className="embla__dot_container">
                     <div className="embla_dot_separator"></div>
                     <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'embla__dot'.concat(
                           index === selectedIndex ? ' embla__dot--selected' : ''
                        )}
                     />
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default EmblaCarousel
