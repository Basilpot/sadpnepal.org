import { redirect } from "next/navigation";

// Internship is merged into the Volunteer page.
export default function InternshipRedirect() {
  redirect("/volunteer#internship");
}
