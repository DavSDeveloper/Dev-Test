// Importaciones necesarias
import React from 'react'; // Importa React, la biblioteca principal para construir interfaces de usuario.
import './Modal.css'; // Importa los estilos CSS asociados al componente Modal.

// Componente funcional: Modal
// Este componente muestra una ventana modal (superposición de contenido) en la interfaz, con la posibilidad de cerrarla.
const Modal = ({ isOpen, onClose, children }) => {
    // Si `isOpen` es false, el componente no renderiza nada (retorna `null`).
    if (!isOpen) return null;

    return (
        <div className='overlay'> {/* Crea la capa de fondo que cubre la pantalla */}
            <div className='modal'> {/* Contenedor principal de la ventana modal */}
                <button className='closeButton' onClick={onClose}>X</button> {/* Botón para cerrar la ventana modal */}
                <div>{children}</div> {/* Contenido de la ventana modal (lo que se pasa como `children`) */}
            </div>
        </div>
    );
};

export default Modal; // Exporta el componente para su uso en otros archivos.
