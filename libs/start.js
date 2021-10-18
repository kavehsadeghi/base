module.exports = app => {
    let port = 3000;
    app.listen(port, function () {
        console.log(`Server running on port ${port}`)
    })
}