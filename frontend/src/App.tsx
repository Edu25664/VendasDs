import BarChart from "./components/BarChart";
import DataTable from "./components/dataTable";
import Footer from "./components/footer";
import NavBar from "./components/NavBar/indext";

const App = () =>{
  return (
    <>
    <NavBar></NavBar>
    <div className="container">
     <h1 className="text-primary text-center py-2">Dasboard de vendas</h1>
     <div className="row px-3">
     <div className="col-sm-12">
        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart/>
        </div>
        <div className="py-2">
          <h2 className="text-primary text-center">Todas as Vendas</h2>
          <p className="py-2 text-secondary text-center">Os dados estão estáticos, aplicativo em desenvolvimento</p>
        </div>
     </div>
     <DataTable/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
