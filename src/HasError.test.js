import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
// import { render } from '@testing-library/react'
import { create, act } from 'react-test-renderer'
import { HasErrorInRender, HasErrorInEffect } from './HasError'

// describe('@testing-library/react', () => {
//   test('should catch error in render', () => {
//     let err = null
//     function Fallback({ error }) {
//       err = error
//       return <p>An error was thrown</p>
//     }

//     render((
//       <ErrorBoundary FallbackComponent={Fallback}>
//         <HasErrorInRender />
//       </ErrorBoundary>
//     ))

//     expect(err).toEqual(Error("This error was expected"))
//   })

//   test('should catch error in effect', () => {
//     let err = null
//     function Fallback({ error }) {
//       err = error
//       return <p>An error was thrown</p>
//     }

//     render((
//       <ErrorBoundary FallbackComponent={Fallback}>
//         <HasErrorInEffect />
//       </ErrorBoundary>
//     ))

//     expect(err).toEqual(Error("This error was expected"))
//   })
// })

describe('react-test-renderer', () => {
  test('should catch error in render', () => {
    let err = null
    function Fallback({ error }) {
      err = error
      return <p>An error was thrown</p>
    }

    act(() => {
      create((
        <ErrorBoundary FallbackComponent={Fallback}>
          <HasErrorInRender />
        </ErrorBoundary>
      ))
    })

    expect(err).toEqual(Error("This error was expected"))
  })

  test('should catch error in effect', () => {
    let err = null
    function Fallback({ error }) {
      err = error
      return <p>An error was thrown</p>
    }

    act(() => {
      create((
        <ErrorBoundary FallbackComponent={Fallback}>
          <HasErrorInEffect />
        </ErrorBoundary>
      ))
    })

    expect(err).toEqual(Error("This error was expected"))
  })
})