// import TravelRegister from "@/assets/images/travel-register.jpg";
import TravelRegister from "@/assets/images/parcel-r.jpeg";
import { Link } from "react-router";

import { RegisterForm } from "@/components/modules/Authentication/RegisterForm";

export default function Register() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block">
        <img
          src={TravelRegister}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.8]"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            to="/"
            className="flex items-center text-primary font-bold text-xl">
            <svg
              width="30"
              height="40"
              viewBox="0 0 30 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 0L20.4545 5.33333L0 25.3333V14.6667L15 0Z"
                fill="#06D1D4"></path>
              <path
                d="M2.90827 28.177L15 40L30 25.3334V14.6667L20.4545 5.33337L0 25.3334L0.0041688 25.3375L20.4545 5.33337V20.6667L11.25 29.6667V20.1324L2.90827 28.177Z"
                fill="#3628A0"></path>
            </svg>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
