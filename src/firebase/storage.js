import { storage } from "./firebase";
import { getDownloadURL, ref,uploadBytesResumable } from "firebase/storage";

export const  uploadFiles = async(file, path)=>  {
    const storageRef = ref(storage, `${path}/${file.name}`);
    return (await uploadBytesResumable(storageRef, file)).ref  ;
}

export const downloadImage = async (filePath) => {
    try {
        // Crea una referencia al archivo en Firebase Storage
        const storageRef = ref(storage, filePath);
        // Obtiene la URL de descarga del archivo
        const url = await getDownloadURL(storageRef);

        return url;
    } catch (error) {
        console.error("Error al descargar la imagen:", error);
        throw error; // Puedes manejar el error de otra manera si lo deseas
    }
};
