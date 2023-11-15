import Alert from "react-bootstrap/Alert";
import AlertType from "../types/alert";

interface AlertProps extends AlertType {
    onDismiss: () => void;
}

function AlertMessage({ message, variant, onDismiss }: AlertProps) {
    return (
        <Alert key={variant} variant={variant!} dismissible onClose={onDismiss}>
            {message}
        </Alert>
    );
}

export default AlertMessage;
