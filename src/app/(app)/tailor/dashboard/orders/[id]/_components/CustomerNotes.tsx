import classes from "../index.module.scss";

export default function CustomerNotes({
  message,
}: {
  message: string | null | undefined;
}) {
  if (!message) return <></>;

  return (
    <div className={classes.customerNotes}>
      <h5 className={classes.header}>Customer Notes</h5>
      <p className={classes.message}>{message}</p>
    </div>
  );
}
