import Image from "next/image";
import CustomerNotes from "./_components/CustomerNotes";
import Details from "./_components/Details";
import ForUser from "./_components/ForUser";
import ProductCategory from "./_components/ProductCategory";
import { RequestedTagLine } from "./_components/RequestedTagLine";
import classes from "./index.module.scss";
import { getOrder } from "@/app/(app)/tailor/_utilities/getOrder";
import { notFound } from "next/navigation";
import DueIn from "./_components/DueIn";
import ProductName from "./_components/ProductName";
import ProductImg from "./_components/ProductImg";
import AcceptRejectButtons from "./_components/AcceptRejectButtons";

export default async function OrderDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { order } = await getOrder({ orderID: params.id });
  if (!order) {
    return notFound();
  }

  return (
    <div className={classes.page}>
      <div className={classes.wrapper}>
        <div className={classes.titleWrapper}>
          <ProductImg src={order.item.productImage} />
          <RequestedTagLine createdAt={new Date(order.createdAt)} />
          <ProductName productName={order.item.productName} />
          <ProductCategory category={order.item.productCategory} />
          {order.status === "inProgress" ? (
            <ForUser user={order.orderedBy} />
          ) : null}
        </div>
        <div className={classes.infoWrapper}>
          <DueIn />
          <Details details={order.item.alterationDetail} />
          <CustomerNotes message={order.item.attachedMessage} />
        </div>
      </div>

      <AcceptRejectButtons />
    </div>
  );
}
