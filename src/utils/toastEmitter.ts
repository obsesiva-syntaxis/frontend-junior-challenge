import { toast } from "react-toastify";

export const toastEmitter = ( title: string ) => {
    toast.error(title, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}