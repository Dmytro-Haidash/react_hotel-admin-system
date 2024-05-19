import { useContext } from 'react';
import { HotelContext } from './hotelContext';

type HotelProviderProps = {
  children: React.ReactNode;
};

export const useHotelContext = () => {
  return useContext(HotelContext);
}

export const HotelProvider = ({ children }: HotelProviderProps) => {
  return (
    <HotelContext.Provider
      value={{
        //
      }}
    >
      {children}
    </HotelContext.Provider>
  );
}
