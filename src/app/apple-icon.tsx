import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
          backgroundImage:
            'radial-gradient(circle at 70% 110%, rgba(184,148,92,0.35) 0%, rgba(10,10,10,0) 60%)',
        }}
      >
        <div
          style={{
            width: 160,
            height: 160,
            borderRadius: '50%',
            border: '2px solid rgba(184,148,92,0.7)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#d4b483',
          }}
        >
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              fontSize: 56,
              letterSpacing: 1,
              lineHeight: 1,
            }}
          >
            VCV
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 11,
              letterSpacing: 8,
              textTransform: 'uppercase',
              color: 'rgba(184,148,92,0.7)',
            }}
          >
            Vegas
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
