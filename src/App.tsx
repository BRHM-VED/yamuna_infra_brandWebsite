import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const Blog = lazy(() => import('./pages/Blog'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectPage = lazy(() => import('./features/projects/components/ProjectPage'))

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}

export default App
