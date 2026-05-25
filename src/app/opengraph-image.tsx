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
          backgroundColor: '#000000',
          backgroundImage:
            'radial-gradient(circle at 85% 110%, rgba(252,187,0,0.42) 0%, rgba(0,0,0,0) 55%), radial-gradient(circle at 5% 0%, rgba(59,130,246,0.20) 0%, rgba(0,0,0,0) 55%)',
          color: '#ffffff',
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
            color: '#fcbb00',
          }}
        >
          <div style={{ width: 48, height: 1, background: '#fcbb00' }} />
          EST. Las Vegas Metro · Luxury Design-Build
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              fontWeight: 300,
              letterSpacing: -2,
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Luxury remodeling</span>
            <span style={{ fontStyle: 'italic', color: '#ffd236' }}>
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
            color: 'rgba(255,255,255,0.7)',
            fontSize: 24,
            fontFamily: 'sans-serif',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
            <span style={{ fontSize: 36, color: '#ffffff' }}>VCV</span>
            <span
              style={{
                fontSize: 16,
                textTransform: 'uppercase',
                letterSpacing: 8,
                color: '#fcbb00',
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
              color: 'rgba(255,255,255,0.55)',
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
