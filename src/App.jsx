import { useState, Suspense, lazy } from 'react'
import './App.css';
// import Form from './Form';
const Form = lazy(() => import('./Form'));

function App() {

  return (
    <>
      <Suspense fallback={
        <>
          <div className='flex justify-center items-center h-screen'>
            <div className="flex flex-row gap-2">
              <div className="lg:h-8 lg:w-8 w-5.5 h-5.5 md:h-6.5 md:w-6.5 rounded-full bg-blue-500 animate-bounce"></div>
              <div className="w-5.5 h-5.5 md:h-6.5 md:w-6.5 lg:h-8 lg:w-8 rounded-full bg-yellow-400 animate-bounce [animation-delay:-.2s]"></div>
              <div className="w-5.5 h-5.5 md:h-6.5 md:w-6.5 lg:h-8 lg:w-8 rounded-full bg-green-500 animate-bounce [animation-delay:-.4s]"></div>
            </div>
          </div>
        </>
      }>
        <Form />
      </Suspense>
    </>
  )
}

export default App
