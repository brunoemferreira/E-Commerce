module.exports = {
  secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "094094KLFK43FIJ34K34P43324209456PKT408943OIEF8948094KFSDSDFMBKLFJFIRO",
  api: process.env.NODE_ENV === "production" ? "https://api.loja-teste.ampliee.com" : "http://localhost:3000",
  loja: process.env.NODE_ENV === "production" ? "https://loja-teste.ampliee.com" : "http://localhost:8000",
}