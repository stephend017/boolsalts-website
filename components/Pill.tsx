"use client";
import { useState } from "react";
import {
  BoltIcon, CpuChipIcon, SparklesIcon, GlobeEuropeAfricaIcon, TruckIcon,
  ComputerDesktopIcon, TrophyIcon, PaperAirplaneIcon, MoonIcon, LightBulbIcon, RocketLaunchIcon,
} from "@/components/Icons";

type IconKey = "laptop" | "dumbbell" | "plane" | "bottle" | "brain" | "muscle";

function UseCaseIcon({ name, className }: { name: string; className?: string }) {
  const map: Record<IconKey, React.ReactNode> = {
    laptop:   <ComputerDesktopIcon className={className} />,
    dumbbell: <TrophyIcon className={className} />,
    plane:    <PaperAirplaneIcon className={className} />,
    bottle:   <MoonIcon className={className} />,
    brain:    <LightBulbIcon className={className} />,
    muscle:   <RocketLaunchIcon className={className} />,
  };
  return <>{map[name as IconKey] ?? null}</>;
}

function hexToRgb(hex: string): [number, number, number] | null {
  if (!hex.startsWith("#")) return null;
  const h = hex.slice(1);
  if (h.length === 3) {
    const r = parseInt(h[0] + h[0], 16);
    const g = parseInt(h[1] + h[1], 16);
    const b = parseInt(h[2] + h[2], 16);
    return [r, g, b];
  }
  if (h.length === 6) {
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return [r, g, b];
  }
  return null;
}

function colorWithAlpha(color: string, alpha: number): string | null {
  const rgbFromHex = hexToRgb(color);
  if (rgbFromHex) {
    const [r, g, b] = rgbFromHex;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  if (color.startsWith("rgb(")) {
    // convert rgb(...) or rgba(...) to rgba with new alpha
    const nums = color.replace(/rgba?\(|\)/g, "").split(",").map(s => s.trim());
    if (nums.length >= 3) {
      const r = parseInt(nums[0], 10);
      const g = parseInt(nums[1], 10);
      const b = parseInt(nums[2], 10);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
  }
  return null;
}

export default function Pill({
  children,
  color,
  icon
}: {
  children: React.ReactNode;
  color: string;
  icon?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const baseBg = ((): string => {
    const base = colorWithAlpha(color, 0.27);
    if (base) return base;
    // fallback to hex with 0x44 if color appears to be hex
    if (color.startsWith("#") && (color.length === 7 || color.length === 4)) return `${color}44`;
    return color;
  })();

  const shimmerStart = colorWithAlpha(color, 0.45);
  const shimmerMid = colorWithAlpha(color, 0.15);
  const shimmerGradient = shimmerStart && shimmerMid
    ? `linear-gradient(90deg, ${shimmerStart} 0%, ${shimmerMid} 50%, ${shimmerStart} 100%)`
    : "linear-gradient(90deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.45) 100%)";
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-block font-display-normal text-xs tracking-[0.25em] px-3 py-1.5 mb-5"
      style={{
        backgroundColor: baseBg,
        backgroundImage: hovered ? shimmerGradient : "none",
        backgroundSize: hovered ? "200% 100%" : "100% 100%",
        backgroundPosition: hovered ? "200% 0" : "0% 0",
        transition: "background-position 700ms ease, background-size 700ms ease",
        border: `0px`,
        color: color,
      }}
    >
      {icon && <UseCaseIcon name={icon} className="w-4 h-4 inline mr-2" />}
      {children}
    </span>
  );
}