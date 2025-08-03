import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="flex items-center justify-center min-h-screen h-fit bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold md:text-7xl mb-6">
          Welcome to{" "}
          <span className="text-white bg-gradient-to-r from-primary via-chart-2 to-chart-1 rounded-xl px-2 leading-normal">
            TradeHive.
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 font-medium">
          Simplify your inventory management with smart, powerful tools.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href={"/login"} className="px-8 py-3 font-semibold text-lg rounded-full text-primary-foreground hover:text-white bg-primary hover:bg-green-800 transition duration-200 shadow-lg" >Login</Link>
          <Link href={"/login"} className="px-8 py-3 font-semibold text-lg rounded-full text-green-300 hover:text-white hover:bg-green-900 transition duration-200 shadow-lg border-primary border-2" >Register</Link>
        </div>
      </div>
    </main>
  );
};

export default page;
