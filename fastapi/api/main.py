from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def read_main() -> dict[str, str]:
    return {"msg": "Hello World"}
