export const konversiHarga = (nominal, profit) => {
  const newTotalHarga = Math.ceil(
    parseInt(nominal.replace(/[^\d]/g, ""), 10) + profit
  );

  const bulatkan = Math.ceil(newTotalHarga / 1000) * 1000;

  return "Rp." + bulatkan.toLocaleString("id-ID");
};
