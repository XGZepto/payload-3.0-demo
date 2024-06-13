export default async function OrderLayout(props: {
  children: React.ReactNode;
}) {
  const { children } = props;

  return <main>{children}</main>;
}
