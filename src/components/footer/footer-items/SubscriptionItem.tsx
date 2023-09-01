import { EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import Subscribe from "./Subscription";

const Subscription = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <EnvelopeOpenIcon className="h-[75px] text-white mb-4" />
      <p className="text-2xl text-white mb-1">SUBSKRYBUJ</p>
      <p className="text-base text-white m-2 text-center">
        Bądź pierwszym, który dowie się o naszych nowych produktach
      </p>
      <Subscribe />
    </div>
  );
};

export default Subscription;
