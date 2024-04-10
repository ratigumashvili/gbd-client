import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function layout({ children }) {
    return (
        <>
            <ToastContainer />
            {children}
        </>
    )
}

export default layout