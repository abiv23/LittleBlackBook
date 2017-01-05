function ensureLoggedIn(req,res,next) {
  if(req.signedCookies.user_id){
    next();
  } else {
    res.status(401);
    next(new Error('Unauthorized'));
  }
}

function onlyAdmin(req,res,next) {
  if(req.signedCookies.is_admin) {
    next();
  } else res.status(401);
  next(new Error('Unauthorized'));
}

function allowAccess(req,res,next) {
  if(req.signedCookies.user_id  == req.params.id){
    console.log(req.signedCookies.user_id, req.params.id)
    next();
  } else {
    res.status(401);
    next(new Error('Unauthorized'));
  }
}
module.exports = {
  ensureLoggedIn,
  allowAccess,
  onlyAdmin
}
