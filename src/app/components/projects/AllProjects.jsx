// "use client";
// import React from "react";

// export default function AllProjects() {
//   const _projects = [
//     {
//       name: "HUGEM Innovation Challenge SEA IV",
//       type: "Visual Identity, Event Design",
//     },
//     {
//       name: "Nubudget",
//       type: "Product Design",
//     },
//     {
//       name: "The Crafty Cub",
//       type: "Visual Identity, Web Design",
//     },
//     {
//       name: "Anemoia",
//       type: "Visual Identity",
//     },
//     {
//       name: "Synthetic Visions",
//       type: "Visual Identity, Event Design",
//     },
//     {
//       name: "Vancouver Humane Society",
//       type: "Publications",
//     },
//     {
//       name: "The Little Book of Succulents",
//       type: "Publications",
//     },
//     {
//       name: "The Wild Bloom",
//       type: "Packaging Design",
//     },
//     {
//       name: "The Wild Bloom",
//       type: "Visual Identity",
//     },
//   ];

//   return (
//     <div style={{ paddingBottom: "300px", paddingTop:'200px', display: 'grid', gap: '150px' }}>
//       <div style={{paddingInline: '300px', lineHeight: '2cm'}}>
//         <p className="font-endisplay" style={{fontSize:'6rem',transform: 'scaleY(0.9)'}}>CRAFTED</p>
//         <p className="font-endisplay" style={{fontSize:'6rem', transform: 'scaleY(0.9)', fontStyle:'italic'}}>PROJECTS</p>
//       </div>
//       <div>
//         {_projects.map((project, index) => (
//           <div
//             key={index}
//             style={{
//               display: "flex",
//               gap: "50px",
//               alignItems: 'center',
//               paddingInline: '16.8vw'
//             }}
//           >
//             <div style={{ borderBottom: "1px solid black",display: 'flex', width: '100%', padding:'30px 0px 30px 0px'}}>
//                     <div style={{ display: "grid", gap: "30px",gridTemplateColumns: 'repeat(2, 1fr)', width: '50%', }}>
//                         <p style={{ flex: 1 }}>{project.name}</p>
//                         <p style={{ flex: 1 }}>{project.type}</p>
//                     </div>
//                     <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginLeft: 'auto'}}>
//                         <p style={{ flex: 1 }}>&#8594;</p>
//                     </div>
//                 </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AllProjects() {
  const _projects = [
    {
      name: "HUGEM Innovation Challenge SEA IV",
      type: "Visual Identity, Event Design",
      img: 'https://imgs.search.brave.com/XKUD749tjOvSP2maFZkPmTckY7mAfnglBg7J6YgWEgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvSG9t/ZVBhZ2UvRm91clBh/Y2svQzItUGhvdG9z/LWlTdG9jay0xMzU2/MTk3Njk1LmpwZw'
    },
    {
      name: "Nubudget",
      type: "Product Design",
      img: 'https://imgs.search.brave.com/tNrLcSRZN9YQWceqlLZKQRU-okDeaA3VQDREElZwp3w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/MTkxMzY1Ni9waG90/by9uYXR1cmUtbW9i/aWxlLXdhbGxwYXBl/ci1pbWFnZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9SzN4/d2RVeUEzeXV0dGxr/ZG5iLU5RTmczcUND/ZkNCd1B0bjFyaFdX/a2VUbz0'
    },
    {
      name: "The Crafty Cub",
      type: "Visual Identity, Web Design",
      img: 'https://imgs.search.brave.com/nG1XXrjBGwj_rWKgiJkqEsDlf4PbjUpJ0kzu9eRx4Ag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMTc0NDkxNTMz/My5qcGc'
    },
    {
      name: "Anemoia",
      type: "Visual Identity",
      img:'https://imgs.search.brave.com/GMx42huhMoMMGtQBPUD37eTHYl4BplRgozThhaWKV68/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9uYXR1cmVfOTUz/ODAwLTMuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA'
    },
    {
      name: "Synthetic Visions",
      type: "Visual Identity, Event Design",
      img:'https://imgs.search.brave.com/0rCr7C9Kf_ZoaLRhqsmKKYsWUPlRflf4QNanL5Zwky8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/MDc3NDg3OS9waG90/by9ncmVlbi1ncmFz/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9UnYyWDlDSWZO/Vm5ZT1A2Mzh2Tlh0/RUdkcHJ2U1RSZWd4/eHdPYXNTaUx4cz0'
    },
    {
      name: "Vancouver Humane Society",
      type: "Publications",
      img: 'https://imgs.search.brave.com/brxBouSr8Nf_4_ZSpMLpI1alj227wBRFLFwlILFi5tk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgyLzBk/LzEwLzgyMGQxMDZl/NDljZDFiNTQ1NTRi/NWQ4ZmRlMDZhNGVj/LmpwZw'
    },
    {
      name: "The Little Book of Succulents",
      type: "Publications",
      img: 'https://imgs.search.brave.com/0sJQZ9YC9QyBFFNSDUjWz3UO4MdDnxQZQbZ5v-S4Zoc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/OTY3NjExOC9waG90/by9wYWxtLXRyZWVz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz13dnQ5aHR1Nm1m/bWpLTEVJbE1sMmhu/a3k3OUFzMERFdUVp/LXJ2V1hQSG1nPQ'
    },
    {
      name: "The Wild Bloom",
      type: "Packaging Design",
      img: 'https://imgs.search.brave.com/ZBJRfUNkH1Pagbrd7Ma5qJbU_wxVyANtsrj-GEBf3uw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/YW50LWFuZ2Vsb18x/ODE2MjQtMTAzNDku/anBnP3NlbXQ9YWlz/X2h5YnJpZA'
    },
    {
      name: "The Wild Bloom",
      type: "Visual Identity",
      img: 'https://imgs.search.brave.com/hNphAU3IYlSYF7iQJTyaQUG12IfWm6SF3oXZLYH5DyA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZXRh/cGl4ZWwuY29tL2Fz/c2V0cy91cGxvYWRz/LzIwMjIvMTIvaW1h/Z2U3LTMtODAweDUz/NC5qcGc'
    },
  ];

  const imageRef = useRef(null);
  const offsetX = 50;
  const offsetY = -450;

  const handleMouseEnter = (img) => {
    if (imageRef.current) {
      imageRef.current.src = img;
      gsap.to(imageRef.current, { opacity: 1, scale: 1, duration: 0.3 });
    }
  };

  const handleMouseMove = (e) => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        x: e.clientX + offsetX,
        y: e.clientY + offsetY,
        duration: 0.1,
        ease: "power3.out",
      });
    }
  };
  useEffect(() => {
    if (imageRef.current) {
      gsap.set(imageRef.current, {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        opacity: 0,
        scale: 0.5,
      });
    }
  }, []);

  const handleMouseLeave = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, { opacity: 0, scale: 0.5, duration: 0.2 });
    }
  };


  return (
    <div style={{ paddingBottom: "300px", paddingTop:'200px', display: 'grid', gap: '150px' }}>
      <div style={{paddingInline: '300px', lineHeight: '2cm'}}>
        <p className="font-endisplay" style={{fontSize:'6rem',transform: 'scaleY(0.9)'}}>CRAFTED</p>
        <p className="font-endisplay" style={{fontSize:'6rem', transform: 'scaleY(0.9)', fontStyle:'italic'}}>PROJECTS</p>
      </div>
      <div>
        {_projects.map((project, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "50px",
              alignItems: 'center',
              paddingInline: '16.8vw'
            }}

          >
            <div             onMouseEnter={() => handleMouseEnter(project.img)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave} style={{ borderBottom: "1px solid black",display: 'flex', width: '100%', padding:'30px 0px 30px 0px'}}>
                    <div style={{ display: "grid", gap: "30px",gridTemplateColumns: 'repeat(2, 1fr)', width: '50%', }}>
                        <p style={{ flex: 1 }}>{project.name}</p>
                        <p style={{ flex: 1 }}>{project.type}</p>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginLeft: 'auto'}}>
                        <p style={{ flex: 1 }}>&#8594;</p>
                    </div>
                </div>
          </div>
        ))}
      </div>
      <img
        ref={imageRef}
        className="absolute w-[200px] h-[150px] rounded-lg shadow-lg pointer-events-none opacity-0"
        style={{ position: "fixed", transform: "translate(-50%, -50%) scale(0.5)", objectFit: "cover" }}
      />
    </div>
  );

}
