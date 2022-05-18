export default function asyncWrapper() {
    return async (req, res, next) => {
        Promise.resolve((req, res, next))
            .catch(next);
    }
};

