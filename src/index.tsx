import reactDOM from 'react-dom';
import React from "react";
import App from "./components/App";

const Root: React.FC = () => {
    return (
        <App />
    );
};

reactDOM.render(<Root />, document.getElementById('root'));