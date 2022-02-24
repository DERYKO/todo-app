import store from '../../store';
const aclMiddleware = (to, next) => {
    const loggedIn = store.getters['loggedIn'];
    if (!loggedIn) {
        window.location.href = '/login';
        return next(false);
    }
    return next();
};

export default aclMiddleware;
