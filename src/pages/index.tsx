import { authState } from "@/state/authState";
import { signIn } from "next-auth/react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const auth = useRecoilValue(authState);
  const router = useRouter();

  const handleStartNowClick = () => {
    if (auth) {
      router.push('/canvas');
    } else {
      signIn('google');
    }
  };

  return (
    <main className={`text-white ${inter.className} flex flex-col items-center justify-center h-screen `}>
      <div className="glow-effect text-2xl uppercase font-bold sm:text-3xl md:text-4xl xl:text-5xl">
        <p>Minimalist Design</p>
        <p>Maximal Impact</p>
      </div>
      <p className="text-xs my-4 text-gray-400 sm:text-sm md:text-base xl:text-lg">The new age builder with <span className="text-white font-bold">AI</span> inside.</p>
      <button onClick={handleStartNowClick} className="button1 flex items-center gap-1 mt-2 px-4 py-2 border border-white text-sm  md:text-base xl:text-lg font-medium rounded-md text-black bg-white hover:bg-transparent hover:text-white">
        Start Now
        <svg className="arrow-move" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
      </button>
    </main>
  );
}
