import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface UseParallaxOptions {
  offset?: ["start start" | "start end" | "end start" | "end end", "start start" | "start end" | "end start" | "end end"];
  inputRange?: number[];
  outputRange?: number[];
}

export const useParallax = (
  distance: number = 50,
  options?: UseParallaxOptions
): { ref: React.RefObject<HTMLDivElement>; y: MotionValue<number>; scrollYProgress: MotionValue<number> } => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: options?.offset || ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    options?.inputRange || [0, 1],
    options?.outputRange || [distance, -distance]
  );

  return { ref, y, scrollYProgress };
};

export const useParallaxMultiple = (values: { distance: number; inputRange?: number[]; outputRange?: number[] }[]) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const transforms = values.map(({ distance, inputRange, outputRange }) =>
    useTransform(
      scrollYProgress,
      inputRange || [0, 1],
      outputRange || [distance, -distance]
    )
  );

  return { ref, scrollYProgress, transforms };
};
