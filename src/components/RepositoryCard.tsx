import React, { ReactNode } from 'react'
import { default as NextLink } from 'next/link'

interface Props {
  to: string
  className?: string
  children: ReactNode
}

export function Link(props: Props) {
  const className = props.className ?? ''
  const isExternal = props.to.match(/^([a-z0-9]*:|.{0})\/\/.*$/)

  if (isExternal) {
    return (
      <a
        href={props.to}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    )
  }

  return (
    <NextLink href={props.to}>
      <a className={className}>{props.children}</a>
    </NextLink>
  )
}
