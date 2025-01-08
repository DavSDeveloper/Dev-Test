import React from "react";
import { useQuery } from "@apollo/client";
import { ME_QUERY } from "../../graphql/queries";
import Loader from "../../components/Loader/Loader";
import CompanyList from "../../components/CompanyList/CompanyList";

const Companies = () => {
  const { data, loading, error } = useQuery(ME_QUERY, {
    context: {
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    },
  });

  if (loading) return <Loader />;

  if (error) return <p>Error: {error.message}</p>;

  const companies = data.me.companies.edges.map(({ node }) => node);

  return (
    <div className="p-5">
      <h1 className="text-4xl text-blue-900 font-bold border-b-4 border-b-blue-900 mb-8 py-4">Companies</h1>
      <CompanyList companies={companies} />
    </div>
  );
};

export default Companies;
