export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      {children}
    </div>
  );
}
