import Iron from "@hapi/iron";

export async function createLoginSession(session, secret) {
    const createdAt = Date.now();
    const obj = { ...session, createdAt }
}