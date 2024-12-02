"use client";
import gsap from "gsap";
import Image from "next/image";
// import React, { useEffect } from "react";

// interface Coordinate {
//   id: string;
//   x: number;
//   y: number;
// }

// const coordinates: Coordinate[] = [
//   { id: "ucla", x: 50, y: 300 },
//   { id: "sri", x: 200, y: 100 },
//   { id: "ucsb", x: 300, y: 350 },
//   { id: "utah", x: 450, y: 200 },
// ];

// const AnimationContainer: React.FC = () => {
//   useEffect(() => {
//     const circles = document.querySelectorAll<HTMLDivElement>(".circle");

//     circles.forEach((circle, index) => {
//       setTimeout(() => {
//         circle.style.width = "50px";
//         circle.style.height = "50px";
//         circle.style.opacity = "1";
//         circle.style.transition = "all 1s ease-in-out";
//       }, index * 1000);
//     });
//   }, []);

//   return (
//     <div id="animation-container">
//       {coordinates.map((coord) => (
//         <div
//           key={coord.id}
//           id={coord.id}
//           className="circle"
//           style={{
//             top: `${coord.y}px`,
//             left: `${coord.x}px`,
//             position: "absolute",
//           }}
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default AnimationContainer;

// import React, { useEffect } from "react";

// const gridSize = 3; // 3x3 grid
// const circleSize = 50; // Size of each circle (width/height)
// const spacing = 100; // Spacing between circles

// // Generate coordinates for a 3x3 grid
// const coordinates = Array.from({ length: gridSize * gridSize }, (_, index) => ({
//   id: `circle-${index}`,
//   x: (index % gridSize) * spacing + spacing,
//   y: Math.floor(index / gridSize) * spacing + spacing,
// }));

// const AnimationContainer: React.FC = () => {
//   useEffect(() => {
//     const circles = document.querySelectorAll<HTMLDivElement>(".circle");

//     circles.forEach((circle, index) => {
//       setTimeout(() => {
//         circle.style.width = `${circleSize}px`;
//         circle.style.height = `${circleSize}px`;
//         circle.style.opacity = "1";
//         circle.style.transition = "all 0.5s ease-in-out";
//       }, index * 300); // Stagger animation with a delay
//     });
//   }, []);

//   return (
//     <div id="animation-container">
//       {coordinates.map((coord) => (
//         <div
//           key={coord.id}
//           id={coord.id}
//           className="circle"
//           style={{
//             top: `${coord.y}px`,
//             left: `${coord.x}px`,
//             position: "absolute",
//           }}
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default AnimationContainer;
// import React, { useEffect } from "react";

// const gridSize = 3; // 3x3 grid
// const circleSize = 50; // Size of each circle (width/height)
// const spacing = 100; // Spacing between circles

// // Generate coordinates for a 3x3 grid
// const coordinates = Array.from({ length: gridSize * gridSize }, (_, index) => ({
//   id: `circle-${index}`,
//   x: (index % gridSize) * spacing + spacing,
//   y: Math.floor(index / gridSize) * spacing + spacing,
// }));

// // Custom animation order for the first phase
// const animationOrderPhase1 = [
//   7, // Last row, second circle
//   1, // First row, second circle
//   3, // Second row, first circle
//   2, // First row, third circle
// ];

// const AnimationContainer: React.FC = () => {
//   useEffect(() => {
//     const circles = document.querySelectorAll<HTMLDivElement>(".circle");

//     // Animate the first phase
//     animationOrderPhase1.forEach((index, delayIndex) => {
//       setTimeout(() => {
//         const circle = circles[index];
//         if (circle) {
//           circle.style.width = `${circleSize}px`;
//           circle.style.height = `${circleSize}px`;
//           circle.style.opacity = "1";
//           circle.style.transition = "all 0.5s ease-in-out";
//         }
//       }, delayIndex * 1000); // Delay between animations
//     });

//     const remainingCircles = coordinates
//       .map((_, index) => index)
//       .filter((index) => !animationOrderPhase1.includes(index));

//     // Animate all remaining circles at the same time
//     setTimeout(() => {
//       remainingCircles.forEach((index) => {
//         const circle = circles[index];
//         if (circle) {
//           circle.style.width = `${circleSize / 2}px`;
//           circle.style.height = `${circleSize / 2}px`;
//           circle.style.opacity = "1";
//           circle.style.transition = "all 0.5s ease-in-out";
//         }
//       });
//     }, animationOrderPhase1.length * 1000); // Start after Phase 1
//   }, []);

//   return (
//     <div id="animation-container">
//       {coordinates.map((coord) => (
//         <div
//           key={coord.id}
//           id={coord.id}
//           className="circle"
//           style={{
//             top: `${coord.y}px`,
//             left: `${coord.x}px`,
//             position: "absolute",
//           }}
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default AnimationContainer;

import React, { useEffect, useRef, useState } from "react";

const gridSize = 3; // 3x3 grid
const circleSize = 50; // Size of each circle (width/height)
const spacing = 100; // Spacing between circles

// Generate coordinates for a 3x3 grid
const coordinates = Array.from({ length: gridSize * gridSize }, (_, index) => ({
  id: `circle-${index}`,
  x: (index % gridSize) * spacing + spacing,
  y: Math.floor(index / gridSize) * spacing + spacing,
}));

const animationOrderPhase1 = [
  7, // Last row, second circle
  1, // First row, second circle
  3, // Second row, first circle
  2, // First row, third circle
];

const AnimationContainer: React.FC = () => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const circles = document.querySelectorAll<HTMLDivElement>(".circle");

    // Phase 1 animation
    animationOrderPhase1.forEach((index, delayIndex) => {
      setTimeout(() => {
        const circle = circles[index];
        if (circle) {
          circle.style.width = `${circleSize}px`;
          circle.style.height = `${circleSize}px`;
          circle.style.opacity = "1";
          circle.style.transition = "all 0.5s ease-in-out";
        }
      }, delayIndex * 1000);
    });

    // Phase 2: Remaining circles (smaller size)
    const remainingCircles = coordinates
      .map((_, index) => index)
      .filter((index) => !animationOrderPhase1.includes(index));

    setTimeout(() => {
      remainingCircles.forEach((index) => {
        const circle = circles[index];
        if (circle) {
          circle.style.width = `${circleSize / 2}px`;
          circle.style.height = `${circleSize / 2}px`;
          circle.style.opacity = "1";
          circle.style.transition = "all 0.5s ease-in-out";
        }
      });
    }, animationOrderPhase1.length * 1000);

    // Slide circles to the left
    setTimeout(() => {
      const container = document.getElementById("animation-container");
      if (container) {
        container.style.transform = "translateX(-50%)";
        container.style.transition = "transform 1s ease-in-out";
      }
    }, remainingCircles.length * 1000);

    // Show title and animate with GSAP
    setTimeout(
      () => {
        setShowTitle(true);
      },
      (animationOrderPhase1.length + remainingCircles.length + 1) * 1000,
    );
  }, []);

  useEffect(() => {
    if (showTitle) {
      gsap.fromTo(
        ".title-container",
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      );
    }
  }, [showTitle]);

  return (
    <div className="grid-flow-col">
      <div id="animation-container">
        {coordinates.map((coord) => (
          <div
            key={coord.id}
            id={coord.id}
            className="circle"
            style={{
              top: `${coord.y}px`,
              left: `${coord.x}px`,
              position: "absolute",
            }}
          ></div>
        ))}
      </div>
      {showTitle && (
        <div
          style={{
            display: "flex",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        ></div>
      )}
    </div>
  );
};

export default AnimationContainer;
