import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

/* ══════════════════════════════════════════════════════════
   NODE GLOW SHADER — adapts to light / dark modes
══════════════════════════════════════════════════════════ */
const NodeMaterial = shaderMaterial(
  {
    uTime: 0,
    uScroll: 0,
    uIsDark: 1.0,
    uColorA: new THREE.Color('#38bdf8'),
    uColorB: new THREE.Color('#818cf8'),
  },
  /* vertex shader */ `
    uniform float uTime;
    uniform float uScroll;
    attribute float aScale;
    attribute float aActivity;
    varying float vActivity;

    void main() {
      vActivity = aActivity;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      float pulse = 1.0 + sin(uTime * 3.2 + aActivity * 6.28) * 0.20 * (0.3 + aActivity * 0.7);
      float size = aScale * pulse * (135.0 / -mvPosition.z);
      gl_PointSize = clamp(size, 7.0, 34.0);
      gl_Position  = projectionMatrix * mvPosition;
    }
  `,
  /* fragment shader */ `
    uniform float uTime;
    uniform float uScroll;
    uniform float uIsDark;
    uniform vec3  uColorA;
    uniform vec3  uColorB;
    varying float vActivity;

    void main() {
      vec2  coord = gl_PointCoord - 0.5;
      float dist  = length(coord);
      if (dist > 0.5) discard;

      float core = smoothstep(0.48, 0.0, dist);
      core = pow(core, 1.5);
      float halo = smoothstep(0.5, 0.05, dist) * 0.75;

      vec3 themeCol  = mix(uColorA, uColorB, 0.5 + 0.5 * sin(uScroll * 3.14159));

      if (uIsDark > 0.5) {
        // Dark theme: bright white core + glowing cyber halo
        vec3 activeCol = mix(themeCol, vec3(1.0, 1.0, 1.0), 0.75);
        vec3 idleCol   = mix(themeCol * 0.9, vec3(0.4, 0.7, 1.0), 0.35);
        vec3 col = mix(idleCol, activeCol, vActivity) + activeCol * core * (0.9 + vActivity * 1.8);
        float brightness = core * 1.6 + halo * 0.85;
        float alpha = brightness * (0.70 + vActivity * 0.30);
        gl_FragColor = vec4(col, min(alpha, 1.0));
      } else {
        // Light theme: deep vivid sapphire nucleus with electric cyan halo
        vec3 darkCore = mix(themeCol, vec3(0.05, 0.15, 0.45), 0.35);
        vec3 glowCore = mix(themeCol, vec3(0.01, 0.55, 0.95), vActivity);
        vec3 col = mix(darkCore, glowCore, core);
        float alpha = (core * 0.95 + halo * 0.55) * (0.65 + vActivity * 0.35);
        gl_FragColor = vec4(col, min(alpha, 0.95));
      }
    }
  `
);

/* ══════════════════════════════════════════════════════════
   EDGE GLOW SHADER — adapts to light / dark modes
══════════════════════════════════════════════════════════ */
const EdgeMaterial = shaderMaterial(
  {
    uTime: 0,
    uScroll: 0,
    uIsDark: 1.0,
    uColor: new THREE.Color('#38bdf8'),
  },
  /* vertex shader */ `
    attribute float aOffset;
    attribute float aActivity;
    varying float vActivity;
    varying float vOffset;

    void main() {
      vActivity   = aActivity;
      vOffset     = aOffset;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  /* fragment shader */ `
    uniform float uTime;
    uniform float uScroll;
    uniform float uIsDark;
    uniform vec3  uColor;
    varying float vActivity;
    varying float vOffset;

    void main() {
      float speed = 1.5 + uScroll * 1.3;
      float pulse = fract(uTime * speed + vOffset);
      float spark = smoothstep(0.40, 0.50, pulse) * smoothstep(0.60, 0.50, pulse);

      if (uIsDark > 0.5) {
        float baseGlow = 0.28 + vActivity * 0.52;
        vec3 col = mix(uColor * 0.9, vec3(1.0, 1.0, 1.0), spark * (0.75 + vActivity * 0.25));
        float alpha = min(baseGlow + spark * 1.3, 0.95);
        gl_FragColor = vec4(col, alpha);
      } else {
        // Light mode: clean crisp azure / indigo axon lines
        float baseGlow = 0.22 + vActivity * 0.45;
        vec3 col = mix(uColor, vec3(0.01, 0.45, 0.85), spark * 0.8);
        float alpha = min(baseGlow + spark * 0.65, 0.85);
        gl_FragColor = vec4(col, alpha);
      }
    }
  `
);

/* ══════════════════════════════════════════════════════════
   CURSOR TENDRIL SHADER
══════════════════════════════════════════════════════════ */
const TendrilMaterial = shaderMaterial(
  {
    uTime: 0,
    uIsDark: 1.0,
    uColor: new THREE.Color('#38bdf8'),
  },
  /* vertex shader */ `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  /* fragment shader */ `
    uniform float uTime;
    uniform float uIsDark;
    uniform vec3  uColor;
    void main() {
      float shimmer = 0.75 + 0.25 * sin(uTime * 14.0);
      vec3 col = uIsDark > 0.5 ? mix(uColor, vec3(1.0, 1.0, 1.0), 0.65) : mix(uColor, vec3(0.1, 0.4, 0.9), 0.4);
      gl_FragColor = vec4(col, shimmer * 0.95);
    }
  `
);

/* ══════════════════════════════════════════════════════════
   SHOCKWAVE RING SHADER
══════════════════════════════════════════════════════════ */
const ShockwaveRingMaterial = shaderMaterial(
  {
    uColor: new THREE.Color('#38bdf8'),
    uProgress: 0,
    uIsDark: 1.0,
  },
  /* vertex shader */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  /* fragment shader */ `
    uniform vec3  uColor;
    uniform float uProgress;
    uniform float uIsDark;
    varying vec2  vUv;

    void main() {
      vec2 center = vUv - 0.5;
      float dist = length(center) * 2.0;
      float ring = smoothstep(0.78, 0.96, dist) * smoothstep(1.0, 0.96, dist);
      float innerGlow = smoothstep(0.4, 0.95, dist) * 0.18;
      float fade = pow(1.0 - clamp(uProgress, 0.0, 1.0), 1.3);
      float alpha = (ring + innerGlow) * fade * 0.95;
      if (alpha <= 0.005) discard;
      vec3 col = uIsDark > 0.5 ? mix(uColor, vec3(1.0, 1.0, 1.0), 0.6) : mix(uColor, vec3(0.05, 0.35, 0.8), 0.4);
      gl_FragColor = vec4(col, alpha);
    }
  `
);

extend({ NodeMaterial, EdgeMaterial, TendrilMaterial, ShockwaveRingMaterial });

/* ══════════════════════════════════════════════════════════
   CONFIG & PALETTES
══════════════════════════════════════════════════════════ */
const NODE_COUNT        = 190;
const MAX_EDGES         = 520;
const NEIGHBOR_COUNT    = 3;
const MAX_CONNECT_DIST  = 4.4;
const MOUSE_ATTRACT_RAD = 3.6;
const SPRING_K          = 0.038;
const SPRING_DAMP       = 0.88;

const DARK_THEMES = [
  { p: 0.00, colorA: new THREE.Color('#38bdf8'), colorB: new THREE.Color('#0284c7') },
  { p: 0.25, colorA: new THREE.Color('#818cf8'), colorB: new THREE.Color('#6366f1') },
  { p: 0.50, colorA: new THREE.Color('#a855f7'), colorB: new THREE.Color('#ec4899') },
  { p: 0.75, colorA: new THREE.Color('#10b981'), colorB: new THREE.Color('#06b6d4') },
  { p: 1.00, colorA: new THREE.Color('#f59e0b'), colorB: new THREE.Color('#fb7185') },
];

const LIGHT_THEMES = [
  { p: 0.00, colorA: new THREE.Color('#0284c7'), colorB: new THREE.Color('#0369a1') }, // Electric Sky / Sapphire
  { p: 0.25, colorA: new THREE.Color('#4f46e5'), colorB: new THREE.Color('#4338ca') }, // Royal Indigo
  { p: 0.50, colorA: new THREE.Color('#7c3aed'), colorB: new THREE.Color('#db2777') }, // Vibrant Purple / Rose
  { p: 0.75, colorA: new THREE.Color('#059669'), colorB: new THREE.Color('#0891b2') }, // Rich Emerald / Teal
  { p: 1.00, colorA: new THREE.Color('#d97706'), colorB: new THREE.Color('#e11d48') }, // Amber / Ruby
];

function getThemeColors(progress, isDark) {
  const p = Math.min(Math.max(progress, 0), 1);
  const palette = isDark ? DARK_THEMES : LIGHT_THEMES;
  for (let i = 0; i < palette.length - 1; i++) {
    const t1 = palette[i];
    const t2 = palette[i + 1];
    if (p >= t1.p && p <= t2.p) {
      const f = (p - t1.p) / (t2.p - t1.p);
      return {
        cA: t1.colorA.clone().lerp(t2.colorA, f),
        cB: t1.colorB.clone().lerp(t2.colorB, f),
      };
    }
  }
  return { cA: palette[0].colorA, cB: palette[0].colorB };
}

/* ══════════════════════════════════════════════════════════
   NEURAL NETWORK 3D SCENE
══════════════════════════════════════════════════════════ */
function NeuralNet({ scrollRef, mouseRef, clicksRef, isDark }) {
  const groupRef       = useRef();
  const nodeRef        = useRef();
  const edgeRef        = useRef();
  const tendrilRef     = useRef();
  const nodeMatRef     = useRef();
  const edgeMatRef     = useRef();
  const tendrilMatRef  = useRef();
  const shockwavesRef  = useRef([]);
  const [renderShockwaves, setRenderShockwaves] = useState([]);

  const { camera } = useThree();

  /* ── Wide balanced node distribution across entire screen ── */
  const { homePositions, nodeScales, nodeBaseActivity, edgePairs } = useMemo(() => {
    const homes  = new Float32Array(NODE_COUNT * 3);
    const scales = new Float32Array(NODE_COUNT);
    const acts   = new Float32Array(NODE_COUNT);

    for (let i = 0; i < NODE_COUNT; i++) {
      let x, y, z;
      const clusterRoll = Math.random();

      if (clusterRoll < 0.40) {
        const rad = 1.0 + Math.random() * 4.2;
        const ang = Math.random() * Math.PI * 2;
        x = -6.0 + Math.cos(ang) * rad * 1.25;
        y = Math.sin(ang) * rad * 1.15;
        z = (Math.random() - 0.5) * 5.0;
      } else if (clusterRoll < 0.80) {
        const rad = 1.0 + Math.random() * 4.2;
        const ang = Math.random() * Math.PI * 2;
        x = 6.0 + Math.cos(ang) * rad * 1.25;
        y = Math.sin(ang) * rad * 1.15;
        z = (Math.random() - 0.5) * 5.0;
      } else {
        x = (Math.random() - 0.5) * 19.0;
        y = (Math.random() - 0.5) * 11.5;
        z = (Math.random() - 0.5) * 6.5;
      }

      homes[i * 3]     = x;
      homes[i * 3 + 1] = y;
      homes[i * 3 + 2] = z;

      const isHub = Math.random() < 0.20;
      scales[i] = isHub ? 2.1 + Math.random() * 0.5 : 0.9 + Math.random() * 0.6;
      acts[i]   = isHub ? 0.35 + Math.random() * 0.2 : 0.15 + Math.random() * 0.15;
    }

    const pairSet = new Set();
    const pairs   = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const ax = homes[i * 3], ay = homes[i * 3 + 1], az = homes[i * 3 + 2];
      const dists = [];

      for (let j = 0; j < NODE_COUNT; j++) {
        if (i === j) continue;
        const bx = homes[j * 3], by = homes[j * 3 + 1], bz = homes[j * 3 + 2];
        const dx = ax - bx, dy = ay - by, dz = az - bz;
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < MAX_CONNECT_DIST) {
          dists.push({ j, d });
        }
      }

      dists.sort((a, b) => a.d - b.d);
      const connCount = Math.min(dists.length, NEIGHBOR_COUNT + (Math.random() > 0.5 ? 1 : 0));

      for (let k = 0; k < connCount && pairs.length < MAX_EDGES; k++) {
        const j = dists[k].j;
        const key = i < j ? `${i}_${j}` : `${j}_${i}`;
        if (!pairSet.has(key)) {
          pairSet.add(key);
          pairs.push([i, j]);
        }
      }
    }

    return {
      homePositions: homes,
      nodeScales: scales,
      nodeBaseActivity: acts,
      edgePairs: pairs,
    };
  }, []);

  const livePositions = useRef(new Float32Array(homePositions));
  const liveVelocities = useRef(
    Array.from({ length: NODE_COUNT }, () => new THREE.Vector3())
  );
  const liveActivities = useRef(new Float32Array(nodeBaseActivity));
  const targetActivities = useRef(new Float32Array(nodeBaseActivity));

  const prevScroll = useRef(0);
  const frameCount = useRef(0);

  const nodeGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position',  new THREE.BufferAttribute(new Float32Array(homePositions), 3));
    geo.setAttribute('aScale',    new THREE.BufferAttribute(nodeScales, 1));
    geo.setAttribute('aActivity', new THREE.BufferAttribute(new Float32Array(nodeBaseActivity), 1));
    return geo;
  }, [homePositions, nodeScales, nodeBaseActivity]);

  const edgeGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = edgePairs.length;
    const verts   = new Float32Array(count * 2 * 3);
    const offsets = new Float32Array(count * 2);
    const acts    = new Float32Array(count * 2);

    for (let e = 0; e < count; e++) {
      const [i, j] = edgePairs[e];
      verts[e * 6]     = homePositions[i * 3];
      verts[e * 6 + 1] = homePositions[i * 3 + 1];
      verts[e * 6 + 2] = homePositions[i * 3 + 2];
      verts[e * 6 + 3] = homePositions[j * 3];
      verts[e * 6 + 4] = homePositions[j * 3 + 1];
      verts[e * 6 + 5] = homePositions[j * 3 + 2];

      const phase = Math.random();
      offsets[e * 2]     = phase;
      offsets[e * 2 + 1] = phase;
      acts[e * 2]        = 0.2;
      acts[e * 2 + 1]    = 0.2;
    }

    geo.setAttribute('position',  new THREE.BufferAttribute(verts, 3));
    geo.setAttribute('aOffset',   new THREE.BufferAttribute(offsets, 1));
    geo.setAttribute('aActivity', new THREE.BufferAttribute(acts, 1));
    return geo;
  }, [edgePairs, homePositions]);

  const tendrilGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const verts = new Float32Array(4 * 2 * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
    return geo;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    frameCount.current++;
    const clampedDelta = Math.min(delta, 0.05);

    const s = scrollRef.current;
    const scrollDelta = Math.abs(s - prevScroll.current);
    prevScroll.current = s;

    /* ── 1. Color Themes Interpolation ── */
    const { cA, cB } = getThemeColors(s, isDark);
    const darkVal = isDark ? 1.0 : 0.0;

    if (nodeMatRef.current) {
      nodeMatRef.current.uTime = t;
      nodeMatRef.current.uScroll = s;
      nodeMatRef.current.uIsDark = darkVal;
      nodeMatRef.current.uColorA.lerp(cA, 0.06);
      nodeMatRef.current.uColorB.lerp(cB, 0.06);
    }
    if (edgeMatRef.current) {
      edgeMatRef.current.uTime = t;
      edgeMatRef.current.uScroll = s;
      edgeMatRef.current.uIsDark = darkVal;
      edgeMatRef.current.uColor.lerp(cA, 0.06);
    }
    if (tendrilMatRef.current) {
      tendrilMatRef.current.uTime = t;
      tendrilMatRef.current.uIsDark = darkVal;
      tendrilMatRef.current.uColor.lerp(cB, 0.06);
    }

    /* ── 2. Scroll 3D Multi-Axis Rotation & Dolly Flight ── */
    if (groupRef.current) {
      const mxNdc = mouseRef.current.ndcX;
      const myNdc = mouseRef.current.ndcY;

      const targetRotY = s * Math.PI * 0.45 + mxNdc * 0.22;
      const targetRotX = Math.sin(s * Math.PI) * 0.22 - myNdc * 0.18;
      const targetRotZ = Math.sin(s * Math.PI * 0.5) * 0.08;

      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY, 3.5, clampedDelta);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX, 3.5, clampedDelta);
      groupRef.current.rotation.z = THREE.MathUtils.damp(groupRef.current.rotation.z, targetRotZ, 3.5, clampedDelta);

      const targetPosZ = Math.sin(s * Math.PI * 2.0) * 1.5;
      const targetPosX = mxNdc * 0.5;
      const targetPosY = myNdc * 0.35;

      groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetPosX, 3.5, clampedDelta);
      groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetPosY, 3.5, clampedDelta);
      groupRef.current.position.z = THREE.MathUtils.damp(groupRef.current.position.z, targetPosZ, 2.5, clampedDelta);
    }

    /* ── 3. Cursor in Local Coordinates ── */
    const v = new THREE.Vector3(mouseRef.current.ndcX, mouseRef.current.ndcY, 0.5);
    v.unproject(camera);
    v.sub(camera.position).normalize();
    const distanceToZ0 = -camera.position.z / v.z;
    const cursorWorld = camera.position.clone().add(v.multiplyScalar(distanceToZ0));
    const cursorLocal = groupRef.current ? groupRef.current.worldToLocal(cursorWorld.clone()) : cursorWorld;

    /* ── 4. Process Click Shockwaves ── */
    let addedNewWave = false;
    while (clicksRef.current.length > 0) {
      const clickEvent = clicksRef.current.shift();
      const cv = new THREE.Vector3(clickEvent.ndcX, clickEvent.ndcY, 0.5);
      cv.unproject(camera);
      cv.sub(camera.position).normalize();
      const cDist = -camera.position.z / cv.z;
      const clickWorld = camera.position.clone().add(cv.multiplyScalar(cDist));
      const clickLocal = groupRef.current ? groupRef.current.worldToLocal(clickWorld.clone()) : clickWorld;

      shockwavesRef.current.push({
        id: Math.random(),
        center: clickLocal,
        startTime: t,
        maxRadius: 18.0,
        speed: 12.0,
        strength: 0.28,
      });
      addedNewWave = true;
    }

    shockwavesRef.current = shockwavesRef.current.filter((sw) => t - sw.startTime < sw.maxRadius / sw.speed);

    if (addedNewWave || (shockwavesRef.current.length > 0 && frameCount.current % 3 === 0)) {
      setRenderShockwaves(
        shockwavesRef.current.map((sw) => {
          const age = t - sw.startTime;
          const radius = age * sw.speed;
          return {
            id: sw.id,
            x: sw.center.x,
            y: sw.center.y,
            z: sw.center.z,
            radius: Math.max(radius, 0.1),
            progress: radius / sw.maxRadius,
          };
        })
      );
    } else if (shockwavesRef.current.length === 0 && renderShockwaves.length > 0) {
      setRenderShockwaves([]);
    }

    /* ── 5. Scroll Synaptic Surges ── */
    if (scrollDelta > 0.003 || frameCount.current % 14 === 0) {
      const fireCount = scrollDelta > 0.008 ? 5 : 1;
      for (let f = 0; f < fireCount; f++) {
        const randNode = Math.floor(Math.random() * NODE_COUNT);
        targetActivities.current[randNode] = 1.0;
      }
    }

    /* ── 6. Physics Simulation ── */
    const pos  = livePositions.current;
    const vels = liveVelocities.current;
    const act  = liveActivities.current;
    const tgt  = targetActivities.current;

    const closestToCursor = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const px = pos[i * 3];
      const py = pos[i * 3 + 1];
      const pz = pos[i * 3 + 2];

      const hx = homePositions[i * 3];
      const hy = homePositions[i * 3 + 1];
      const hz = homePositions[i * 3 + 2];

      vels[i].x += (hx - px) * SPRING_K;
      vels[i].y += (hy - py) * SPRING_K;
      vels[i].z += (hz - pz) * SPRING_K;

      const ph = t * 0.9 + i * 1.618;
      vels[i].x += Math.sin(ph * 0.7) * 0.0010;
      vels[i].y += Math.cos(ph * 0.9) * 0.0010;
      vels[i].z += Math.sin(ph * 0.5) * 0.0008;

      const cdx = px - cursorLocal.x;
      const cdy = py - cursorLocal.y;
      const cdz = pz - cursorLocal.z;
      const cDist = Math.sqrt(cdx * cdx + cdy * cdy + cdz * cdz);

      if (cDist < MOUSE_ATTRACT_RAD && cDist > 0.02) {
        const factor = 1.0 - cDist / MOUSE_ATTRACT_RAD;
        const pushForce = factor * 0.024;
        vels[i].x += (cdx / cDist) * pushForce;
        vels[i].y += (cdy / cDist) * pushForce;
        vels[i].z += (cdz / cDist) * pushForce * 0.4;
        tgt[i] = Math.max(tgt[i], 0.75 + factor * 0.25);
      }

      if (cDist < 4.5) {
        closestToCursor.push({ i, dist: cDist, px, py, pz });
      }

      for (let sIdx = 0; sIdx < shockwavesRef.current.length; sIdx++) {
        const sw = shockwavesRef.current[sIdx];
        const age = t - sw.startTime;
        const radius = age * sw.speed;

        const sdx = px - sw.center.x;
        const sdy = py - sw.center.y;
        const sdz = pz - sw.center.z;
        const sDist = Math.sqrt(sdx * sdx + sdy * sdy + sdz * sdz);

        const waveWidth = 2.6;
        const distFromFront = Math.abs(sDist - radius);

        if (distFromFront < waveWidth && sDist > 0.05) {
          const intensity = (1.0 - distFromFront / waveWidth) * (1.0 - radius / sw.maxRadius);
          if (intensity > 0) {
            const blast = intensity * sw.strength;
            vels[i].x += (sdx / sDist) * blast;
            vels[i].y += (sdy / sDist) * blast;
            vels[i].z += (sdz / sDist) * blast * 0.6;
            tgt[i] = 1.0;
          }
        }
      }

      vels[i].multiplyScalar(SPRING_DAMP);

      pos[i * 3]     += vels[i].x;
      pos[i * 3 + 1] += vels[i].y;
      pos[i * 3 + 2] += vels[i].z;

      act[i] = THREE.MathUtils.damp(act[i], tgt[i], 4.0, clampedDelta);
      tgt[i] = THREE.MathUtils.damp(tgt[i], nodeBaseActivity[i], 1.5, clampedDelta);
    }

    /* ── 7. Dynamic Cursor Tendrils ── */
    closestToCursor.sort((a, b) => a.dist - b.dist);
    if (tendrilRef.current) {
      const tPos = tendrilRef.current.geometry.attributes.position.array;
      const numTendrils = Math.min(closestToCursor.length, 4);
      let tIdx = 0;
      let validCount = 0;
      for (let k = 0; k < numTendrils; k++) {
        const node = closestToCursor[k];
        if (node.dist < 4.0) {
          tPos[tIdx++] = node.px;
          tPos[tIdx++] = node.py;
          tPos[tIdx++] = node.pz;
          tPos[tIdx++] = cursorLocal.x;
          tPos[tIdx++] = cursorLocal.y;
          tPos[tIdx++] = cursorLocal.z;
          validCount++;
        }
      }
      for (let k = tIdx; k < tPos.length; k++) tPos[k] = 0;
      tendrilRef.current.geometry.attributes.position.needsUpdate = true;
      tendrilRef.current.geometry.setDrawRange(0, validCount * 2);
    }

    /* ── 8. Upload Nodes to GPU ── */
    if (nodeRef.current) {
      const pAttr = nodeRef.current.geometry.attributes.position;
      const aAttr = nodeRef.current.geometry.attributes.aActivity;
      pAttr.array.set(pos);
      aAttr.array.set(act);
      pAttr.needsUpdate = true;
      aAttr.needsUpdate = true;
    }

    /* ── 9. Upload Edges to GPU ── */
    if (edgeRef.current && (frameCount.current % 2 === 0 || shockwavesRef.current.length > 0)) {
      const eGeo = edgeRef.current.geometry;
      const ep   = eGeo.attributes.position.array;
      const ea   = eGeo.attributes.aActivity.array;

      const numEdges = edgePairs.length;
      for (let e = 0; e < numEdges; e++) {
        const [i, j] = edgePairs[e];
        const vIdx = e * 6;
        ep[vIdx]     = pos[i * 3];
        ep[vIdx + 1] = pos[i * 3 + 1];
        ep[vIdx + 2] = pos[i * 3 + 2];
        ep[vIdx + 3] = pos[j * 3];
        ep[vIdx + 4] = pos[j * 3 + 1];
        ep[vIdx + 5] = pos[j * 3 + 2];

        const edgeAct = Math.max(act[i], act[j]);
        ea[e * 2]     = edgeAct;
        ea[e * 2 + 1] = edgeAct;
      }
      eGeo.attributes.position.needsUpdate = true;
      eGeo.attributes.aActivity.needsUpdate = true;
    }
  });

  const blendMode = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;

  return (
    <group ref={groupRef}>
      <lineSegments ref={edgeRef} geometry={edgeGeo}>
        <edgeMaterial ref={edgeMatRef} transparent depthWrite={false} blending={blendMode} />
      </lineSegments>

      <lineSegments ref={tendrilRef} geometry={tendrilGeo}>
        <tendrilMaterial ref={tendrilMatRef} transparent depthWrite={false} blending={blendMode} />
      </lineSegments>

      <points ref={nodeRef} geometry={nodeGeo}>
        <nodeMaterial ref={nodeMatRef} transparent depthWrite={false} blending={blendMode} sizeAttenuation />
      </points>

      {renderShockwaves.map((sw) => (
        <mesh
          key={sw.id}
          position={[sw.x, sw.y, sw.z]}
          scale={[sw.radius * 2, sw.radius * 2, 1]}
        >
          <planeGeometry args={[1, 1]} />
          <shockwaveRingMaterial
            transparent
            depthWrite={false}
            blending={blendMode}
            uColor={nodeMatRef.current ? nodeMatRef.current.uColorA : new THREE.Color(isDark ? '#38bdf8' : '#0284c7')}
            uProgress={sw.progress}
            uIsDark={isDark ? 1.0 : 0.0}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ══════════════════════════════════════════════════════════
   GLOBAL INTERACTION CAPTURE (Cursor, Click, Scroll)
══════════════════════════════════════════════════════════ */
export default function Background3D() {
  const scrollRef  = useRef(0);
  const mouseRef   = useRef({ ndcX: 0, ndcY: 0 });
  const clicksRef  = useRef([]);
  const [mounted, setMounted] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        scrollRef.current = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const onPointerMove = (e) => {
      mouseRef.current.ndcX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.ndcY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    const onPointerDown = (e) => {
      const ndcX = (e.clientX / window.innerWidth) * 2 - 1;
      const ndcY = -(e.clientY / window.innerHeight) * 2 + 1;
      clicksRef.current.push({ ndcX, ndcY });
    };
    window.addEventListener('pointerdown', onPointerDown, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 w-full h-full z-0 pointer-events-none transition-colors duration-300"
      aria-hidden="true"
    >
      {/* Subtle organic film grain texture */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '160px',
        }}
      />

      <Canvas
        camera={{ position: [0, 0, 7.8], fov: 58 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: isDark ? 1.2 : 1.0,
        }}
        dpr={[1, Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)]}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.05} />
        <NeuralNet
          scrollRef={scrollRef}
          mouseRef={mouseRef}
          clicksRef={clicksRef}
          isDark={isDark}
        />
      </Canvas>

      {/* Subtle edge vignette matching theme */}
      <div className={`absolute inset-0 z-[2] pointer-events-none transition-opacity duration-300 ${
        isDark
          ? 'bg-[radial-gradient(ellipse_95%_85%_at_50%_50%,rgba(5,5,5,0)_50%,rgba(5,5,5,0.65)_100%)]'
          : 'bg-[radial-gradient(ellipse_95%_85%_at_50%_50%,rgba(248,250,252,0)_50%,rgba(226,232,240,0.6)_100%)]'
      }`} />
    </div>
  );
}
