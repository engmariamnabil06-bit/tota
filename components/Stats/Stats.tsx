"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { stats } from "@/data/stats";
import Card from "@/components/ui/Card";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,  });

  return (
    <section ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <Card
              key={item.label}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-purple-400">
  {inView && (
    <CountUp
      start={0}
      end={item.number}
      duration={2.5}
      suffix={item.suffix}
    />
  )}
</h2>

              <p className="mt-3 text-gray-400">
                {item.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}