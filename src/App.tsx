import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Benefits } from './components/sections/Benefits';
import { Courses } from './components/sections/Courses';
import { RegistrationForm } from './components/sections/RegistrationForm';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Courses />
      <RegistrationForm />
      <Footer />
    </div>
  );
}
