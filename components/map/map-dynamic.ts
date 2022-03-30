// dynamic import

import dynamic from "next/dynamic";

const MapDynamic = dynamic(() => import("./map"), { ssr: false });

export default MapDynamic;
