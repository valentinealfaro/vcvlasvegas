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
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            border: '1px solid #fcbb00',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffd236',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            fontSize: 22,
            fontWeight: 400,
            letterSpacing: 0.5,
          }}
        >
          VCV
        </div>
      </div>
    ),
    { ...size },
  );
}
