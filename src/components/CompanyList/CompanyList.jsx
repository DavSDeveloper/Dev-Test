// Importaciones necesarias
import React from 'react'; // Importa React, la biblioteca principal para construir interfaces de usuario.
import { Link } from 'react-router-dom'; // Importa Link para crear enlaces de navegación.
import './CompanyList.css'; // Importa los estilos CSS para el componente.

// Componente funcional: CompanyList
// Este componente muestra una lista de compañías, con enlaces que permiten navegar a los detalles de cada una.
const CompanyList = ({ companies }) => {
    // Si no hay compañías o la lista está vacía, muestra un mensaje informativo.
    if (!companies || companies.length === 0) {
        return <p>No companies available.</p>;
    }

    // Renderiza la lista de compañías
    return (
        <ul className='list'> {/* Clase CSS para estilos generales de la lista */}
            {companies.map((company) => (
                <li key={company.id} className='listItem'> {/* Clase CSS para cada elemento de la lista */}
                    <Link to={`/companies/${company.id}`} className='link'> {/* Enlace a la página de detalles de la compañía */}
                        {company.name} {/* Muestra el nombre de la compañía */}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

// Exporta el componente para su uso en otros archivos
export default CompanyList;
