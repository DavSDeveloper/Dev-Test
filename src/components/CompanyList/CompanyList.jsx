import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyList.css';

const CompanyList = ({ companies }) => {
    if (!companies || companies.length === 0) {
        return <p>No companies available.</p>;
    }

    return (
        <ul className='list'>
            {companies.map((company) => (
                <li key={company.id} className='listItem'>
                    <Link to={`/companies/${company.id}`} className='link'>
                        {company.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default CompanyList;
