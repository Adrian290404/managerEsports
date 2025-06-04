import  { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LayoutComponent } from './components/common/layoutComponent';
import { TeamSelectPage } from './pages/teamSelectPage';
import { OverviewPage } from './pages/overviewPage';
// import { JugadoresPage } from './pages/JugadoresPage';
// import { EstadisticasPage } from './pages/EstadisticasPage';
// import { ConfiguracionPage } from './pages/ConfiguracionPage';
import { ToastContainer } from 'react-toastify';

function App() {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  return (
      <BrowserRouter>
        <Routes>
          {/* Página de selección de equipo */}
          <Route
            path="/"
            element={
              !selectedTeam ? (
                <TeamSelectPage/>
              ) : (
                <Navigate to="/menu" replace />
              )
            }
          />

          {/* Rutas privadas tras selección de equipo */}
          {selectedTeam && (
            <Route
              path="/"
              element={
                <LayoutComponent
                  teamId={selectedTeam}
                  onLogout={() => setSelectedTeam(null)}
                />
              }
            >
              <Route path="menu">
                <Route index element={<OverviewPage></OverviewPage>} />
                {/* <Route path="jugadores" element={<JugadoresPage teamId={selectedTeam} />} />
                <Route path="estadisticas" element={<EstadisticasPage teamId={selectedTeam} />} />
                <Route path="configuracion" element={<ConfiguracionPage teamId={selectedTeam} />} /> */}
              </Route>
            </Route>
          )}

          {/* Redirigir a inicio si no hay equipo seleccionado */}
          {!selectedTeam && <Route path="*" element={<Navigate to="/" replace />} />}
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
  );
}

export default App;