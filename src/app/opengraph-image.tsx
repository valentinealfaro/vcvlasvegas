import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export const alt = 'VCV Vegas · Luxury Remodeling in Las Vegas';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'radial-gradient(circle at 85% 110%, rgba(184,148,92,0.35) 0%, rgba(10,10,10,0) 55%)',
          color: '#f4f1ec',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            letterSpacing: 6,
            textTransform: 'uppercase',
            fontSize: 18,
            color: '#b8945c',
          }}
        >
          <div style={{ width: 48, height: 1, background: '#b8945c' }} />
          EST. Las Vegas Metro · Luxury Design-Build
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              fontWeight: 300,
              letterSpacing: -2,
              color: '#f4f1ec',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Luxury remodeling</span>
            <span style={{ fontStyle: 'italic', color: '#d4b483' }}>
              designed for
            </span>
            <span>Las Vegas living.</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            color: 'rgba(244,241,236,0.7)',
            fontSize: 24,
            fontFamily: 'sans-serif',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
            <span style={{ fontSize: 36, color: '#f4f1ec' }}>VCV</span>
            <span
              style={{
                fontSize: 16,
                textTransform: 'uppercase',
                letterSpacing: 8,
                color: '#b8945c',
              }}
            >
              Vegas
            </span>
          </div>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: 'rgba(244,241,236,0.55)',
            }}
          >
            Kitchens · Baths · Whole-Home
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
