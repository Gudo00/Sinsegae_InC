"use server"


export async function loginServerAction() {

    console.log("loginServerAction");

    return {mid:'aaa', accessToken:'AAA', refreshToken:'BBB'};
}