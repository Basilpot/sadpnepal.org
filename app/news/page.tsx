import { redirect } from "next/navigation";

// News is now the Blog. Static export renders this as a client-side redirect.
export default function NewsRedirect() {
  redirect("/blog");
}
