import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Projects from './pages/Projects'
import NewsDetails from './pages/NewsDetails'
import ProjectDetails from './pages/ProjectDetails'

const queryClient = new QueryClient();


function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/news/:slug" element={<NewsDetails />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
