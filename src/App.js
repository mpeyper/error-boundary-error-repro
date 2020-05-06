import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { HasErrorInRender, HasErrorInEffect } from './HasError'

function Fallback({ error }) {
  return <p>An error was thrown: {error.message}</p>
}

function App() {
  return (
    <main>
      <ErrorBoundary FallbackComponent={Fallback} >
        <HasErrorInRender />
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={Fallback} >
        <HasErrorInEffect />
      </ErrorBoundary>
    </main>
  )
}

export default App
