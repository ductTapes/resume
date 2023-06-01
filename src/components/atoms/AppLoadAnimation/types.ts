import React from 'react'

export type AppLoadAnimationContextType = [
  {
    isFinished: boolean
  },
  { setIsFinished: React.Dispatch<React.SetStateAction<boolean>> },
]
