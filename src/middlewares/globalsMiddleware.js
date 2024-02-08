exports.demoMidd = (req, res, next) => {
    console.log('estou funcionando apartir de um middleware');
    next();
}