


import { SignJWT, jwtVerify } from "jose";


const SECRET_KEY = process.env.JWT_SECRET;

const encoder = new TextEncoder();

const secret = encoder.encode(SECRET_KEY);


export async function createJWT(payload: any, expiresIn = "1h") {

    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime(expiresIn)
        .sign(secret);

}


/** JWT 검증 */
export async function verifyJWT(token: string) {
    try {
        const { payload } = await jwtVerify(token, secret);
        return payload as unknown as {mid:string, exp:number};
    } catch (error) {
        return null;
    }
}