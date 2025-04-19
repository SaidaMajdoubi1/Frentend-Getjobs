import React from "react";

export default function Job({ searchCriteria }) {
  // Liste des employés
  const employees = [
    { name: 'John Doe', city: 'New York', category: 'development' },
    { name: 'Jane Smith', city: 'San Francisco', category: 'design' },
    { name: 'Michael Johnson', city: 'Los Angeles', category: 'marketing' }
    // Ajoutez plus d'employés selon vos besoins
  ];

  // Vérifier si l'employé correspond aux critères de recherche
  const isEmployeeMatchingCriteria = (employee) => {
    const { name, city, category } = searchCriteria;
    return (
      employee.name.toLowerCase().includes(name.toLowerCase()) &&
      employee.city.toLowerCase() === city.toLowerCase() &&
      employee.category === category
    );
  };

  // Filtrer les employés en fonction des critères de recherche
  const filteredEmployees = employees.filter(isEmployeeMatchingCriteria);

  return (
    <>
      {filteredEmployees.map((employee, index) => (
        <div key={index} className="container mx-auto p-3 rounded bg-white w-1/3 mt-3 border border-gray-300">
          <div className="flex items-center mb-2">
            <div>
              <img
                className="rounded-full"
                style={{ width: "40px", height: "40px" }}
                src="https://avatars0.githubusercontent.com/u/16211217?s=460&u=7dec66a25393bfc3c553cc69c74b40b228d0778c&v=4"
                alt="profile pic"
              />
            </div>
            <div className="ml-2">
              <p className="tracking-wide text-gray-800 cursor-pointer hover:text-gray-900" style={{ fontSize: '14px' }}>{employee.name}</p>
              <p className="font-light tracking-tight text-gray-600 cursor-pointer hover:text-gray-900" style={{ fontSize: '12px' }}>Aug 15 (20 hours ago)</p>
            </div>
          </div>
          <div className="pl-12">
            <p className="hover:text-indigo-700 cursor-pointer font-bold" style={{ fontSize: '30px' }}>
              {employee.title}
            </p>
            <p>
              {employee.category}
            </p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex">
                <p className="flex items-center text-gray-900 font-light text-sm px-2 py-1 hover:bg-gray-200 rounded cursor-pointer">
                  {/* Contenu des réactions */}
                </p>
                <p className="flex items-center text-gray-900 font-light text-sm px-2 py-1 hover:bg-gray-200 rounded cursor-pointer">
                  {/* Contenu du bouton d'ajout de commentaire */}
                </p>
              </div>
              <div className="flex items-center">
                
                <button className="bg-green-600 hover:bg-blue-200 text-white font-semibold py-2 px-4 rounded">
                  <p>Show Profile</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
