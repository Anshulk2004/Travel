import Spline from '@splinetool/react-spline/next';
import AnimatedText from '@/src/components/AnimatedText';
import { Button } from "@/src/components/ui/button";
import './globals.css';



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020817] via-[#1a1b2e] to-[#2d1b47]">
      <main className='h-[100vh] relative'>
        <Spline
          scene="https://prod.spline.design/q4Z5zYmo0DuPLzPM/scene.splinecode" 
          className='w-full h-full'
        />
        <div className="relative bottom-16 left-1/2 transform -translate-x-1/2 text-center w-full">
          <div className="flex items-center justify-center space-x-6">
            <AnimatedText text="We've Got You Covered" />
            <Button 
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              size="lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      </main>
      <section className="py-16 px-4 md:px-8 bg-[#1a1b2e]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Additional Content</h2>
          <p className="text-gray-300">
            Here you can add more information about your product or service.
          </p>
        </div>
      </section>
    </div>
  );
}