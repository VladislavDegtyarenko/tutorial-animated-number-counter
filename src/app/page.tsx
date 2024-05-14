import AnimatedCounter from "./AnimatedCounter";

export default function Home() {
  const reducedMotion = false;

  return (
    <main className="text-3xl font-bold font-mono flex min-h-screen justify-center flex-col items-center p-4">
      {reducedMotion ? <span>100</span> : <AnimatedCounter from={0} to={100} />}
    </main>
  );
}
