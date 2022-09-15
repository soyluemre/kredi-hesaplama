const select = document.querySelector(".form-select");
const vade = document.querySelector("#vade");
const tutar = document.querySelector("#tutar");
const btn = document.querySelector(".btn");
let oran = 0;
let taksit = 0;

btn.addEventListener("click", () => {
  if (select.value === "Konut Kredisi") {
    oran = 1.29;
  } else if (select.value === "Ihtiyac Kredisi") {
    oran = 1.99;
  } else if (select.value === "Arac Kredisi") {
    oran = 1.79;
  } else {
    alert("Kredi Türü Seçiniz");
  }
  if (!select.value || !vade.value || !tutar.value) {
    alert("Lütfen Formu Eksiksiz Doldurunuz");
  }

  const faiz = oran / 100;
  taksit =
    (tutar.value * (faiz * (1 + faiz) ** vade.value)) /
    ((1 + faiz) ** vade.value - 1);

  tabloGöster();
});
const tabloGöster = () => {
  const sonuc = document.querySelector(".tablo");

  sonuc.innerHTML = `
    <h2 class="text-dark mt-5 mb-5 display-6 text-center">Kredi Bilgileri</h2>
    <table class="table table-bordered border-warning mt-4 align-items-center me-6 mb-5">
        <tbody>
            <tr>
                <th>Kredi Miktarı</th>
                <td>${tutar.value} ₺</td>
                <th>Kredi Tipi</th>
                <td>${select.value}</td>
            </tr>
            <tr>
                <th>Vade</th>
                <td>${vade.value} Ay</td>
                <th>Faiz Oranı</th>
                <td>${oran}</td>
            </tr>
            <tr>
                <th>Toplam Tutar</th>
                <td>${(taksit * vade.value).toFixed(2)} ₺</td>
                <th>Taksit Tutarı</th>
                <td>${taksit.toFixed(2)}</td>
            </tr>

        </tbody>
    </table>
`;
};
