import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

const CompanyPage = () => {
  // Obtiene el 'companyId' desde la URL utilizando 'useParams' (parte de React Router)
  const { companyId } = useParams();
  
  // Estado que almacena el archivo seleccionado para la carga
  const [file, setFile] = useState(null);
  
  // TODO En el estado colocar null cuando no haya bloqueo por CORS
  // Estado que almacena el resultado del análisis del archivo cargado
  const [analysisResult, setAnalysisResult] = useState({
    category: "ELECTRONIC_INVOICE",
    data: {
      calculated_total: 59999.8,
      due_date: "2024-12-09",
      extracted_total: 60000.0,
      gross_amount: 50420.0,
      issued_at: "2024-12-09T05:00:00+00:00",
      lines: [
        {
          name: "8145435F DISCO CORNETA C/FINO METAL 4½*0.045*7/8",
          price: 1260.5,
          quantity: 40.0,
          tax: {
            amount: 9579.8,
            name: "IVA",
            percent: 19.0,
          },
        },
      ],
      supplier: {
        name: "SEGAR S.A",
        address: "CRA.27 No.66-30 C.C.SANCANCIO LOC.802, Bogotá, D.c.",
        email: "segarferreteria@yahoo.es",
        phone: "8871779",
      },
      total: 60000.0,
      taxes_total: 9579.8,
      due_date: "2024-12-09",
      total_does_match: true,
    },
    success: true,
  });
  
  // Estado para controlar la visibilidad del modal
  const [modalOpen, setModalOpen] = useState(false);

  // Función que maneja la selección de archivos
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Función que maneja la carga y análisis del archivo
  const handleUpload = async () => {
    if (!file) return alert("Please select a file to upload.");

    // TODO Eliminar esta línea cuando no haya bloqueo por CORS
    setModalOpen(true);

    try {
      // Carga el archivo en el servidor
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tenant_id", companyId);

      const uploadResponse = await fetch(
        import.meta.env.VITE_UPLOADER_URL,
        {
          method: "POST",
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`, // Token JWT de autorización
          },
          body: formData,
        }
      );

      const uploadData = await uploadResponse.json();

      // Analiza el archivo cargado
      const analyzeResponse = await fetch(
        import.meta.env.VITE_DOCUMENTOR_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ file: uploadData.url, qr: false }),
        }
      );

      const analyzeData = await analyzeResponse.json();
      setAnalysisResult(analyzeData); // Establece el resultado del análisis
      setModalOpen(true); // Abre el modal para mostrar el resultado
    } catch (error) {
      console.error(error);
      alert("An error occurred while uploading or analyzing the file.");
    }
  };

  return (
    <div className="container">
      <h1>Company Details</h1>
      <p>Company ID: {companyId}</p>
      <div className="uploadSection">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} className="uploadButton">
          Upload and Analyze
        </button>
      </div>

      {/* Modal para visualizar el resultado del análisis */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2>Analysis Result</h2>

        {/* Información del proveedor */}
        <section className="infoSection">
          <h3>Supplier Information</h3>
          <p>
            <strong>Name:</strong> {analysisResult.data.supplier.name}
          </p>
          <p>
            <strong>Address:</strong> {analysisResult.data.supplier.address}
          </p>
          <p>
            <strong>Email:</strong> {analysisResult.data.supplier.email}
          </p>
          <p>
            <strong>Phone:</strong> {analysisResult.data.supplier.phone}
          </p>
        </section>

        {/* Resumen de factura */}
        <section className="infoSection">
          <h3>Invoice Summary</h3>
          <p>
            <strong>Calculated Total:</strong> $
            {analysisResult.data.calculated_total.toFixed(2)}
          </p>
          <p>
            <strong>Extracted Total:</strong> $
            {analysisResult.data.extracted_total.toFixed(2)}
          </p>
          <p>
            <strong>Gross Amount:</strong> $
            {analysisResult.data.gross_amount.toFixed(2)}
          </p>
          <p>
            <strong>
              Tax Amount ({analysisResult.data.lines[0].tax.name}):
            </strong>{" "}
            ${analysisResult.data.taxes_total.toFixed(2)}
          </p>
          <p>
            <strong>Total Due:</strong> ${analysisResult.data.total.toFixed(2)}
          </p>
        </section>

        {/* Fecha */}
        <section className="infoSection">
          <h3>Due Date</h3>
          <p>{new Date(analysisResult.data.due_date).toLocaleDateString()}</p>
        </section>

        {/* Tabla de productos */}
        <section className="infoSection">
          <h3>Items</h3>
          <table className="itemsTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {analysisResult.data.lines.map((line, index) => (
                <tr key={index}>
                  <td>{line.name}</td>
                  <td>${line.price.toFixed(2)}</td>
                  <td>{line.quantity}</td>
                  <td>${(line.price * line.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </Modal>
    </div>
  );
};

export default CompanyPage;
