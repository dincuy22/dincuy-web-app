import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import MyContext from "./MyContext";

const DataInternet = ({ children }) => {
  // data paket internet
  const [dataTelkom, setDataTelkom] = useState([]);
  const [dataAxis, setDataAxis] = useState([]);
  const [dataIndosat, setDataIndosat] = useState([]);
  const [dataThree, setDataThree] = useState([]);
  const [dataXl, setDataXl] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataTelkomRef = await getDocs(collection(db, "internet_telkomsel"));
      const dataAxisRef = await getDocs(collection(db, "internet_axis"));
      const dataIndosatRef = await getDocs(collection(db, "internet_indosat"));
      const dataThreeRef = await getDocs(collection(db, "internet_three"));
      const dataXlRef = await getDocs(collection(db, "internet_xl"));

      const newDataTelkom = [];
      const newDataAxis = [];
      const newDataIndosat = [];
      const newDataThree = [];
      const newDataXl = [];

      dataTelkomRef.forEach((doc) => {
        newDataTelkom.push({ ...doc.data(), kode: doc.id });
      });
      dataAxisRef.forEach((doc) => {
        newDataAxis.push({ ...doc.data(), kode: doc.id });
      });
      dataIndosatRef.forEach((doc) => {
        newDataIndosat.push({ ...doc.data(), kode: doc.id });
      });
      dataThreeRef.forEach((doc) => {
        newDataThree.push({ ...doc.data(), kode: doc.id });
      });
      dataXlRef.forEach((doc) => {
        newDataXl.push({ ...doc.data(), kode: doc.id });
      });

      setDataTelkom(newDataTelkom);
      setDataAxis(newDataAxis);
      setDataIndosat(newDataIndosat);
      setDataThree(newDataThree);
      setDataXl(newDataXl);

      // kadaluarsa 1 hari
      const expiry = new Date().getTime() + 86400000;
      localStorage.setItem(
        "dataInternet",
        JSON.stringify({
          data: {
            telkomsel: newDataTelkom,
            axis: newDataAxis,
            indosat: newDataIndosat,
            three: newDataThree,
            xl: newDataXl
          }
        })
      );
      localStorage.setItem("dataExpiry", expiry);

      console.log("fetch data firestore");
    };

    const localData = localStorage.getItem("dataInternet");
    const localExpiry = localStorage.getItem("dataExpiry");
    if (localData && localExpiry > new Date().getTime()) {
      setDataTelkom(JSON.parse(localData).data.telkomsel);
      setDataAxis(JSON.parse(localData).data.axis);
      setDataIndosat(JSON.parse(localData).data.indosat);
      setDataThree(JSON.parse(localData).data.three);
      setDataXl(JSON.parse(localData).data.xl);
    } else {
      localStorage.removeItem("dataInternet");
      localStorage.removeItem("dataExpiry");
      fetchData();
    }
    // console.log(JSON.parse(localData).data.telkomsel);
  }, []);

  return (
    <MyContext.Provider
      value={{ dataTelkom, dataAxis, dataIndosat, dataThree, dataXl }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default DataInternet;
