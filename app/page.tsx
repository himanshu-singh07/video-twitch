import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col w-full gap-y-4 ">
      <h1>Dashboard</h1>
      <UserButton
        afterSignOutUrl="/"
      />
    </div>
  );
}