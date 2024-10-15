import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import WorkExperience from "./pages/WorkExperience"
import AppLayout from "./pages/AppLayout"
import Contact from "./pages/Contact"
import ProjectLinksPage from "./pages/ProjectLinksPage"
import QualificationsPage from "./pages/QualificationsPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='homepage' />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="qualifications" element={<QualificationsPage />} />
          <Route path="projects" element={<ProjectLinksPage />} />
          <Route path="experience" element={<WorkExperience />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

// npm i styled-components
// npm i react-icons
