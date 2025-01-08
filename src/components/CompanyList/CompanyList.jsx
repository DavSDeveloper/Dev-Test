import React from 'react';
import { Link } from 'react-router-dom';

const CompanyList = ({ companies }) => {
    if (!companies || companies.length === 0) {
        return <p>No companies available.</p>;
    }

    return (
        <ul className='list-none p-0 m-0'>
            {companies.map((company) => (
                <li key={company.id} className='my-3 p-3 border-2 border-slate-200 rounded-md hover:bg-slate-100 shadow duration-300'>
                    <Link to={`/companies/${company.id}`} className='text-blue-600 font-bold text-lg hover:text-blue-800 duration-300'>
                        {company.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default CompanyList;
