import React, { useState } from 'react';
import Job from './job';
import { AiOutlineSearch, AiOutlineCloseCircle, AiOutlineEnvironment, AiOutlineSchedule } from "react-icons/ai";

const employees = [
  { name: 'John Doe', city: 'New York', category: 'development' },
  { name: 'Jane Smith', city: 'San Francisco', category: 'design' },
  { name: 'Michael Johnson', city: 'Los Angeles', category: 'marketing' }
  // Ajoutez plus d'employés selon vos besoins
];

export default function SearchEmployer() {
    const [searchCriteria, setSearchCriteria] = useState({
        name: '',
        city: '',
        category: ''
    });
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchCriteria(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const performSearch = (e) => {
        e.preventDefault();
        console.log("Search performed with criteria:", searchCriteria);
        // Filtrer les employés en fonction des critères de recherche
        const filteredEmployees = employees.filter(employee => {
            // Vérifier si le nom de l'employé contient la recherche par nom
            const nameMatch = employee.name.toLowerCase().includes(searchCriteria.name.toLowerCase());
            // Vérifier si la ville de l'employé correspond à la recherche par ville
            const cityMatch = employee.city.toLowerCase() === searchCriteria.city.toLowerCase();
            // Vérifier si la catégorie de l'employé correspond à la recherche par catégorie
            const categoryMatch = employee.category === searchCriteria.category;

            // Retourner vrai si toutes les conditions sont remplies, sinon faux
            return nameMatch && cityMatch && categoryMatch;
        });

        console.log("Filtered employees:", filteredEmployees);
        setFilteredEmployees(filteredEmployees); // Mettre à jour les employés filtrés dans l'état
    }

    return (
        <>
            <div className="searchDiv grid gap-10 p-12 bg-sky-100">
                <div className="align-text-top font-sans font-custom text-4xl ml-80">
                    Find <strong className='text-green-600'>Employee!</strong>
                </div>

                <form onSubmit={performSearch}>
                    <div className="firstDiv flex justify-between items-center rounded-[8px] gap-5 bg-white p-5 shadow-lg shadow-gray-700">
                        <div className="flex items-center gap-2">
                            <AiOutlineSearch className="text-2xl cursor-pointer" />
                            <input
                                type="text"
                                className="bg-transparent focus:outline-none w-full"
                                placeholder="Name Employee ..."
                                name="name"
                                value={searchCriteria.name}
                                onChange={handleInputChange}
                            />
                            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon cursor-pointer" />
                        </div>

                        <div className="flex items-center gap-2">
                            <AiOutlineEnvironment className="text-2xl cursor-pointer" />
                            <input
                                type="text"
                                className="bg-transparent focus:outline-none w-full"
                                placeholder="Search by Cities ..."
                                name="city"
                                value={searchCriteria.city}
                                onChange={handleInputChange}
                            />
                            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon cursor-pointer" />
                        </div>

                        <div className="flex items-center gap-2">
                            <AiOutlineSchedule className="text-2xl cursor-pointer" />
                            <select
                                className="bg-transparent focus:outline-none w-full"
                                name="category"
                                value={searchCriteria.category}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled>Select Category</option>
                                <option value="design">Design</option>
                                <option value="development">Development</option>
                                <option value="marketing">Marketing</option>
                                <option value="finance">Finance</option>
                                <option value="human_resources">Human Resources</option>
                            </select>
                            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon cursor-pointer" />
                        </div>
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-blue-200 text-white font-semibold py-2 px-4 rounded"
                            onClick={performSearch}
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <section>
                {/* Afficher les cartes des employés filtrés */}
                {filteredEmployees.map((employee, index) => (
                    <Job key={index} employee={employee} />
                ))}
            </section>
        </>
    )
}
