import { getUser } from "@/app/(app)/tailor/_utilities/getUser";
import { User } from "@/app/(app)/tailor/payload-types";
import classes from "../index.module.scss";

export default async function ForUser({
  user,
}: {
  user: string | null | undefined | User;
}) {
  if (!user) return <></>;

  let userInfo: User;
  if (typeof user === "string") {
    ({ user: userInfo } = await getUser({ userID: user as string }));
  } else {
    userInfo = user;
  }

  if (!userInfo.displayName) return <></>;

  return <div className={classes.forUser}>for {userInfo.displayName}</div>;
}
