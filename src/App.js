import Header from "./components/Header";
import Mobile from "./components/Mobile";
import Pages from "./components/Pages";
import Footer from './components/Footer';


export default function App(props) {

  return (
    <div className="page-content">
      <Header />
      <Mobile />
      <Pages />
      <Footer scripts={props.scriptLoading} />
    </div>
  );
}
