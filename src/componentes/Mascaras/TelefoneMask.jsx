const TelefoneMask = (telefone) => {
  // Remove todos os caracteres não numéricos
  telefone = telefone.replace(/\D/g, "");

  // Verifica o comprimento do número para aplicar a máscara correta
  if (telefone.length === 10) {
    telefone = telefone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  } else if (telefone.length === 11) {
    telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

  return telefone;
};

export default TelefoneMask;
