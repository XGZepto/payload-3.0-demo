import classes from "../index.module.scss";

export default function Details({
  details,
}: {
  details: {
    label?: string | null;
    description?: string | null;
    id?: string | null;
  }[];
}) {
  return (
    <div className={classes.details}>
      <h5 className={classes.header}>Details</h5>
      <div className={classes.listWrapper}>
        <ul className={classes.list}>
          {details.map((detail) => {
            return (
              <li key={detail.id}>
                <span>{detail.label}</span>: <span>{detail.description}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
