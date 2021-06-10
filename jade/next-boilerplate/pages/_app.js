import { Provider } from "react-redux";
import { createStore } from "redux";
import Layout from "../components/Layout";
import rootReducer from "../modules";
import "../styles/globals.scss";

const store = createStore(rootReducer);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
