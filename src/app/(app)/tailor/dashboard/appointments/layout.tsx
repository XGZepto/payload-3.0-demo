export default async function AppointmentLayout(props: {
    children: React.ReactNode;
  }) {
    const { children } = props;
  
    return <main>{children}</main>;
  }
  