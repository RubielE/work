function AllowCrossDomain(){
    this.permisos = function(req, res, next) {
        res.header('Access-control-Allow-Origin', '*');
        res.header('Access-control-Allow-Headers', 'Content-Type');
        res.header('Access-control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        next();
    }
}

module.exports = new AllowCrossDomain();