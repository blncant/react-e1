import Layout from "./components/layout/Layout";
import Navbar from "./components/navbar/Navbar";

import Routes from "./routes/Routes";

function App() {
	return (
		<>
			<Layout>
				<Navbar />
				<Routes />
			</Layout>
		</>
	);
}

export default App;
