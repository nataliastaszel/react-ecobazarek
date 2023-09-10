import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { styles } from "./mapStyles";
import { LoadingComponentProps } from "../../types/types";
import { useEffect } from "react";

const MapElement = ({ onRequestLoading }: LoadingComponentProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  useEffect(() => onRequestLoading(!isLoaded), [onRequestLoading, isLoaded]);

  return (
    isLoaded && (
      <div className="sm:w-screen sm:h-[400px] h-[40vh] sm:mb-14 mb-3">
        <GoogleMap
          zoom={12}
          center={{ lat: 50.020054, lng: 19.809176 }}
          options={{ styles }}
          mapContainerClassName="sm:w-screen w-[100vw] h-[90%] sm:h-[434px] mb-6 relative"
        >
          <div className="flex mb-5 sm:w-2/6 w-3/6 h-[70px] text-xs text-black bg-white font-bold p-4 sm:text-xl sm:h-[180px] absolute sm:top-10 sm:right-24 top-16 right-16">
            PRZYJEDŹ DO NAS
          </div>
        </GoogleMap>
      </div>
    )
  );
};
export default MapElement;
