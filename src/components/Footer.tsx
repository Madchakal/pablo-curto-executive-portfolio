export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-900 bg-slate-950 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-6">
            Ready to build something <span className="text-cyan-400">extraordinary?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mb-10">
            Let's collaborate to transform your vision into a scalable, high-performance digital product. I'm currently open for new opportunities.
          </p>
          <a 
            href="https://wa.me/541153852413" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-slate-200"
          >
            Start a Conversation
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-900">
          <p className="text-sm text-slate-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pablo Curto. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
            <a href="https://www.linkedin.com/in/pablo-curto-04b48031" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:pablo.daniel.curto@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

