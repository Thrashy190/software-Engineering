import { storage } from "./firebase";
import { getDownloadURL, ref } from "firebase/storage";

export function uploadFile(file, path) {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(path);
    return fileRef.put(file);
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
