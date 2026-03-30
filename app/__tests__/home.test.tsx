async function test() {
    const res = await fetch("http://localhost:3000");

    if (res.status === 200) {
        console.log("test PASS");
    } else {
        console.log("fail test");
        process.exitCode = 1;
    }
}

test();
