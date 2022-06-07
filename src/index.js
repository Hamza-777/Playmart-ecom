import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { makeServer } from "./server";
import { AuthProvider } from "./Components/Providers/AuthProvider";
import { ProductProvider } from "./Components/Providers/ProductProvider";
import { ModalProvider } from "./Components/Providers/ModalProvider";
import App from "./App";

// Running the mock server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<ModalProvider>
			<AuthProvider>
				<ProductProvider>
					<App />
				</ProductProvider>
			</AuthProvider>
		</ModalProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
