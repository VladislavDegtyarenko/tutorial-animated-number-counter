import AnimatedCounter from "./AnimatedCounter";

export default function Home() {
  return (
    <main className="text-3xl font-bold font-mono flex min-h-screen justify-center flex-col items-center p-4">
      <AnimatedCounter from={0} to={100} />
    </main>
  );
}
