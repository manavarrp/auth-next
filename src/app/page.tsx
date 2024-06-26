import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/auth/login-button";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

export default function Home() {
  return (
    <main
      className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
               from-sky-400 to-blue-800"
    >
      <section className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          AUTH
        </h1>
        <article>
          <p className="text-white text-lg">A simple authentication service</p>
        </article>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Get Started
            </Button>
          </LoginButton>
        </div>
      </section>
    </main>
  );
}
