import { BussesResult } from "../types";

const getBusses = async (): Promise<BussesResult | null> => {
  try {
    const r = await fetch(process.env.NEXT_PUBLIC_ENDPOINT ?? "", {});

    const data = (await r.json()) as BussesResult;
    return data;
  } catch (err) {
    return null;
  }
};

export default getBusses;
