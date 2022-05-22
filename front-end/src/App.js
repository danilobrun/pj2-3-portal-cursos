import { Route, Routes } from "react-router-dom";
import { HomeView } from "./views/Home";
import { PortalsView } from "./views/Home/Portals";
import { NotFoundView } from "./views/NotFound";
import { PortalDetailView } from "./views/PortalDetail";

function App() {
  return (
   <Routes>
     <Route path='/' element={<HomeView />} />
     <Route path='/portals' element={<PortalsView />} />
     <Route path='/portals/:id' element={<PortalDetailView />} />
     <Route path='*' element={<NotFoundView />} />
   </Routes>
  );
}

export default App;
