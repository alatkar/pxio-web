import Link from "next/link";

export default function NotFoundError() {
  return (
    <div>
      <h2>Not Found Error</h2>
      <p>Page doesn't exist</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}