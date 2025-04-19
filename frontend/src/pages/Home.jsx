import { Link } from 'react-router-dom';
import logo1 from "../assets/logo.png";
import imghome from '../assets/imghome.png';
import imghomez from '../assets/imgHomez.png';
import imghomed from '../assets/imghomed.png';
import imgho from '../assets/imghom.png';

export default function Home() {
  return (
    <>
    <header>
                <nav
                    className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4"
                    data-twe-navbar-ref
                >
                    <div className="flex w-full px-3 justify-between items-center">
                        <div>
                            {/* Replace <a> with Link */}
                            <Link to="/">
                                <img
                                    className="mx-2 my-1 h-5 lg:mb-0 lg:mt-0"
                                    src={logo1}
                                    alt="GET Logo"
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                        <div className="flex items-center">
                        <Link to="/login">
                            <button
                                type="button"
                                data-twe-ripple-init
                                data-twe-ripple-color="light"
                                className="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-teal-500 hover:text-teal-600 focus:text-teal-600 focus:outline-none focus:ring-0 active:text-teal-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500 bg-sky-100 hover:bg-sky-200 focus:bg-sky-200 focus:outline-none focus:ring-0 active:bg-sky-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:active:bg-gray-700"
                            >
                                Login
                            </button>
                        </Link>
                        <Link to="/Signup">
                            <button
                                type="button"
                                data-twe-ripple-init
                                data-twe-ripple-color="light"
                                className="me-3 inline-block rounded bg-teal-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-sky-100 shadow-teal-3 transition duration-150 ease-in-out hover:bg-teal-400 hover:shadow-teal-2 focus:bg-teal-400 focus:shadow-teal-2 focus:outline-none focus:ring-0 active:bg-teal-600 active:shadow-teal-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            >
                                Sign up
                            </button>
                        </Link>    
                        </div>
                    </div>
                </nav>
    </header>
<div className="flex flex-col md:flex-row items-center justify-between bg-yellow-100 px-4 md:px-20 py-9"> 
  <div className="flex w-full items-center md:w-1/2">
    <div className="flex-grow pr-4 md:pr-8">
      <h1 className="text-3xl text-teal-500 font-bold mb-4">Welcome To GetJobs</h1>
      <p className="text-lg">
        Créez votre profil, postulez et contactez des recruteurs, professionnels et entreprises.<br/>
        GetJobs vous accompagne à chaque étape de votre recherche d'emploi.
      </p>
      <div className="mt-6">
        <Link to="/signup" className="mr-4">
          <button className="bg-teal-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-sky-100 shadow-teal-3 transition duration-150 ease-in-out hover:bg-teal-400 hover:shadow-teal-2 focus:bg-teal-400 focus:shadow-teal-2 focus:outline-none focus:ring-0 active:bg-teal-600 active:shadow-teal-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong font-bold py-2 px-4 rounded">S'inscrire</button>
        </Link>
        <Link to="/login">
          <button className="text-teal-500 hover:text-teal-600 focus:text-teal-600 focus:outline-none focus:ring-0 active:text-teal-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500 bg-sky-100 hover:bg-sky-200 focus:bg-sky-200 focus:outline-none focus:ring-0 active:bg-sky-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:active:bg-gray-700 font-bold py-2 px-4 rounded">Se connecter</button>
        </Link>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/2 " >
    <img src={imghome} alt="Photo" className="w-full h-auto md:h-96" />
  </div>
</div>

<div className="flex flex-col md:flex-row m-4 md:m-8">
  <div className="w-full md:w-1/2 px-4">
    <h1 className="text-3xl text-teal-500 font-bold mb-4">Our Feature</h1>
    <p className="text-gray-600">GetJobs Pages are more interactive and insightful than ever with new features like Featured posts, Sponsored Articles, Pages Messaging and more.</p>
    <img src={imghomez} alt="Left Image" className="mt-4 rounded-lg w-full" />
  </div>
  <div className="w-full md:w-1/2 px-4 flex justify-center items-center"> {/* Add flex and centering */}
    <img src={imghomed} alt="Right Image" className="mt-4 rounded-lg w-full md:w-3/4 h-auto" /> {/* Adjusted image size */}
  </div>
</div>

<div className="px-4 md:px-8">
  <div className="flex flex-col md:flex-row justify-between">
    <div className="w-full md:w-1/2 md:pr-4">
      <h1 className="text-3xl text-teal-500 font-bold mb-8">About</h1>
      <p className="text-gray-600 mb-8"> 
        GetJobs a débuté dans le salon du co-fondateur DEV-205 en 2024 et a été officiellement lancé le 5 mai 2003.
        Sous la direction de DEV-205, Getjobs mène une activité diversifiée et génère ses revenus à partir des souscriptions d'utilisateurs,
        des ventes publicitaires et des solutions de recrutement. En décembre 2025, Microsoft a finalisé son acquisition de GetJobs,
        permettant ainsi la fusion entre le meilleur cloud professionnel au monde et le meilleur réseau professionnel au monde.
      </p>
    </div>
    <div className="w-full md:w-1/2">
      <img src={imgho} alt="Big Image" className="w-full h-auto md:pl-40 md:pr-40 rounded-lg w-full"/> 
    </div>
  </div>
</div>


    </>
  );
}