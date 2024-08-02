import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();
  const user = session?.user;

  console.log("Home -> user", user);

  const handleSignOut = async () => {
    "use server";
    await signOut({ redirectTo: "/login" });
  };

  return (
    <div>
      <h1>Hello {user ? user.name : "Guest"}</h1>
      {user && (
        <form action={handleSignOut}>
          <Button type="submit">Sign Out</Button>
        </form>
      )}
    </div>
  );
}