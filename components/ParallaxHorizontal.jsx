"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@studio-freight/hamo";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ParallaxHorizontal({ className, children, speed = 1, id = "parallax" }) {
  const trigger = useRef(); // this is the element that will trigger the animation
  const target = useRef();  // this is the element that will be animated
  const timeline = useRef(); // this is the timeline of the animation that will be created by gsap 
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const x = windowWidth * speed * 0.1;
    //  here the x is the distance the element will move in px when the trigger is at the left of the viewport and the element is at the right of the viewport

    const setX = gsap.quickSetter(target.current, "scrollLeft", "px");
    // here we create a function that will set the scrollLeft position of the element

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current, // this is the element that will trigger the animation
        scrub: true, // this will make the animation smooth and not jumpy when scrolling left and right
        start: "left right", // this means the animation will start when the left side of the trigger element reaches the right side of the viewport 
        end: "right left", // this means the animation will end when the right side of the trigger element reaches the left side of the viewport
        onUpdate: (e) => {
          setX(e.progress * x);
        },
      },
    });

    return () => {
      timeline?.current?.kill(); // this will kill the animation when the component unmounts
    };
  }, [id, speed, windowWidth]);

  return (
    <div ref={trigger} className={className} style={{ width: "100%", overflowX: "scroll" }}>
      <div ref={target} style={{ whiteSpace: "nowrap" }}>{children}</div>
    </div>
  );
}