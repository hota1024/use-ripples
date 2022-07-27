import { useRipples } from 'use-ripples'

const Button = ({
  color,
  rippleColor,
  textColor,
  children,
  shadowColor,
}: {
  color: string
  rippleColor: string
  textColor: string
  children: React.ReactNode
  shadowColor: string
}) => {
  const { createByEvent, Ripples } = useRipples({
    color: rippleColor,
  })

  return (
    <>
      <button
        tabIndex={1}
        style={{
          zIndex: 1,
          inset: 'all',
          position: 'relative',
          overflow: 'hidden',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: color,
          borderRadius: '8px',
          maxWidth: 128,
          width: '100%',
          height: '128px',
          margin: '8px',
          cursor: 'pointer',
          color: textColor,
          boxShadow: `0 0 16px ${shadowColor}`,
        }}
        onMouseDown={createByEvent}
      >
        {Ripples}
        {children}
      </button>
    </>
  )
}

export const SimpleUsage = () => {
  return (
    <div
      style={{
        paddingTop: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Button
        color="#0055ff"
        rippleColor="rgba(0, 0, 0, 0.5)"
        shadowColor="rgba(0, 33, 255, 0.5)"
        textColor="white"
      >
        Dark
      </Button>
      <Button
        color="#ff2200"
        rippleColor="rgba(255, 255, 255, 0.5)"
        shadowColor="rgba(255, 33, 0, 0.5)"
        textColor="white"
      >
        White
      </Button>
      <Button
        color="#00ff22"
        rippleColor="#0055ff"
        shadowColor="rgba(0, 255, 33, 0.5)"
        textColor="#202020"
      >
        Colored
      </Button>
    </div>
  )
}
