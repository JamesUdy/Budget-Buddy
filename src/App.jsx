import React, {useEffect, useRef} from 'react'
import Header from './components/Header/Header'
import Details from './components/Details/Details'
import MainContent from './components/MainContent/MainContent'
import {PushToTalkButton, PushToTalkButtonContainer} from '@speechly/react-ui'
import './App.css' 

function App() {


  return (
    <>
      <Header />
      <div className='flex-container gap-6 lg:gap-4 xl:gap-10 xl:px-[3%] xl:top-[10%] 2xl:top-0 place-items-center justify-center mb-4'>
        <div className="flex-item"><Details type="Income"/></div>
        <div className="flex-item"><MainContent type="main" /></div>
        <div  className="flex-item"><Details type="Expense"/></div>
      </div>
      <PushToTalkButtonContainer>
        <PushToTalkButton size='4.8rem' placement="bottom"  captureKey=" " intro="Push to talk"></PushToTalkButton>
      </PushToTalkButtonContainer>
    </>
  )
}

export default App


