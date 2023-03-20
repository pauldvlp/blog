import Link from "next/link";
import React from "react";

const HomeResume = () => {
  return (
    <div className="text-center max-w-3xl text-slate-800">
      <p>
        Soy <strong>Desarrollador y Diseñador Web y UI</strong> de Honduras.
      </p>
      <p className="sm:text-sm">
        Este es mi blog personal donde te compartire sobre temas de tecnologia, y, tambien experiencias personales, esperando que pueda ayudarte.
        Si quieres que escriba sobre un tema puedes <Link className="text-blue-500 border-b border-b-blue-500" href={'#contact'}>Contactarme</Link> y decirmelo.
      </p>
    </div>
  );
};

export default HomeResume;
