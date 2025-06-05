import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TeamSelectPage } from './pages/teamSelectPage';
import { TeamFormPage } from './pages/teamFormPage';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/select-team" replace />} />
        <Route path="/select-team" element={<TeamSelectPage />} />
        <Route path="/team-form" element={<TeamFormPage />} />
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