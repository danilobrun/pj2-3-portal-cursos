import { Route, Routes } from "react-router-dom";
import { HomeView } from "./views/Home";
import { PortalsView } from "./views/Portals";
import { NotFoundView } from "./views/NotFound";
import { PortalDetailView } from "./views/PortalDetail";
import { DashboardView } from "./views/Dashboard";

function App() {
  return (
   <Routes>
     <Route path='/' element={<HomeView />} />
     <Route path='/portals' element={<PortalsView />} />
     <Route path='/portals/:id' element={<PortalDetailView />} />
     <Route path='/portal' element={<DashboardView />} />
     <Route path='*' element={<NotFoundView />} />
   </Routes>
  );
}

export default App;
