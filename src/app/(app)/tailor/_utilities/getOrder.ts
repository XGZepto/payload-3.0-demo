import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import type { Order } from "../payload-types";

export const getOrder = async (args: {
  orderID: string;
  failRedirect?: string;
}): Promise<{
  order: Order | null;
}> => {
  const { orderID, failRedirect } = args || {};
  const cookieStore = cookies();
  const token = cookieStore.get("payload-token")?.value;

  const orderReq = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/orders/${orderID}`,
    {
      headers: {
        Authorization: `JWT ${token}`,
      },
    }
  );

  if (!orderReq.ok) {
    if (failRedirect) redirect(failRedirect);
    else return { order: null };
  }

  const data: Order = await orderReq.json();

  return {
    order: data,
  };
};
