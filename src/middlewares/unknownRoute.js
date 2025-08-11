export const unknownEndPoint = (req, res, next) => {
  res.status(404).json({ error: 'endPoint desconocido' })
}
