const errorMidleware = (err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError': res.status(400).json({ message }); break;
    case 'NotFoundError': res.status(404).json({ message }); break;
    case 'UnauthorizedError': res.status(400).json({ message }); break;
    default: res.status(500).json(err.message);
  }
};

module.exports = errorMidleware;