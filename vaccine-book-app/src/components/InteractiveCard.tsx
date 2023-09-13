"use client";
export default function InteractiveCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-1/5 h-[300px] rounded-lg shadow-lg inline-block p-[10px] m-[10px] bg-white hover:shadow-2xl hover:bg-neutral-200">
      {children}
    </div>
  );
}
