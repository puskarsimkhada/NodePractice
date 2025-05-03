import express from 'express';
import router from '../expressPractice/routes/route.js'

const app = new express()
const PORT  = 3000;
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
