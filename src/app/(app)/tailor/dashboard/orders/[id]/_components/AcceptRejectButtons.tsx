import { Button } from "@/app/(app)/tailor/_components/Button";
import classes from "../index.module.scss";

export default function AcceptRejectButtons() {
  // TODO: position reject/ accept sticky to viewport bottom (but this might need to refactor most pages to client component??)

  // TODO: add reject/ accept logic
  return (
    <div className={classes.acceptRejectButtons}>
      <Button label="Reject" appearance="danger" invert={true} />
      <Button label="Accept" appearance="primary" />
    </div>
  );
}
