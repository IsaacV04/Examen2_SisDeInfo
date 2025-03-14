import { useState } from 'react';
import { Alert } from 'react-native';

const useFormulario = () => {
  const [texto, setTexto] = useState('');
  const [observacion, setObservacion] = useState('');
  const [codigo, setCodigo] = useState('');
  const [selectedValue, setSelectedValue] = useState('opcion1');
  const [errorTexto, setErrorTexto] = useState('');
  const [errorCodigo, setErrorCodigo] = useState('');
  const [errorCantidad, setErrorCantidad] = useState('');
  const [errorPrecio, setErrorPrecio] = useState('');
  const [errorFecha, setErrorFecha] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');
  const [fecha, setFecha] = useState('');

  // Maneja el código de producto (solo alfanumérico y max 10 caracteres)
  const handleChangeText = (value) => {
    const alfanumerico = value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 10);
    setCodigo(alfanumerico);
  };

  // Validación de nombre del producto
  const handleSubmitProduct = () => {
    if (!texto) {
      setErrorTexto('El nombre del producto es obligatorio');
    } else {
      setErrorTexto('');
    }
  };

  // Validación de cantidad (debe ser un número >= 1)
  const handleSubmitQuantity = () => {
    const cantidadNum = parseInt(cantidad, 10);
    if (isNaN(cantidadNum) || cantidadNum < 1) {
      setErrorCantidad('La cantidad debe ser un número mayor o igual a 1');
    } else {
      setErrorCantidad('');
    }
  };

  // Validación del precio (solo números con hasta dos decimales)
  const handleChangePrice = (text) => {
    const newText = text.replace(/[^0-9.]/g, '');
    const regex = /^(\d+(\.\d{0,2})?)$/;
    if (regex.test(newText)) {
      setPrecio(newText);
      setErrorPrecio('');
    } else {
      setErrorPrecio('El precio debe ser un número válido con hasta dos decimales');
    }
  };

  // Validación de fecha (formato DD/MM/YYYY)
  const handleChangeDate = (text) => {
    let formattedText = text.replace(/[^0-9/]/g, '');
    if (formattedText.length <= 2) {
      formattedText = formattedText.replace(/(\d{2})/, '$1');
    } else if (formattedText.length <= 5) {
      formattedText = formattedText.replace(/(\d{2})(\d{2})/, '$1/$2');
    } else if (formattedText.length <= 10) {
      formattedText = formattedText.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    }
    setFecha(formattedText);
  };

  // Validación final de la fecha
  const handleSubmitDate = () => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(fecha)) {
      setErrorFecha('La fecha debe tener el formato DD/MM/YYYY');
    } else {
      setErrorFecha('');
    }
  };

  // Manejo del formulario en general
  const manejarEnvio = () => {
    // Validación de todos los campos
    if (!texto.trim()) {
      setErrorTexto('Por favor ingresa el nombre del producto');
    } else if (!codigo.trim()) {
      setErrorCodigo('El código de producto es obligatorio');
    } else if (!cantidad.trim() || isNaN(cantidad) || parseInt(cantidad, 10) < 1) {
      setErrorCantidad('La cantidad debe ser un número mayor o igual a 1');
    } else if (!precio.trim() || !/^\d+(\.\d{1,2})?$/.test(precio)) {
      setErrorPrecio('El precio debe ser un número válido con hasta dos decimales');
    } else if (!fecha.trim() || !/^\d{2}\/\d{2}\/\d{4}$/.test(fecha)) {
      setErrorFecha('La fecha debe tener el formato DD/MM/YYYY');
    } else {
      // Si todos los campos son válidos
      setErrorTexto('');
      setErrorCodigo('');
      setErrorCantidad('');
      setErrorPrecio('');
      setErrorFecha('');
      Alert.alert(
        'Éxito',
        `Formulario enviado con éxito:\nProducto: ${texto}\nCódigo: ${codigo}\nCategoría: ${selectedValue}\nCantidad: ${cantidad}\nPrecio: ${precio}\nFecha: ${fecha}\nObservaciones: ${observacion}`
      );
      // Limpiar los campos después de enviar
      setTexto('');
      setCodigo('');
      setCantidad('');
      setPrecio('');
      setFecha('');
      setObservacion('');
      setSelectedValue('opcion1');
    }
  };

  return {
    texto,
    setTexto,
    codigo,
    handleChangeText,
    selectedValue,
    setSelectedValue,
    errorTexto,
    errorCodigo,
    errorCantidad,
    errorPrecio,
    errorFecha,
    cantidad,
    setCantidad,
    precio,
    handleChangePrice,
    fecha,
    handleChangeDate,
    observacion,
    setObservacion,
    manejarEnvio,
    handleSubmitProduct,
    handleSubmitQuantity,
    handleSubmitDate,
  };
};

export default useFormulario;
