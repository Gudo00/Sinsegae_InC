import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createJWT, verifyJWT } from './app/util/jwtUtil';


export async function middleware(req: NextRequest) {

    const accessToken = req.cookies.get('access-token')?.value;
    const refreshToken = req.cookies.get('refresh-token')?.value;

    const accessPayload = accessToken ? await verifyJWT(accessToken) : null;

    console.log('$$$$$$$$$$$$$$ Access token Verify Result', accessPayload ? "No Problem Verified" : "Warning Verify Result");

    // access token이 유효하면 통과
    if (accessPayload)
        return NextResponse.next();

    console.log("---------------------------------------")
    console.log("refresh Access Token")
    // access 만료지만 refresh token 유효하면 새로 발급
    const refreshPayload = refreshToken ? await verifyJWT(refreshToken) : null;

    if (refreshPayload) {
        const user: {mid:string} = refreshPayload;

        const newAccessToken = await createJWT(user, "5m");

        const res = NextResponse.next();
        res.cookies.set('access-token', newAccessToken, {
            httpOnly: true,
            secure: true,
            path: '/',
            maxAge: 60 * 60,
        });

        return res;
    }

    return NextResponse.redirect(new URL('/member/login', req.url));
}

// 보호할 경로 지정
export const config = {
    matcher: [
        '/todo/read/:path*',
        '/todo/edit/:path*',
        '/member/mypage',
    ], // /todo 하위 경로만 검사
};