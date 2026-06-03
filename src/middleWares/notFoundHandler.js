const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    data: null,
    message: `requested url ${req.path} not found` // here you can also use req.originalUrl to get the full url including query parameters
  });
}

export default notFoundHandler;
