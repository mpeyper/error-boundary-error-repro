import React, { useEffect } from 'react'

export function HasErrorInRender() {
  throw Error("This error was expected")
}

export function HasErrorInEffect() {
  useEffect(() => {
    throw Error("This error was expected")
  })

  return <p>This component has an error in an effect</p>
}