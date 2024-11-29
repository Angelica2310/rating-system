import { handleComment } from "@/Utils/submit";

export default function ServerComponent() {
  return <form action={handleComment}></form>;
}
