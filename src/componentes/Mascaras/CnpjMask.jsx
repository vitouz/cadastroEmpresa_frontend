// Função para formatar o CNPJ
const CnpjMask = (cnpj) => {
  // Remove todos os caracteres não numéricos
  cnpj = cnpj.replace(/\D/g, "");

  // Aplica a máscara
  cnpj = cnpj.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5"
  );

  return cnpj;
};

export default CnpjMask;
