import React, {useEffect, useRef} from 'react'
import Header from './components/Header/Header'
import Details from './components/Details/Details'
import MainContent from './components/MainContent/MainContent'
import {PushToTalkButton, PushToTalkButtonContainer, ErrorPanel} from '@speechly/react-ui'
import { SpeechState, useSpeechContext } from '@speechly/react-client'
import './App.css' 

function App() {

  // const {speechState} = useSpeechContext()

  // const main = useRef(null)

  // const executeScroll = () => main.current.scrollIntoView()

  // useEffect(() => {
  //   if(speechState === SpeechState.Recording )  {
  //     executeScroll()
  //   }
  // }, [speechState])

  return (
    <>
      <Header />
      <div className='flex-container gap-10 xl:left-[4%] 2xl:left-[38%] xl:absolute xl:top-[25%] h-[100v] place-items-center justify-center mb-4'>
        <div className="flex-item"><Details type="Income"/></div>
        <div  className="flex-item"><MainContent type="main" /></div>
        <div  className="flex-item"><Details type="Expense"/></div>
      </div>
      <PushToTalkButtonContainer>
        <PushToTalkButton size='4.8rem' placement="bottom" powerOn='auto' captureKey=" " intro="Push to talk"></PushToTalkButton>
            {/* <ErrorPanel /> */}
      </PushToTalkButtonContainer>
    </>
  )
}

export default App


