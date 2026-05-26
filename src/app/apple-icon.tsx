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
          position: 'relative',
        }}
      >
        {/* Outer primary ring */}
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            right: 10,
            bottom: 10,
            borderRadius: '50%',
            border: '2px solid rgba(252,187,0,0.85)',
          }}
        />
        {/* Inner secondary ring for the watchmaker emblem feel */}
        <div
          style={{
            position: 'absolute',
            top: 26,
            left: 26,
            right: 26,
            bottom: 26,
            borderRadius: '50%',
            border: '1px solid rgba(252,187,0,0.25)',
          }}
        />
        {/* Top cardinal gold dot */}
        <div
          style={{
            position: 'absolute',
            top: 14,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#fcbb00',
          }}
        />

        <div
          style={{
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
              marginTop: 10,
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
