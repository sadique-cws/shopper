
import { signIn } from "@/auth"
import Image from "next/image"
 
export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className="flex flex-1 items-center gap-3 bg-slate-100 border px-3 py-2 rounded-md mt-3 w-full border-gray-900 hover:bg-purple-400 hover:text-white justify-center">
      <Image src="https://authjs.dev/img/providers/google.svg" width={30} height={30}/>

       <span> Signin with Google</span>
        </button>
    </form>
  )
} 