import DataTable from "./components/dataTable";
import Footer from "./components/footer";
import NavBar from "./components/NavBar/indext";

const App = () =>{
  return (
    <>
    <NavBar></NavBar>
    <div className="container">
     <h1 className="text-primary">Olá mundo!</h1>
     <DataTable/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
