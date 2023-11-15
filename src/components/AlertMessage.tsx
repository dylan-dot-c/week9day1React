import Alert from "react-bootstrap/Alert";
import AlertType from "../types/alert";

interface AlertProps extends AlertType {
    onDismiss: () => void;
}

function AlertMessage({ message, variant, onDismiss }: AlertProps) {
    return (
        <Alert
            className='mt-4'
            key={variant}
            variant={variant!}
            dismissible
            onClose={onDismiss}>
            <b>{message}</b>
        </Alert>
    );
}

export default AlertMessage;
