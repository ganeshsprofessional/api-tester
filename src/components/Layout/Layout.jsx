export default function Layout({ children }) {
  return (
    <>
      <main>
        <div className="flex max-w-6xl min-h-screen pt-[50px] mx-auto px-5 bg-slate-800 border border-stone-600 rounded-lg">
          <div className="mx-auto w-full">{children}</div>
        </div>
      </main>
    </>
  );
}
