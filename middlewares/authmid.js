function authmid (req,res,next) {
    const token = req.headers.access_token;
    if(!token) return res.status(401).send();

    try {
        const decoderUser = verify(token, process.env.JWT_SECRET);
        req.user = decoderUser;

    } catch(error) {
        res.status(401).send();
    }

    return neex();
}

module.exports = authmid;