 import { motion, useScroll, useTransform } from "framer-motion";

 interface NavigationProps {
  scrollRef: React.MutableRefObject<null>;
}

export const Navigation = ({ scrollRef }: NavigationProps) => {
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(0, 183, 255, 0)", "rgba(0, 183, 255, 1)"]
  );
  const height = useTransform(scrollYProgress, [0, 1], [120, 60]);

  return (
    <motion.div
      className="sticky bottom-0 left-0 z-50 flex items-center justify-between w-full p-4"
      id="navigation"
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background,
        height
      }}
    >
      <ul className="flex items-center justify-between gap-4 text-2xl text-black">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </motion.div>
  );
};
