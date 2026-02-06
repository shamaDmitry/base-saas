"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function EnhancedSuccessConfetti() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { zIndex: 50 },
        fpsLimit: 120,
        emitters: [
          {
            direction: "top-right",
            rate: { quantity: 15, delay: 0.1 },
            life: { count: 5, duration: 0.1, delay: 0.4 },
            position: { x: 0, y: 100 },
          },
          {
            direction: "top-left",
            rate: { quantity: 15, delay: 0.1 },
            life: { count: 5, duration: 0.1, delay: 0.4 },
            position: { x: 100, y: 100 },
          },
        ],
        particles: {
          number: { value: 0 },
          shape: {
            type: ["image", "circle", "square", "polygon"], // Mixture of types
            options: {
              // image: [
              //   {
              //     src: "/particles/figma-star.svg",
              //     width: 32,
              //     height: 32,
              //   },
              //   {
              //     src: "/particles/figma-logo.svg",
              //     width: 32,
              //     height: 32,
              //   },
              // ],
              polygon: {
                sides: 3, // This creates Triangles
              },
            },
          },
          color: {
            // These colors apply to the circle, square, and triangle
            value: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42"],
          },
          opacity: {
            value: { min: 0.5, max: 1 },
            animation: {
              enable: true,
              speed: 0.5,
              startValue: "max",
              destroy: "min",
            },
          },
          size: {
            value: { min: 5, max: 12 },
          },
          move: {
            enable: true,
            gravity: { enable: true, acceleration: 15 },
            speed: { min: 20, max: 40 },
            decay: 0.05, // Slows them down naturally
            direction: "none",
            outModes: { default: "destroy" },
          },
          rotate: {
            value: { min: 0, max: 360 },
            animation: { enable: true, speed: 10 },
          },
          tilt: {
            enable: true,
            value: { min: 0, max: 360 },
            animation: { enable: true, speed: 20 },
          },
          roll: {
            enable: true,
            speed: 20,
          },
        },
      }}
    />
  );
}
