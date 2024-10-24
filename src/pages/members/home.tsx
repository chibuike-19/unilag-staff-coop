import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";
import dash from "../../../public/imgs/dash.svg";
import { BsPrinter } from "react-icons/bs";
import Image from "next/image";
// @ts-ignore
// import html2pdf from "html2pdf.js";
import dynamic from "next/dynamic";

// const TerminalComponent = dynamic(() => import('<path-to>/components/terminal-component'), {
//     ssr: false
// })

const MembersPage = () => {
  const router = useRouter();

  const { currentUser, setCurrentUser } = useAuth();

  const handlePrint = async () => {
    // @ts-ignore

    const html2pdf = (await import("html2pdf.js")).default;
    const content = document.getElementById("printable-content");

    const pdfOptions = {
      margin: 10,
      filename: `${currentUser?.[" FULL NAME "]}-dividend.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(content).set(pdfOptions).save();
  };

  const INTIAL_ENTERTAINMENT = parseFloat(currentUser?.entertainment!).toFixed(
    2
  );
  const ENTERTAINMENT = parseFloat(INTIAL_ENTERTAINMENT).toLocaleString();

  const INTIAL_DIVIDEND = parseFloat(currentUser?.dividends!).toFixed(2);
  const DIVIDEND = parseFloat(INTIAL_DIVIDEND).toLocaleString();

  const INTIAL_SHARES = parseFloat(currentUser?.shares!).toFixed(2);
  const SHARES = parseFloat(INTIAL_SHARES).toLocaleString();

  const INTIAL_TOTAL = parseFloat(currentUser?.total!).toFixed(2);
  const TOTAL = parseFloat(INTIAL_TOTAL).toLocaleString();

  const INTIAL_SOUVENIR = parseFloat(currentUser?.souvenir!).toFixed(2);
  const SOUVENIR = parseFloat(INTIAL_SOUVENIR).toLocaleString();

  return (
    <div className="p-6">
      <div className="md:pl-8 lg:pl-0">
        <p className="text-[21px] font-semibold pb-4">
          Welcome {currentUser?.fullname}
        </p>
      </div>
      <div id="printable-content">
        <div className="flex justify-center flex-col gap-6 items-center">
          <h1 className="md:w-[32rem] w-[100%] text-center rounded-sm text-[1.5rem] font-semibold py-6 bg-green-400 text-white">
            Dividends
          </h1>
          <div className="grid p-6 lg:grid-cols-4 md:grid-cols-3 md:w-auto w-[20rem] grid-cols-1 xl:gap-24 md:gap-20 gap-16 border-2 border-slate-100 shadow-md">
            <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
              <p className="text-[18px] mb-2">Full Name</p>
              <p className="font-bold text-[21px]">{currentUser?.fullname}</p>
            </div>
            <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
              <p className="text-[18px] mb-2">Pass book Number</p>
              <p className="font-bold text-[21px]">{currentUser?.pbno}</p>
            </div>
            {/* <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Account Number</p>
                <p className="font-bold text-[21px]">
                  {currentUser?.account_no}
                </p>
              </div> */}
            {/* <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Bank</p>
                <p className="font-bold text-[21px]">{currentUser?.bank}</p>
              </div> */}
            <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
              <p className="text-[18px] mb-2">Entertainment</p>
              <div className="font-bold text-[21px]">
                {currentUser?.entertainment ? (
                  `#${ENTERTAINMENT}`
                ) : (
                  <p className="h-1 mt-4 w-16 bg-black"></p>
                )}
              </div>
            </div>
            <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
              <p className="text-[18px] mb-2">Shares</p>
              <div className="font-bold text-[21px]">
                {currentUser?.shares ? (
                  `#${SHARES}`
                ) : (
                  <p className="h-1 mt-4 w-16 bg-black"></p>
                )}
              </div>
            </div>
            <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2 ">
              <p className="text-[18px] mb-2">Dividend</p>
              <div className="font-bold text-[21px]">
                {currentUser?.dividends ? (
                  `#${DIVIDEND}`
                ) : (
                  <p className="h-1 mt-4 w-16 bg-black"></p>
                )}
              </div>
            </div>
            <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
              <p className="text-[18px] mb-2"> Souvenir</p>
              <p className="font-bold text-[21px]">
                {currentUser?.souvenir ? (
                  `#${SOUVENIR}`
                ) : (
                  <p className="h-1 mt-4 w-16 bg-black"></p>
                )}
              </p>
            </div>
            <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
              <p className="text-[18px] mb-2">Total</p>
              <div className="font-bold text-[21px]">
                {currentUser?.total ? (
                  `#${TOTAL}`
                ) : (
                  <p className="h-1 mt-4 w-16 bg-black"></p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4 justify-start md:justify-center">
            <button
              className="bg-theme-color flex items-center gap-2 text-white py-4 px-6 rounded-md"
              onClick={handlePrint}
            >
              <p>Print</p> <BsPrinter />
            </button>
            <button
              className="bg-theme-color text-white py-4 px-6 rounded-md"
              onClick={() => {
                setCurrentUser(null);
                router.push("/sign-in/member-login");
              }}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MembersPage;
