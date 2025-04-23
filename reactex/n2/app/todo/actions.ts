
'use server'

export async function addServerAction (todo:Todo) {

    console.log("adding server action")
    //실제 서버 액션을 호출
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {result:123}
}