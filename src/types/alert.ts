type AlertProps = {
    variant:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark"
        | null;
    message: string;
};

export default AlertProps;
