export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div
        className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block 
      lg:group-hover:bg-stone-50
      lg:group-hover:drop-shadow-[0_0_1px_rgba(0,0,0,0.15)]
      dark:lg:group-hover:bg-slate-800/50 
      dark:lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] 
      
      dark:lg:group-hover:drop-shadow-lg"></div>
      {children}
    </div>
  );
}
