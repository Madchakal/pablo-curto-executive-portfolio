export default function Metrics() {
  const metrics = [
    { label: "Years of Experience", value: "20+" },
    { label: "Team Members Led", value: "15+" },
    { label: "Projects Delivered", value: "50+" },
    { label: "Agile Delivery", value: "100%" },
  ];

  return (
    <section id="metrics" className="py-20 border-y border-slate-900 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-slate-900">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-2">
                {metric.value}
              </span>
              <span className="text-sm md:text-base font-medium text-slate-400">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

