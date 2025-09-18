import React from 'react'

export function Image(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { src, alt, style, className, ...rest } = props

  return <img src={src} alt={alt} className={className} style={style} {...rest} />
}
