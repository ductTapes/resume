import React, { createContext, PropsWithChildren, useContext, useState } from 'react'
import { AppLoadAnimationContextType } from 'src/components/atoms/AppLoadAnimation/types'
import AppLoadAnimation from './AppLoadAnimation'

const Context = createContext<AppLoadAnimationContextType>([
  { isFinished: false },
  { setIsFinished: () => {} },
])

export const useAppLoadAnimationContext = () => useContext(Context)

export const AppLoadAnimationProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isFinished, setIsFinished] = useState<boolean>(false)
  return (
    <Context.Provider value={[{ isFinished }, { setIsFinished }]}>
      <AppLoadAnimation />
      {children}
    </Context.Provider>
  )
}
