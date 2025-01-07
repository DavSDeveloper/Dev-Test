import React from "react";
import { useQuery } from "@apollo/client";
import { ME_QUERY } from "../../graphql/queries";
import Loader from "../../components/Loader/Loader";
import CompanyList from "../../components/CompanyList/CompanyList";

const Companies = () => {
  // Realiza la consulta ME_QUERY para obtener los datos del usuario y sus empresas asociadas
  const { data, loading, error } = useQuery(ME_QUERY, {
    context: {
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`, // Agrega el token de autenticación en los encabezados
      },
    },
  });

  // Si la consulta está cargando, muestra un componente de carga
  if (loading) return <Loader />;
  
  // Si hay un error en la consulta, muestra un mensaje de error
  if (error) return <p>Error: {error.message}</p>;

  // Extrae las empresas de la respuesta de la consulta
  const companies = data.me.companies.edges.map(({ node }) => node);

  return (
    <div className="container">
      <h1>Companies</h1>
      {/* Pasa las empresas al componente CompanyList para su visualización */}
      <CompanyList companies={companies} />
    </div>
  );
};

export default Companies;
