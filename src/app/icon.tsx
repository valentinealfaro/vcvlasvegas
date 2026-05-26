import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: '50%',
          position: 'relative',
        }}
      >
        {/* Outer ring */}
        <div
          style={{
            position: 'absolute',
            top: 2,
            left: 2,
            right: 2,
            bottom: 2,
            borderRadius: '50%',
            border: '1px solid #fcbb00',
          }}
        />
        {/* Inner ring */}
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            right: 10,
            bottom: 10,
            borderRadius: '50%',
            border: '1px solid rgba(252,187,0,0.25)',
          }}
        />
        {/* VCV text */}
        <div
          style={{
            color: '#ffd236',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            fontSize: 22,
            fontWeight: 400,
            letterSpacing: 0.5,
            display: 'flex',
          }}
        >
          VCV
        </div>
      </div>
    ),
    { ...size },
  );
}
