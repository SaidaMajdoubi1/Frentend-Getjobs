import { Link } from 'react-router-dom';

const Editp = () => {
  return (
    <div className="flex flex-col items-center">

      <div className="w-full flex justify-end">
        <Link to="/useredit">
          <button className="bg-green-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 mt-8 mr-12">
            Edit Profile
          </button>
        </Link>
      </div>

      <div className="w-5/6 mx-auto">
      <hr className="bg-gray-100 border-t rounded md:my-5 dark:bg-gray-700" />
      
    </div>

    </div>
  );
}

export default Editp;
