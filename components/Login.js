import Image from "next/image";
import { signIn } from "next-auth/react";
import googleLogo from "@/public/googlelogo.png";
import facebookLogo from "@/public/facebook.png";
function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
        <Image src={facebookLogo} height={250} width={250} />
      </div>
      <div>
      <button
        onClick={signIn}
        className="flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl  transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
      >
        <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
        <span className="ml-4">Continue with Google</span>
      </button>
      </div>
    </div>
  );
}

export default Login;
