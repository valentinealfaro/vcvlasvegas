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
          background: '#000000',
          backgroundImage:
            'radial-gradient(circle at 70% 110%, rgba(252,187,0,0.40) 0%, rgba(0,0,0,0) 60%), radial-gradient(circle at 0% 0%, rgba(59,130,246,0.18) 0%, rgba(0,0,0,0) 55%)',
        }}
      >
        <div
          style={{
            width: 160,
            height: 160,
            borderRadius: '50%',
            border: '2px solid rgba(252,187,0,0.85)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffd236',
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
              color: 'rgba(252,187,0,0.85)',
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
