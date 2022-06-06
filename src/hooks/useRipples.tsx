import React, { MouseEvent } from 'react'
import { Ripple, RippleProps } from '../components/Ripple'

/**
 * UseRipplesProps type.
 */
export type UseRipplesProps = {
  color?: string
  duration?: number
  maxRipples?: number
}

/**
 * UseRipplesReturn type.
 */
export type UseRipplesReturn = {
  createByClick(event: MouseEvent<HTMLElement>): void
  create(rippleProps: Omit<RippleProps, 'onFinish'>): void
  Ripples: JSX.Element[]
}

/**
 * UseRipples type.
 */
export type UseRipples = (props: UseRipplesProps) => UseRipplesReturn

/**
 * use ripples.
 */
export const useRipples: UseRipples = ({
  color,
  duration,
  maxRipples: max,
}) => {
  const [ripples, setRipples] = React.useState<JSX.Element[]>([])

  const createByClick: UseRipplesReturn['createByClick'] = (e) => {
    const {
      clientX,
      clientY,
      currentTarget: { offsetLeft, offsetTop },
    } = e
    const { width, height } = e.currentTarget.getBoundingClientRect()

    const x = clientX - offsetLeft
    const y = clientY - offsetTop
    const size = Math.max(x, y, width - x, height - y) * 2.2

    create({ x, y, size })
  }

  const create: UseRipplesReturn['create'] = (p) => {
    if (max && ripples.length >= max) {
      return
    }

    setRipples((r) => {
      const ripple = (
        <Ripple
          key={r.length}
          {...p}
          color={color ?? p.color}
          duration={duration ?? p.duration}
          onFinish={() => {
            setRipples((ripples) => ripples.filter((r) => r !== ripple))
          }}
        />
      )

      return [...r, ripple]
    })
  }

  return {
    createByClick,
    create,
    Ripples: ripples,
  }
}
