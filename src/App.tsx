import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Benefits } from './components/sections/Benefits';
import { Courses } from './components/sections/Courses';
import { Community } from './components/sections/Community';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { CallToAction } from './components/sections/CallToAction';
import { RegistrationForm } from './components/sections/RegistrationForm';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Courses />
      <Community />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <RegistrationForm />
      <Footer />
    </div>
  );
}
