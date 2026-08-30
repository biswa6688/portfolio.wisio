import type { SVGProps } from "react";

/**
 * All illustrations here are hand-built SVG, driven by currentColor and
 * the --color-signal-* tokens, so they always match the active theme
 * (light/dark/system) instead of drifting from a stock photo's palette.
 */

const wrap = (extra?: string) => `${extra ?? ""}`.trim();

export function WaveformArt(props: SVGProps<SVGSVGElement>) {
  const bars = [12, 22, 34, 20, 44, 30, 52, 18, 40, 26, 46, 16, 28, 38, 14];
  return (
    <svg viewBox="0 0 320 80" fill="none" className={wrap(props.className)} {...props}>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 21 + 4}
          y={40 - h / 2}
          width="9"
          rx="4"
          height={h}
          fill="currentColor"
          opacity={0.35 + (i % 4) * 0.16}
        />
      ))}
    </svg>
  );
}

export function CallHandsetArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={wrap(props.className)} {...props}>
      <circle cx="80" cy="80" r="78" stroke="currentColor" strokeOpacity="0.18" />
      <circle cx="80" cy="80" r="58" stroke="currentColor" strokeOpacity="0.28" />
      <path
        d="M52 46c4-4 12-8 17-3l9 9c4 4 2 10-2 14l-4 4c3 9 9 18 16 25s16 13 25 16l4-4c4-4 10-6 14-2l9 9c5 5 1 13-3 17-9 9-24 8-38 1-16-8-31-23-39-39-7-14-8-29 1-38 3-3 8-6 11-9Z"
        fill="currentColor"
      />
      <circle cx="118" cy="42" r="5" fill="currentColor" className="animate-pulse-ring origin-center" />
      <circle cx="118" cy="42" r="5" fill="currentColor" />
    </svg>
  );
}

export function IvrTreeArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={wrap(props.className)} {...props}>
      <circle cx="80" cy="26" r="10" fill="currentColor" />
      {[30, 80, 130].map((x, i) => (
        <g key={i}>
          <path d={`M80 36 L${x} 76`} stroke="currentColor" strokeOpacity="0.4" strokeWidth="2" />
          <circle cx={x} cy="80" r="8" fill="currentColor" opacity={0.85} />
          <path d={`M${x} 88 L${x} 122`} stroke="currentColor" strokeOpacity="0.4" strokeWidth="2" />
          <rect x={x - 14} y="124" width="28" height="18" rx="4" fill="currentColor" opacity={0.55} />
        </g>
      ))}
    </svg>
  );
}

export function OutboundCampaignArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={wrap(props.className)} {...props}>
      <rect x="24" y="30" width="112" height="80" rx="8" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
      <path d="M24 46h112" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <rect key={`${r}-${c}`} x={36 + c * 25} y={58 + r * 16} width="16" height="8" rx="2" fill="currentColor" opacity={0.3 + ((r + c) % 3) * 0.2} />
        ))
      )}
      <circle cx="118" cy="122" r="18" fill="currentColor" opacity="0.15" />
      <path d="M110 122h16M118 114v16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function SoftphoneSdkArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={wrap(props.className)} {...props}>
      <rect x="52" y="20" width="56" height="120" rx="12" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" />
      <circle cx="80" cy="126" r="4" fill="currentColor" />
      <path d="M70 50l-14 14 14 14M90 50l14 14-14 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M78 44l4 40" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
    </svg>
  );
}

export function ScreenRecorderArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={wrap(props.className)} {...props}>
      <rect x="22" y="34" width="116" height="76" rx="8" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" />
      <path d="M60 130h40M80 110v20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="80" cy="72" r="20" fill="currentColor" opacity="0.18" />
      <circle cx="80" cy="72" r="10" fill="currentColor" />
      <circle cx="80" cy="72" r="20" stroke="currentColor" strokeOpacity="0.4" className="animate-pulse-ring origin-center" />
    </svg>
  );
}

export function WebrtcSdkArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={wrap(props.className)} {...props}>
      <rect x="18" y="26" width="124" height="90" rx="8" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.45" />
      <path d="M18 44h124" stroke="currentColor" strokeOpacity="0.45" strokeWidth="2" />
      <circle cx="30" cy="35" r="2.5" fill="currentColor" opacity="0.6" />
      <circle cx="40" cy="35" r="2.5" fill="currentColor" opacity="0.6" />
      <circle cx="55" cy="80" r="10" fill="currentColor" opacity="0.8" />
      <circle cx="105" cy="80" r="10" fill="currentColor" opacity="0.8" />
      <path d="M65 80h30" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 5" />
      <path d="M80 130l-8 12h16z" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function ExportCrateArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={wrap(props.className)} {...props}>
      <path d="M30 60l50-24 50 24-50 24-50-24Z" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" strokeLinejoin="round" />
      <path d="M30 60v46l50 24 50-24V60" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" strokeLinejoin="round" />
      <path d="M80 84v46" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" />
      <path d="M55 47c6 10 6 20 0 28" stroke="currentColor" strokeWidth="2" opacity="0.7" />
      <circle cx="55" cy="47" r="4" fill="currentColor" />
    </svg>
  );
}

export function GemstoneArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={wrap(props.className)} {...props}>
      <path
        d="M50 42h60l24 30-58 52-58-52 22-30Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeOpacity="0.55"
      />
      <path d="M50 42l30 30 30-30M18 72h124M80 72v52" stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.5" />
      <path d="M50 42l-8 30M110 42l8 30" stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.5" />
    </svg>
  );
}

export function NetworkMlmArt(props: SVGProps<SVGSVGElement>) {
  const nodes = [
    [80, 26],
    [40, 66],
    [120, 66],
    [22, 116],
    [58, 116],
    [102, 116],
    [138, 116],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [2, 6],
  ];
  return (
    <svg viewBox="0 0 160 140" fill="none" className={wrap(props.className)} {...props}>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.6" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 0 ? 9 : 6.5} fill="currentColor" opacity={i === 0 ? 1 : 0.75} />
      ))}
    </svg>
  );
}
