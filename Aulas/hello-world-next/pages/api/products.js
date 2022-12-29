export default function teste(req, res) {
    if (req.method !== 'POST') { 
        res.redirect('/')
    }

    res.send(200)
}