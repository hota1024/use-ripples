import React, { MouseEvent, useState } from 'react'
import { Ripple, RippleProps } from '../components/Ripple'

/**
 * UseRipplesProps type.
 */
export type UseRipplesProps = {
  color?: string
  duration?: number
  maxRipples?: number
  centered?: boolean
}

/**
 * UseRipplesReturn type.
 */
export type UseRipplesReturn = {
  createByEvent(event: MouseEvent): void
  create(rippleProps: Omit<RippleProps, 'onFinish'>): void
  Ripples: JSX.Element[]
}

/**
 * UseRipples type.
 */
export type UseRipples = (props?: UseRipplesProps) => UseRipplesReturn

/**
 * use ripples.
 */
export const useRipples: UseRipples = ({
  color,
  duration,
  maxRipples: max,
  centered,
} = {}) => {
  const [ripples, setRipples] = useState<JSX.Element[]>([])
  const [id, setId] = useState(0)

  const createByClick: UseRipplesReturn['createByEvent'] = (e) => {
    const { clientX, clientY } = e
    const el = e.currentTarget instanceof Element ? e.currentTarget : null
    const { width, height, left, top } = el
      ? el.getBoundingClientRect()
      : { width: 0, height: 0, left: 0, top: 0 }

    if (centered) {
      create({
        x: width / 2,
        y: height / 2,
        size: Math.sqrt(width ** 2 + height ** 2),
      })

      return
    }

    const x = Math.round(clientX - left)
    const y = Math.round(clientY - top)

    const sizeX = Math.max(width - x, x) * 2 + 2
    const sizeY = Math.max(height - y, y) * 2 + 2
    const size = Math.sqrt(sizeX ** 2 + sizeY ** 2)

    create({ x, y, size })
  }

  const create: UseRipplesReturn['create'] = (p) => {
    if (max && ripples.length >= max) {
      return
    }

    setRipples((r) => {
      const ripple = (
        <Ripple
          key={id}
          {...p}
          color={color ?? p.color}
          duration={duration ?? p.duration}
          onFinish={() => {
            setRipples((ripples) => ripples.filter((r) => r !== ripple))
          }}
        />
      )

      setId((id) => id + 1)

      return [...r, ripple]
    })
  }

  return {
    createByEvent: createByClick,
    create,
    Ripples: ripples,
  }
}
