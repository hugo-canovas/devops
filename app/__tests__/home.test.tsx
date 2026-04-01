describe("API healthcheck", () => {
    test("GET / returns 200 and valid response", async () => {
        const res = await fetch("http://localhost:3000");

        expect(res.status).toBe(200);

        const text = await res.text();
        expect(text).toBeTruthy();
    });
});