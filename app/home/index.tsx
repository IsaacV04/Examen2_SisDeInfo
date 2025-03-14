import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import React from 'react';
import { Picker } from '@react-native-picker/picker';
import useFormulario from '../../hooks/useFormulario';

const HomeScreen = () => {
  const {
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
  } = useFormulario();

  return (
    <View className="flex-1 p-5 bg-pink-300">
        <Text className="text-center font-bold text-3xl mb-5 text-gray-800">Registro de Productos</Text>

        <View>

            <View className="mb-4">
                <Text className="block text-gray-700 text-xl font-bold mb-2">
                    Código de producto
                </Text>
                <TextInput
                    placeholder="Ingresa el Código"
                    value={codigo}
                    onChangeText={handleChangeText}
                    maxLength={10}
                    autoCapitalize="none"
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errorCodigo && <Text className="text-red-500 text-sm mt-1">{errorCodigo}</Text>}
            </View>

            <View className="mb-4">
                <Text className="block text-gray-700 text-xl font-bold mb-2">
                    Nombre del producto
                </Text>
                <TextInput
                    placeholder="Escribe el Nombre"
                    value={texto}
                    onChangeText={setTexto}
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errorTexto && <Text className="text-red-500 text-sm mt-1">{errorTexto}</Text>}
            </View>

            <View className="mb-4">
                <Text className="block text-gray-700 text-xl font-bold mb-2">
                    Categoría
                </Text>
                <View className='bg-white border rounded'>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        className="bg-white border rounded w-full py-2 px-3"
                        >
                        <Picker.Item label="Limpieza" value="opcion1" />
                        <Picker.Item label="Decorativos" value="opcion2" />
                        <Picker.Item label="Textiles" value="opcion3" />
                    </Picker>
                </View>
            </View>

            <View className="mb-4">
                <Text className="block text-gray-700 text-xl font-bold mb-2">
                    Cantidad
                </Text>
                <TextInput
                    placeholder="Ingrese la Cantidad"
                    value={cantidad}
                    onChangeText={setCantidad}
                    keyboardType="numeric"
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errorCantidad && <Text className="text-red-500 text-sm mt-1">{errorCantidad}</Text>}
            </View>

            <View className="mb-4">
                <Text className="block text-gray-700 text-xl font-bold mb-2">
                    Precio unitario
                </Text>
                <TextInput
                    placeholder="Ingresa el Precio"
                    value={precio}
                    onChangeText={handleChangePrice}
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errorPrecio && <Text className="text-red-500 text-sm mt-1">{errorPrecio}</Text>}
            </View>

            <View className="mb-4">
                <Text className="block text-gray-700 text-xl font-bold mb-2">
                    Fecha de ingreso
                </Text>
                <TextInput
                    placeholder="DD/MM/YYYY"
                    value={fecha}
                    onChangeText={handleChangeDate}
                    maxLength={10}
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errorFecha && <Text className="text-red-500 text-sm mt-1">{errorFecha}</Text>}
            </View>

            <View className="mb-4">
                <Text className="block text-gray-700 text-xl font-bold mb-2">
                    Observaciones
                </Text>
                <TextInput
                    placeholder="Escribe una observación"
                    value={observacion}
                    onChangeText={setObservacion}
                    multiline={true}
                    numberOfLines={4}
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </View>
        </View>

        <TouchableOpacity
            onPress={manejarEnvio}
            className="bg-purple-500 border rounded-full py-2 px-6 mt-4"
        >
            <Text className="text-white text-center text-xl font-semibold">Enviar</Text>
        </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
