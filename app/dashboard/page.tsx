import { requireUser } from "../utils/hooks";

export default async function DashboardRoute() {
  const session = await requireUser();
  

  return <h1>Dashboard</h1>;
}
