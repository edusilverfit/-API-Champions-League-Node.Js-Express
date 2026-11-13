import createApp from "./app";

const app = createApp();
const port = Number(process.env.PORT) || 3334;

app.listen(port, () => {
  console.log(`🔥 Server running at port http://localhost:${port}`);
});

