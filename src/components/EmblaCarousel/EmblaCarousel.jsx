import React, { useCallback, useEffect, useRef, useState } from 'react'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons.jsx'
import { DotButton, useDotButton } from './EmblaCarouselDotButton.jsx'
import { LazyLoadImage } from "react-lazy-load-image-component";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import ImageModal from "../ImageModal/ImageModal.jsx";
import './EmblaCarousel.css';

const TWEEN_FACTOR_BASE = 0.2

const EmblaCarousel = (props) => {
    const autoplay = Autoplay({
        delay: 2500,
        stopOnInteraction: false,
        stopOnMouseEnter: true
    })
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay])
    const tweenFactor = useRef(0)
    const tweenNodes = useRef([])

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
    const [selectedImg, setSelectedImg] = useState(null)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const setTweenNodes = useCallback((emblaApi) => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector('.embla__parallax__layer')
        })
    }, [])

    const setTweenFactor = useCallback((emblaApi) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenParallax = useCallback((emblaApi, eventName) => {
        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()
        const slidesInView = emblaApi.slidesInView()
        const isScrollEvent = eventName === 'scroll'

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress
            const slidesInSnap = engine.slideRegistry[snapIndex]

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target()

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target)

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress)
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress)
                            }
                        }
                    })
                }

                const translate = diffToTarget * (-1 * tweenFactor.current) * 100
                const tweenNode = tweenNodes.current[slideIndex]
                tweenNode.style.transform = `translateX(${translate}%)`
            })
        })
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        setTweenNodes(emblaApi)
        setTweenFactor(emblaApi)
        tweenParallax(emblaApi)

        emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenParallax)
            .on('scroll', tweenParallax)
            .on('slideFocus', tweenParallax)
    }, [emblaApi, tweenParallax])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((s, i) => (
                        <div className="embla__slide" key={s.id}>
                            <div className="embla__parallax">
                                <div className="embla__parallax__layer">
                                    <LazyLoadImage
                                        src={s.url}
                                        effect="blur"
                                        wrapperClassName="lazy-wrapper"
                                        className="embla__slide__img embla__parallax__img"
                                        onClick={() => setSelectedImg(s.url)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>

            <ImageModal
                img={selectedImg}
                onClose={() => setSelectedImg(null)}
            />
        </div>
    )
}

export default EmblaCarousel
