import React, { createContext, PropsWithChildren, useContext, useState } from 'react'

const Context = createContext<
  [{ isDarkMode: boolean }, { setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>> }]
>([{ isDarkMode: false }, { setIsDarkMode: () => {} }])

export const useHeaderContext = () => useContext(Context)

export const HeaderProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  return <Context.Provider value={[{ isDarkMode }, { setIsDarkMode }]}>{children}</Context.Provider>
}
