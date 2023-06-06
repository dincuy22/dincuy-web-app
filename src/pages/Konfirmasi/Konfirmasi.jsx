import { Link, useLocation } from "react-router-dom";
import { FaCopy } from "react-icons/fa";
import Layout from "../../components/Layout";

const Konfirmasi = () => {
  const { state } = useLocation();

  return (
    <Layout>
      <div className="konfirmasi">
        <div className="rincian">
          <h2 className="rincian-title">Konfirmasi Pesanan</h2>
          <div className="rincian-desc">
            <span className="desc-title">Produk :</span>
            <span style={{ textTransform: "capitalize" }}>
              {state?.rincianProduk}
            </span>
          </div>
          <div className="rincian-desc">
            <span className="desc-title">Harga :</span>
            <span>{state?.hargaProduk}</span>
          </div>
          <div className="rincian-desc">
            <span className="desc-title">Pembayaran :</span>
            <div className="desc-payment">
              <span className="payment-pilih">
                ({state?.metodePembayaran?.pilih})
              </span>
              <div className="payment-text">
                <p>Silahkan transfer ke</p>
                <div className="text-nomor">
                  <span>{state?.metodePembayaran?.nomor}</span>
                  <FaCopy />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="next">
          <div className="next-note">
            *(Silahkan klik lanjutkan jika sudah melakukan transfer)
          </div>
          <Link className="next-link">Lanjutkan</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Konfirmasi;
