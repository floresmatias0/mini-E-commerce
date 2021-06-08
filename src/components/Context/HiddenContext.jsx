import React,{ useState,createContext,useMemo,useContext } from 'react'

const HiddenContext = createContext();

export const HiddenProvider = (props) => {

  const [hidden, setHidden] = useState(false);
  const [hiddenV2, setHiddenV2] = useState(false);

  const carrito = () => setHiddenV2(hiddenV2 ? false : true);

  const value = useMemo(() => {
    return({
      hidden,
      setHidden,
      hiddenV2,
      setHiddenV2,
      carrito
    })  // eslint-disable-next-line
  },[hiddenV2,hidden])

  return <HiddenContext.Provider value={value} {...props}/>
}

export const useHidden = () => {
  const context = useContext(HiddenContext);
  if(!context){
    throw new Error("useHidden debe estar dentro de HiddenContext")
  }
  return context;
}
