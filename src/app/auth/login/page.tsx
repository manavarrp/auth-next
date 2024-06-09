import LoginForm from "@/components/auth/login-form";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Example next AUTH | Login",
  description: "Sign in to your account",
};

const LoginPage = () => {
  return ( <LoginForm />
  )
}

export default LoginPage