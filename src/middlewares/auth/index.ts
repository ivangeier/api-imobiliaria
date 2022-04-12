import passport from 'passport';
import passportJWT from 'passport-jwt';
import config from './config';

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const params = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

export default () => {
  const strategy = new Strategy(params, (payload, done) => {
    // const user = db.findById('users', payload.id);
    // if (user) {
    // return done(null, {id: user.id});
    // } else {
    //   return done(new Error('User not found'), null);
    // }
  });
  passport.use(strategy);
  return {
    initialize: function () {
      return passport.initialize();
    },
    authenticate: function () {
      return passport.authenticate('jwt', config.jwtSession);
    },
  };
};
