function ensureLoggedIn(req,res,next) {
  console.log(req.signedCookies);
  if(req.signedCookies.user_id){
    next();
  } else {
    res.status(401);
    next(new Error('Unauthorized'));
  }
}

function loggedInRedirect(req,res,next) {
  if(req.signedCookies.user_id) {
    res.redirect(`/contacts/${req.signedCookies.user_id}`);
  } else next();
}

function adminOnly (req,res,next) {
  if(req.signedCookies.is_admin) {
    next();
  } else {
    res.status(401);
    next(new Error('Unauthorized'))
  }
}

function allowAccess(req,res,next) {
  if((req.signedCookies.user_id  == req.params.id)||req.signedCookies.isAdmin){
    next();
  } else {
    res.status(401);
    next(new Error('Unauthorized'));
  }
}

function logOut(req,res,next) {
  res.clearCookie('user_id');
  res.clearCookie('is_admin');
  next();
}
module.exports = {
  ensureLoggedIn,
  allowAccess,
  adminOnly,
  logOut,
  loggedInRedirect
};
