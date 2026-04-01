import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import ProjectPage from './features/projects/components/ProjectPage'

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
