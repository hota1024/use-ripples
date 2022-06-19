import React, { CSSProperties, useEffect, useRef } from 'react'

/**
 * Ripple props.
 */
export type RippleProps = {
  onFinish(): void
  x: number
  y: number
  size: number
  color?: string
  duration?: number
}

/**
 * Ripple component.
 */
export const Ripple: React.VFC<RippleProps> = ({
  onFinish,
  x,
  y,
  size,
  color,
  duration,
}) => {
  const ref = useRef<HTMLSpanElement>(null)

  duration = duration ?? 600
  color = color ?? 'white'

  const style: CSSProperties = {
    position: 'absolute',
    background: color,
    borderRadius: '50%',
    width: '1px',
    height: '1px',
    left: x,
    top: y,
    pointerEvents: 'none',
  }

  useEffect(() => {
    const { current } = ref
    if (current) {
      current
        .animate(
          [
            {
              opacity: 1,
            },
            {
              opacity: 0,
              transform: `scale(${size})`,
            },
          ],
          { duration, fill: 'forwards', easing: 'ease-out' }
        )
        .addEventListener('finish', onFinish)
    }
  }, [ref])

  return <span {...{ ref, style }} />
}
