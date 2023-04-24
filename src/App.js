import Layout from "./components/layout/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes/Routes";

function App() {
	return (
		<>
			<Layout>
				<Routes />
			</Layout>
			<GlobalStyles />
		</>
	);
}

export default App;
