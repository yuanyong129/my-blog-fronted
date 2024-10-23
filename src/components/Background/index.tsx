import { FC, CSSProperties } from 'react'
import { getImage } from '@/assets'



interface IProps {
  src?: string
}

export default (({ src }) => {
  const BackgroundStyle: CSSProperties = {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    zIndex: -10,
    opacity: 0.12,
    filter: 'grayscale(100%)',
    top: 0,
    left: 0
  };
  const { BGDefaultImage } = getImage();
  return <div style={{...BackgroundStyle, backgroundImage: `url(${src || BGDefaultImage})`}} />
}) as FC<IProps>