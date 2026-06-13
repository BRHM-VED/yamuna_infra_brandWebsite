import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import WhatsAppFloatingButton from './components/common/WhatsAppFloatingButton'

const Home = lazy(() => import('./pages/Home'))
const Blog = lazy(() => import('./pages/Blog'))
const AllProjectsPage = lazy(() => import('./pages/AllProjectsPage'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))
const TulsiWings = lazy(() => import('./pages/tulsiWing/TulsiWings'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'))
const Disclaimer = lazy(() => import('./pages/Disclaimer'))
const AboutUs = lazy(() => import('./pages/AboutUs'))

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<AllProjectsPage />} />
            <Route path="/projects/tulsi-wings-apartments" element={<TulsiWings />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </Suspense>
      </main>
      <WhatsAppFloatingButton />
    </div>
  )
}

export default App
