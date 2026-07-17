import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" text-center mt-12">
      <h2 className=" font-bold">Not Found</h2>
      <p className="my-3">Could not find requested resource</p>
      <Link className=" bg-danger px-3 py-2 rounded text-text-primary" href="/">Return Home</Link>
    </div>
  );
}
