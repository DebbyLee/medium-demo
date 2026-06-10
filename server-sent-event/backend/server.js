import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/events', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    res.write("data: Connection established successfully!\n\n");

    const intervalId = setInterval(() => {
        const payload = JSON.stringify({ 
            time: new Date().toLocaleTimeString(), 
            status: "OK" 
        });
        res.write(`data: ${payload}\n\n`);
    }, 3000);

    req.on('close', () => {
        clearInterval(intervalId);
        res.end();
    });
});

app.listen(PORT, () => console.log(`SSE Server running inside Docker on port ${PORT}`));
