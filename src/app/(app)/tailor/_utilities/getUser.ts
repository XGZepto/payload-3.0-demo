import { User } from "payload-types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getUser = async (args: {
  userID: string;
  failRedirect?: string;
}): Promise<{
  user: User;
}> => {
  const { userID, failRedirect } = args || {};
  const cookieStore = cookies();
  const token = cookieStore.get("payload-token")?.value;

  const userReq = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/users/${userID}`,
    {
      headers: {
        Authorization: `JWT ${token}`,
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      // TODO: log error to server log?
      if (failRedirect) redirect(failRedirect);
    });

  return {
    user: userReq,
  };
};
