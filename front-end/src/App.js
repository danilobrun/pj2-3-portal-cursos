import { Route, Routes } from "react-router-dom";
import { HomeView } from "./views/Home";
import { PortalsView } from "./views/Home/Portals";
import { NotFoundView } from "./views/NotFound";

function App() {
  return (
   <Routes>
     <Route path='/' element={<HomeView />} />
     <Route path='/portals' element={<PortalsView />} />
     <Route path='*' element={<NotFoundView />} />
   </Routes>
  );
}

export default App;
