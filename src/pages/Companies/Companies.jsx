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
    <div className="container">
      <h1>Companies</h1>
      <CompanyList companies={companies} />
    </div>
  );
};

export default Companies;
