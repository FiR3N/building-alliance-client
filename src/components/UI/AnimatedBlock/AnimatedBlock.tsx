import { FC, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "@react-spring/web";
import { isMobile } from "react-device-detect";

interface AnimatedBlockProps {
  children: React.ReactNode;
  isAbove?: boolean;
}

const AnimatedBlock: FC<AnimatedBlockProps> = ({ children, isAbove }) => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(60px)",
  });

  const animationAboveProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(60px)",

    position: "relative",
    zIndex: "2",
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <animated.div
      ref={ref}
      style={isAbove ? animationAboveProps : animationProps}
    >
      {children}
    </animated.div>
  );
};

export default AnimatedBlock;
