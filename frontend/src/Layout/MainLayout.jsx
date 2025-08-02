
import Header from "../Components/MajorComponent/Header";
import Home from "../Pages/Home";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
    
        <Header/>
     
      <main className="flex-1 container mx-auto px-4 py-6">
        {/* <Outlet /> */}
        <Home/>
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
