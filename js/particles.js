import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js';

export function initParticles() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true }); // Transparenz aktivieren
  renderer.setClearColor(0x000000, 0); // Vollständig transparenter Hintergrund
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('particle-bg').appendChild(renderer.domElement);

  const particles = new THREE.BufferGeometry();
  const particleCount = 1000;
  const posArray = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 2000;
  }

  particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  const material = new THREE.PointsMaterial({
    size: 2,
    color: 0x10b981,
    transparent: true,
    opacity: 0.6,
  });

  const particleSystem = new THREE.Points(particles, material);
  scene.add(particleSystem);

  camera.position.z = 1000;

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  function animate() {
    requestAnimationFrame(animate);
    particleSystem.rotation.y += 0.001;
    particleSystem.rotation.x = mouseY * 0.2;
    particleSystem.rotation.y = mouseX * 0.2;
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Sicherstellen, dass Canvas nicht überlagert
  renderer.domElement.style.zIndex = '-1';
}